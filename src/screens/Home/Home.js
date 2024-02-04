import { Text, TouchableOpacity, View } from 'react-native';
import styles, { textStyles } from './styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={textStyles(1.8, 'Montserrat').welcome}>Welcome to Bartab!</Text>
        <Text style={textStyles(1.2, 'Montserrat-medium').welcome}>the app to split the bar tab with your friends</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={textStyles(1.4, 'Montserrat').welcome}>Here's how it works:</Text>
        <Text style={textStyles(1, 'Montserrat-medium').welcome}>first, add the participants</Text>
        <Text style={textStyles(1, 'Montserrat-medium').welcome}>then, add the items, informing the ones that participated in it</Text>
      <Text style={textStyles(1, 'Montserrat-medium').welcome}>and that's it! the indivual check of every participant will be calculated, as well as the total tab</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddParticipants")}>
        <Text style={styles.buttonText}>start</Text>
      </TouchableOpacity>
    </View>
  );
}