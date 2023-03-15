import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#d2691e',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export const resumeText = (align) => StyleSheet.create({
  text: {
    color: '#ffd700',
    fontSize: 20,
    width: 127,
    textAlign: align,
    fontFamily: 'Montserrat'
  }
})

export default styles;