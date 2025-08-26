import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import HeaderComponent from "./src/components/HeaderComponent";

export default function App() {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<HeaderComponent />
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
