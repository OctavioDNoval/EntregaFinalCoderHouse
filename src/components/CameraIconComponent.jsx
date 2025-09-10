import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../Store/Slices/userSlice";
import { useUpdateProfilePicMutation } from "../Services/profileAPI";

const CameraIconComponent = () => {
	const [triggerUpdateProfilePic, result] = useUpdateProfilePicMutation();
	const id = useSelector((state) => state.userSlice.localId);
	const dispatch = useDispatch();

	/**
	 * Esta es la funcion en donde vamos a tratar cuando
	 * el usuario quiera poner una imagen y activar la camara
	 */
	const takePic = async () => {
		console.log("pressed");

		const permission = await ImagePicker.requestCameraPermissionsAsync();
		if (!permission.granted) {
			alert("Se necesitan permisos para usar la cámara");
			return;
		}

		let result = await ImagePicker.launchCameraAsync({
			mediaTypes: ["images"],
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.7,
			base64: true,
		});

		if (!result.canceled) {
			/**
			 * Con esta forma de "string" convertimos la imagen
			 * que esta en base64 a una URI para que pueda entrar en
			 * la propiedad source de la etiqueta <Image>
			 */
			const imgBase64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
			dispatch(setImage(imgBase64));
			triggerUpdateProfilePic({ localId: id, img: imgBase64 });
		}
	};

	return (
		<Pressable onPress={takePic}>
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
