import { StyleSheet } from "react-native"

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
    height: 60
  },
  addButtonText: {
    color: 'rgb(255,215,0)',
    fontSize: 25,
    fontFamily: 'Montserrat'
  }
})

export const inputStyles = (flex, margin) => StyleSheet.create({
  input: {
    backgroundColor: 'white',
    flex: flex,
    paddingLeft: 5,
    marginRight: margin,
    height: 60,
    fontFamily: 'Montserrat',
    fontSize: 13
  }
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