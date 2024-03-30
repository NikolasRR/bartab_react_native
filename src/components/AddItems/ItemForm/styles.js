import { StyleSheet } from "react-native"
import { height } from "../../../support/Dimensions";

const styles = StyleSheet.create({
  container: {
  },
  inputs: {
    flexDirection: 'row'
  },
  addButton: {
    backgroundColor: 'rgb(139,69,19)',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.075
  },
  addButtonText: {
    color: 'rgb(255,215,0)',
    fontSize: height * 0.028,
    fontFamily: 'Montserrat'
  }
})

export const inputStyles = (flex, margin) => StyleSheet.create({
  input: {
    backgroundColor: 'white',
    flex: flex,
    paddingLeft: 5,
    marginRight: margin,
    height: height * 0.075,
    fontFamily: 'Montserrat',
    fontSize: height * 0.017
  }
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
    fontSize: height * 0.028,
    fontFamily: 'Montserrat',
  }
})

export default styles;