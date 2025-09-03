import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import InfoShowComponent from "./InfoShowComponent";
import LocationShowComponent from "./LocationShowComponent";

const InfoWrapperComponent = () => {
	const [selected, setSelected] = useState("info");

	return (
		<View style={styles.container}>
			<View style={styles.btnContainer}>
				<Pressable
					onPress={() => setSelected("info")}
					style={() => [
						styles.btn,
						{ backgroundColor: selected === "info" ? "#fff" : "transparent" },
					]}
				>
					<Text style={styles.btnText}>Info. Usuario</Text>
				</Pressable>
				<Pressable
					onPress={() => setSelected("location")}
					style={() => [
						styles.btn,
						{
							backgroundColor: selected === "location" ? "#fff" : "transparent",
						},
					]}
				>
					<Text style={styles.btnText}>Ubicacion</Text>
				</Pressable>
			</View>
			{selected === "" || selected === "info" ? (
				<InfoShowComponent />
			) : selected === "location" ? (
				<LocationShowComponent />
			) : (
				<Text>Error</Text>
			)}
		</View>
	);
};

export default InfoWrapperComponent;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		/*borderColor: "#000",
		borderWidth: 1,
		borderStyle: "solid",*/
	},
	btnContainer: {
		flexDirection: "row",
		backgroundColor: "#ccc",
	},
	btn: {
		flex: 1,
		padding: 8,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	btnText: {
		textAlign: "center",
		fontSize: 16,
	},
});
