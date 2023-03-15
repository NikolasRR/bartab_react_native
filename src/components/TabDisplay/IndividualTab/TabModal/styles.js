import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    height: 450,
    width: 250,
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
    fontSize: 20,
    marginBottom: 10,
  },
  itemsList: {
    height: 335,
    marginBottom: 15
  },
  itemBox: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 210
  },
  item: {
    fontFamily: 'Montserrat-medium',
    fontSize: 15
  },
  total: {
    fontFamily: 'Montserrat',
    fontSize: 20
  }
})

export default styles;