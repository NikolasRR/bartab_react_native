import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get(`window`);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE8AA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textBox: {
    marginTop: 50
  },
  button: {
    backgroundColor: '#ffd700',
    height: height * 0.1,
    width: width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: height * 0.05,
    marginTop: 50
  },
  buttonText: {
    color: '#8b4513',
    fontFamily: 'Montserrat',
    fontSize: height * 0.05
  }
});

export const textStyles = (size, font) => StyleSheet.create({
  welcome: {
    color: '#D2691E',
    width: width * 0.8,
    textAlign: 'center',
    fontFamily: font,
    fontSize: size * (height * 0.02),
    marginBottom: 10
  },
});

export default styles;