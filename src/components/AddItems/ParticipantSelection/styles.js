import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    height: 40,
    flex: 1
  },
  openModalButton: {
    backgroundColor: '#D2691E',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  openModalButtonText: {
    color: '#EEE8AA',
    fontSize: 20
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    height: 550,
    width: 250,
    marginTop: 40,
    backgroundColor: '#F5F5DC',
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
    justifyContent: 'flex-end'
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat'
  },
  doneButton: {
    backgroundColor: '#1870D5',
    height: 50,
    width: '100%',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  doneButtonText: {
    fontSize: 20,
    color: 'white'
  }
})

export default styles;