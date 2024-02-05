import { StyleSheet } from "react-native";
import { height } from "../../../support/Dimensions";

const styles = StyleSheet
  .create({
    container: {
      height: height * 0.15,
      backgroundColor: 'blue'
    },
    inputDiv: {
      flexDirection: 'row'
    },
    input: {
      backgroundColor: 'white',
      height: height * 0.075,
      flex: 2,
      paddingLeft: 10,
      fontFamily: 'Montserrat',
      fontSize: height * 0.02
    },
    addButton: {
      flex: 1,
      backgroundColor: '#8b4513',
      alignItems: 'center',
      justifyContent: 'center'
    },
    addButtonText: {
      color: '#ffd700',
      fontSize: height * 0.03,
      fontFamily: 'Montserrat'
    },
  })

export const continueButton = (backgroundColor) => StyleSheet.create({
  style: {
    height: height * 0.075,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const continueButtonText = (color) => StyleSheet.create({
  style: {
    color: color,
    fontSize: height * 0.03,
    fontFamily: 'Montserrat',
  }
})

export default styles;