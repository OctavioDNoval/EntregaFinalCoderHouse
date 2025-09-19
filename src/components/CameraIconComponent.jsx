import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTakePic } from "../Services/useTakePic";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CameraIconComponent = () => {
	const takePic = useTakePic();

	return (
		<Pressable onPress={takePic}>
			<View style={styles.cameraContainer}>
				<MaterialCommunityIcons name="camera" size={32} />
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
