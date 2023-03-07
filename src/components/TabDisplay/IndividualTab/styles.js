import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#d2691e',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
})

export const resumeText = (align) => StyleSheet.create({
  text: {
    color: '#ffd700',
    fontSize: 20,
    width: 125,
    textAlign: align,
  }
})

export default styles;