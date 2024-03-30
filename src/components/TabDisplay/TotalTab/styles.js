import { StyleSheet } from "react-native";
import { height } from '../../../support/Dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: height * 0.075,
    backgroundColor: '#D2691E'
  },
  text: {
    fontSize: height * 0.028,
    fontWeight: '700',
    color: '#ffd700'
  }
})

export default styles;