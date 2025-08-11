import { View, StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import AppText from "../config/AppText";

function FormBtn({ title, onPress }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      borderRadius: 18,
      borderColor: theme.purple,
      borderWidth: 2,
      backgroundColor: theme.purple,
      paddingVertical: 5,
      paddingHorizontal: 15,
      width: "90%",
      marginHorizontal: "auto",
      marginTop: 30,
      gap: 10,
      minHeight: 40,
    },
    text: {
      color: theme.always_white,
      fontWeight: "bold",
      fontSize: 20,
      flex:1,
      padding:0,
      margin:0,
      textAlign:'center'
    },
  });

export default FormBtn;
