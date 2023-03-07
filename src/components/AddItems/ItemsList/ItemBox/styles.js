import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    height: 250,
    width: 200,
    backgroundColor: '#E0EAF4',
    borderRadius: 20,
    paddingTop: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  participantContainer: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    width: 300,
    height: 65,
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20
  },
  subContainer: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
  },
  name: {
    fontSize: 19,
    marginTop: 2
  },
  price: {
    fontSize: 17,
    color: '#359c35',
    width: 90,
    justifyContent: 'center'
  },
  amount: {
    fontSize: 17,
    width: 40,
    justifyContent: 'center'
  }
})

export default styles;