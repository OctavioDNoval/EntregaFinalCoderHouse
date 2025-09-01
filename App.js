import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import { store } from "./src/Store/store";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="auto" />
				<MainNavigator />
			</SafeAreaView>
		</Provider>
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
