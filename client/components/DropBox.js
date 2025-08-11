import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import AppText from "../config/AppText";
import BackContainer from "../components/BackContainer";
import MenuBackBtn from "../components/MenuBackBtn";
import MenuOption from "../components/MenuOption";
import SeparatorComp from "../components/SeparatorComp";

function DropBox({ 
  placeholder, 
  penOn, 
  items, 
  onSelectItem, 
  selectedValue, 
  disabled,
  error,
  errorMessage 
}) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  const [modal, setModal] = useState(false);

  // Find the selected item to display its label
  const selectedItem = items.find(item => item.value === selectedValue);
  const displayText = selectedItem ? selectedItem.label : placeholder;

  const handlePress = () => {
    if (!disabled) {
      setModal(true);
    }
  };

  const handleSelectItem = (item) => {
    setModal(false);
    onSelectItem(item.value); // ✅ FIXED: Pass only the value, not the entire object
  };

  return (
    <>
      <View>
        <TouchableOpacity
          onPress={handlePress}
          style={[
            styles.container,
            disabled && styles.disabled,
            error && styles.error
          ]}
          disabled={disabled}
        >
          <View style={styles.left}>
            {penOn && (
              <Feather 
                name="edit-3" 
                size={24} 
                color={disabled ? theme.gray || '#ccc' : theme.purple}
              />
            )}
            <AppText style={[
              styles.text,
              disabled && styles.disabledText,
              !selectedItem && styles.placeholderText
            ]}>
              {displayText}
            </AppText>
          </View>
          <Feather 
            name="chevron-down" 
            size={26} 
            color={disabled ? theme.gray || '#ccc' : theme.purple}
          />
        </TouchableOpacity>

        {/* Error Message */}
        {error && errorMessage && (
          <View style={styles.errorContainer}>
            <AppText style={styles.errorText}>{errorMessage}</AppText>
          </View>
        )}
      </View>

      <Modal visible={modal && !disabled} animationType="slide" transparent>
        <View style={styles.modalContent}>
          <BackContainer style={styles.back}>
            <MenuBackBtn
              onClose={() => {
                setModal(false);
              }}
            />
          </BackContainer>

          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <MenuOption
                text={item.label}
                onPress={() => handleSelectItem(item)} // ✅ FIXED: Use the handler function
              />
            )}
            ItemSeparatorComponent={() => 
              <SeparatorComp style={styles.sep} />
            }
            contentContainerStyle={styles.list}
          />
        </View>
      </Modal>
    </>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    back: {
      marginVertical: 0,
      marginTop: 25,
    },
    container: {
      flexDirection: "row",
      borderRadius: 18,
      borderColor: theme.purple,
      borderWidth: 2,
      justifyContent: "space-between",
      backgroundColor: theme.post,
      paddingVertical: 5,
      paddingHorizontal: 15,
      width: "90%",
      marginHorizontal: "auto",
      marginTop: 20,
    },
    text: {
      color: theme.purple,
      fontWeight: "bold",
      fontSize: 16,
      textAlignVertical: "center",
    },
    left: {
      flexDirection: "row",
      gap: 10,
    },
    modalContent: {
      backgroundColor: theme.post,
      borderRadius: 20,
      flex: 1,
    },
    list: {
      width: "90%",
      marginHorizontal: "auto",
      paddingBottom: 20,
    },
    sep: {
      width: "100%",
      marginTop: 5,
      marginBottom: 5,
    },
  });

export default DropBox;
