import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CameraIconComponent = () => {
	return (
		<Pressable>
			<View style={styles.cameraContainer}>
				<Icon name="photo-camera" size={32} />
			</View>
		</Pressable>
	);
};

export default CameraIconComponent;

const styles = StyleSheet.create({
	cameraContainer: {
		width: 48,
		height: 48,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 24,
		borderColor: "#444",
		borderWidth: 1.5,
		borderStyle: "solid",
	},
});
