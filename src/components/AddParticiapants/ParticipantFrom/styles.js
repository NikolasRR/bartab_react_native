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
    paddingLeft: 10
  },
  addButton: {
    flex: 1,
    backgroundColor: 'rgb(139,69,19)',
    alignItems: 'center',
    justifyContent: 'center'
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

export default styles;