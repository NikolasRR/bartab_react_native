import { StyleSheet } from "react-native";
import { height, width } from '../../../support/Dimensions';

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: height * 0.07,
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
    fontSize: height * 0.022,
    width: width * 0.3,
    textAlign: align,
    fontFamily: 'Montserrat',
  }
})

export default styles;