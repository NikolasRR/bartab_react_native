import { StyleSheet } from "react-native";
import { height, width } from '../../../../support/Dimensions';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    height: height * 0.4,
    width: width * 0.6,
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
    width: width * 0.5,
    alignItems: 'center'
  },
  modalParticipant: {
    fontFamily: 'Montserrat-medium',
    marginTop: 10,
    fontSize: height * 0.02,
  },
  participantContainer: {
    alignItems: 'center',
    borderRadius: 5,
    width: width * 0.8,
    height: height * 0.09,
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20,
    backgroundColor: '#fff09f'
  },
  subContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
  },
  name: {
    fontSize: height * 0.025,
    marginTop: 2,
    fontFamily: 'Montserrat',
    textAlign: 'center'
  },
  price: {
    fontSize: height * 0.021,
    color: '#359c35',
    width: 90,
    justifyContent: 'center',
    fontFamily: 'Montserrat'
  },
  amount: {
    fontSize: height * 0.021,
    width: 40,
    justifyContent: 'center',
    fontFamily: 'Montserrat'
  }
})

export default styles;