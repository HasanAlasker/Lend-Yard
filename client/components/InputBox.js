import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";

function InputBox({ placeholder, penOn, icon, value, ...rest }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {penOn && <Feather name="edit-3" size={24} color={theme.purple} />}
      {icon && <Feather name={icon} size={24} color={theme.purple} />}
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        placeholderTextColor={theme.purple}
        value={value}
        {...rest}
      />
    </View>
  );
}


const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      borderRadius: 18,
      borderColor: theme.purple,
      borderWidth: 2,
      backgroundColor: theme.post,
      paddingVertical: 5,
      paddingHorizontal: 15,
      width: "90%",
      marginHorizontal: "auto",
      marginTop: 20,
      gap: 10,
      minHeight: 40,
    },
    text: {
      color: theme.purple,
      fontWeight: "bold",
      fontSize: 16,
      flex:1,
      padding:0,
      margin:0,
      textAlignVertical:'center'
    },
  });

export default InputBox;
