import { StyleSheet } from "react-native";

const styles = StyleSheet
  .create({
    container: {
      height: 120,
      backgroundColor: 'blue'
    },
    inputDiv: {
      flexDirection: 'row'
    },
    input: {
      backgroundColor: 'white',
      height: 60,
      flex: 2,
      paddingLeft: 10,
      fontFamily: 'Montserrat'
    },
    addButton: {
      flex: 1,
      backgroundColor: '#8b4513',
      alignItems: 'center',
      justifyContent: 'center'
    },
    addButtonText: {
      color: '#ffd700',
      fontSize: 25,
      fontFamily: 'Montserrat'
    },
  })

export const continueButton = (backgroundColor) => StyleSheet.create({
  style: {
    height: 60,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const continueButtonText = (color) => StyleSheet.create({
  style: {
    color: color,
    fontSize: 25,
    fontFamily: 'Montserrat',
  }
})

export default styles;