import { StyleSheet } from "react-native";
import { height, width } from '../../../../support/Dimensions';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    height: height * 0.5,
    width: width * 0.65,
    marginTop: 40,
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
  participant: {
    fontFamily: 'Montserrat',
    fontSize: height * 0.022,
    marginBottom: 10,
  },
  itemsList: {
    height: height * 0.35,
    marginBottom: 15,
  },
  itemBox: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.5
  },
  item: {
    fontFamily: 'Montserrat-medium',
    fontSize: height * 0.018,
  },
  total: {
    fontFamily: 'Montserrat',
    fontSize: height * 0.022,
  }
})

export default styles;