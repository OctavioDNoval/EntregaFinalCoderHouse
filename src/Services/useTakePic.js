import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../Store/Slices/userSlice";
import { useUpdateProfilePicMutation } from "../Services/profileAPI";

export const useTakePic = () => {
	const [triggerUpdateProfilePic] = useUpdateProfilePicMutation();
	const id = useSelector((state) => state.userSlice.localId);
	const dispatch = useDispatch();

	const takePic = async () => {
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
			const imgBase64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
			dispatch(setImage(imgBase64));
			triggerUpdateProfilePic({ localId: id, img: imgBase64 });
		}
	};

	return takePic;
};
