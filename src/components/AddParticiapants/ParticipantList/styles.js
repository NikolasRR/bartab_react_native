import { StyleSheet, Dimensions } from "react-native";
import { width, height } from "../../../support/Dimensions";

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
    flex: 1
  },
  participantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    width: width * 0.8,
    height: height * 0.07,
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20,
    backgroundColor: '#fff09f'
  },
  text: {
    fontSize: height * 0.025,
    fontFamily: 'Montserrat'
  }
})

export default styles;