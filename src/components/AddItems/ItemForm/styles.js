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
    fontSize: 25
  },
  continueButton: {
    height: 60,
    backgroundColor: 'rgb(255,215,0)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  continueButtonText: {
    color: 'rgb(139,69,19)',
    fontSize: 25,
    fontWeight: '600'
  }
})

export const inputStyles = (flex, margin) => StyleSheet.create({
  input: {
    backgroundColor: 'white',
    flex: flex,
    paddingLeft: 5,
    marginRight: margin,
    height: 60
  }
})

export default styles;