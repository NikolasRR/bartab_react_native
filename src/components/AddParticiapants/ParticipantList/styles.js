import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  participantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    width: 300,
    height: 40,
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20
  },
  text: {
    fontSize: 20,
  }
})

export default styles;