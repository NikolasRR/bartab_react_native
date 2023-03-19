import { StyleSheet } from "react-native";

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
    borderWidth: 1,
    width: 300,
    height: 40,
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20,
    backgroundColor: '#fff09f'
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat'
  }
})

export default styles;