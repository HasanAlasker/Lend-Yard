import { View, StyleSheet } from 'react-native';

function UserPicAndRateContainer({children}) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    gap:10
  },
})

export default UserPicAndRateContainer;