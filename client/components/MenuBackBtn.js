import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";

function MenuBackBtn({ onClose }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onClose} style={styles.container}>
      <Feather name="arrow-left" size={35} color={theme.purple}></Feather>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      marginBottom: 40,
      alignSelf: "flex-start",
    },
  });

export default MenuBackBtn;
