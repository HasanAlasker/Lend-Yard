
import { View, StyleSheet} from "react-native";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import SafeScreen from "../../components/SafeScreen";
import useThemedStyles from "../../hooks/useThemedStyles";
import Post from "../../components/Post";
import ScrollScreen from "../../components/ScrollScreen";

function Have(props) {
  const styles = useThemedStyles(getStyles);
  return (
    <SafeScreen>
      <SearchBar></SearchBar>
      <ScrollScreen>
        <Post
          profilePic={require('../../assets/Pics/hasan.png')}
          name={"Hasan Alasker"}
          date={"12/ 1/ 2026"}
          image={require('../../assets/Pics/lm.png')}
          itemName={"Lawn mower"}
          itemCat={'Garden'}
          area={"Jabal al kursi"}
          status={"taken"}
          rating={4.9}
          condition={"Slightly used"}
          title={"Request"}
          time={""}
          onPressBtn={''}
          onPressThree={()=>{console.log(3)}}
          isDisabled={false}
        ></Post>
        <Post
          name={"Yazan Nabas"}
          date={"12/ 1/ 2026"}
          image={require('../../assets/Pics/image.png')}
          itemName={"Electric saw"}
          itemCat={'Tools'}
          area={"Al madinah al munawara Street"}
          status={"available"}
          rating={'Unrated'}
          condition={"Heavily used"}
          title={"Request"}
          time={""}
          onPressBtn={''}
          onPressThree={()=>{console.log(3)}}
          isDisabled={false}
        ></Post>
      </ScrollScreen>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      
    },
  });

export default Have;
