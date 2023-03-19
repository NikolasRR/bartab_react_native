import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    height: 300,
    width: 250,
    backgroundColor: '#F5F5DC',
    borderRadius: 20,
    paddingVertical: 20,
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
  flatList: {
    width: 200,
    alignItems: 'center'
  },
  modalParticipant: {
    fontFamily: 'Montserrat-medium',
    marginTop: 10,
    fontSize: 15,
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
    marginBottom: 20,
    backgroundColor: '#fff09f'
  },
  subContainer: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
  },
  name: {
    fontSize: 19,
    marginTop: 2,
    fontFamily: 'Montserrat'
  },
  price: {
    fontSize: 17,
    color: '#359c35',
    width: 90,
    justifyContent: 'center',
    fontFamily: 'Montserrat'
  },
  amount: {
    fontSize: 17,
    width: 40,
    justifyContent: 'center',
    fontFamily: 'Montserrat'
  }
})

export default styles;