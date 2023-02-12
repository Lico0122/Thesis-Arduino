import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
  		  <Navigator/>
        <StatusBar style='auto'/>
  	</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#446129",
  },
});
