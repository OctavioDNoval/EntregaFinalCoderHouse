import { useState } from "react";
import {
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { useTakePic } from "../../Services/useTakePic";
import { colors } from "../../global/colors";
import {
	useUpdateProfileCelMutation,
	useUpdateProfileLastNameMutation,
	useUpdateProfileNameMutation,
} from "../../Services/profileAPI";
import { setUserCel, setUserLastName } from "../../Store/Slices/userSlice";

const EditProfileScreen = () => {
	const user = useSelector((state) => state.userSlice);
	console.log(user);

	const [newName, setNewName] = useState("");
	const [newLastName, setNewLastName] = useState("");
	const [newCel, setNewCel] = useState("");

	const takePic = useTakePic();

	const updateName = useUpdateProfileNameMutation();
	const updateLastName = useUpdateProfileLastNameMutation();
	const updateCel = useUpdateProfileCelMutation();

	const dispatch = useDispatch();

	const handleEditProfile = () => {
		try {
			if (newName) {
				updateName({ localId: user.localId, name: newName });
				dispatch(setUserName(newName));
			}
			if (newLastName) {
				updateLastName({ localId: user.localId, lastname: newLastName });
				dispatch(setUserLastName(newLastName));
			}
			if (newCel) {
				updateCel({ localId: user.localId, cel: newCel });
				dispatch(setUserCel(newCel));
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<ScrollView style={{ paddingHorizontal: 24 }}>
			<View style={[styles.imgEdit, styles.bottomBorder]}>
				<Pressable style={styles.editPic} onPress={takePic}>
					<View style={styles.editBtn}>
						<Icon name="photo-camera" size={48} color={"#fff"} />
					</View>
					<Image
						style={styles.img}
						source={{ uri: user.image }}
						resizeMode="cover"
					/>
				</Pressable>
			</View>
			<View style={[styles.infoEdit, styles.bottomBorder]}>
				<TextInput
					onChangeText={(text) => setNewName(text)}
					placeholder={user.name}
					style={styles.editInput}
				/>
				<TextInput
					onChangeText={(text) => setNewLastName(text)}
					placeholder={user.lastname}
					style={styles.editInput}
				/>
				<TextInput
					onChangeText={(text) => setNewCel(text)}
					placeholder={user.cel}
					style={styles.editInput}
				/>
			</View>
			<Pressable
				style={({ pressed }) => [
					styles.confirmBtn,
					pressed && { opacity: 0.8 },
				]}
				onPress={handleEditProfile}
			>
				<Text style={{ color: "#fff", fontWeight: "700" }}>Confirmar</Text>
			</Pressable>
		</ScrollView>
	);
};

export default EditProfileScreen;

const styles = StyleSheet.create({
	imgEdit: {
		minHeight: "30%",
		width: "100%",
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
	},
	bottomBorder: {
		borderBottomColor: "rgba(82, 71, 71, 0.46)",
		borderBottomWidth: 2,
	},
	editPic: {
		width: "50%",
		aspectRatio: 1 / 1,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#000",
		borderRadius: 120,
		overflow: "hidden",
	},
	img: {
		height: "100%",
		width: "100%",
	},
	editBtn: {
		position: "absolute",
		/*top: "50%",
		left: "50%",
		transform: [{ translateX: -25 }, { translateY: -25 }],*/
		zIndex: 10,
		backgroundColor: "#555555bd",
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	infoEdit: {
		marginVertical: 32,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	editInput: {
		borderWidth: 1,
		borderColor: "#000",
		borderStyle: "dashed",
		width: "75%",
		marginBottom: 32,
		padding: 16,
		borderRadius: 16,
	},
	confirmBtn: {
		backgroundColor: colors.secondary,
		width: "85%",
		alignSelf: "center",
		padding: 16,
		alignItems: "center",
		borderRadius: 16,
	},
});
