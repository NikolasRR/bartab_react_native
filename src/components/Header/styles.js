import { StyleSheet } from 'react-native';
import { height } from '../../support/Dimensions';

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    height: height * 0.1,
    backgroundColor: '#8b4513',
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
    fontSize: 6 * height * 0.01,
    fontFamily: 'Righteous',
    color: '#ffd700'
  }
});

export default styles;