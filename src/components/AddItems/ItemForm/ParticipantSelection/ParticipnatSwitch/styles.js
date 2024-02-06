import { StyleSheet } from "react-native";
import { height, width } from "../../../../../support/Dimensions";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    width: width * 0.4,
  },
  name: {
    fontFamily: 'Montserrat-medium',
    fontSize: height * 0.017
  },
  switch: { transform: [{ scaleX: height * 0.0013 }, { scaleY: height * 0.0013 }] }
})

export default styles;