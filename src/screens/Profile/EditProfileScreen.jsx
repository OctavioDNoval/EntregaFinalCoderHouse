import {
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { useSelector } from "react-redux";

const EditProfileScreen = () => {
	const user = useSelector((state) => state.userSlice);
	console.log(user);

	return (
		<ScrollView>
			<View style={[styles.imgEdit, styles.bottomBorder]}>
				<Pressable style={styles.editPic}>
					<Image />
				</Pressable>
			</View>
		</ScrollView>
	);
};

export default EditProfileScreen;

const styles = StyleSheet.create({
	imgEdit: {
		minHeight: "30%",
		width: "85%",
		alignSelf: "center",
	},
	bottomBorder: {
		borderBottomColor: "#888",
		borderBottomWidth: 2,
		opacity: 0.6,
	},
});
