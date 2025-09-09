import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";
import CameraIconComponent from "../../components/CameraIconComponent";
import { useSelector } from "react-redux";
import InfoWrapperComponent from "../../components/InfoWrapperComponent";
import { useGetProfilePicQuery } from "../../Services/profileAPI";

const ProfileScreen = () => {
	//Vamos a guardar un string vacio porque la imagen la recibimos en
	//base64
	const [profilePic, setProfilePic] = useState("");
	const email = useSelector((state) => state.userSlice.email);
	const localId = useSelector((state) => state.userSlice.localId);
	const profile = useGetProfilePicQuery(localId);
	const [profileInfo, setProfileInfo] = useState({});

	console.log("este es el profile: ", profile);

	useEffect(() => {
		setProfileInfo(profile.data);
	}, [profile.data]);

	return (
		<View style={styles.screenContainer}>
			<View style={styles.profilePicContainer}>
				{/**Aca lo que hacemos es que si hay una foto de perfil
				 * ponemos la foto trayendola desde el slice del user
				 * y en caso de que no tenga ninguna mostramos la primera
				 * letra del mail/nombre
				 */}
				{profilePic ? (
					<Image style={styles.profilePic} source={{ uri: profilePic }} />
				) : (
					<Text style={styles.profilePlaceHolder}>
						{profileInfo.name.charAt(0).toUpperCase()}
					</Text>
				)}
				<View style={styles.cameraIcon}>
					<CameraIconComponent />
				</View>
			</View>
			<Text>{email}</Text>

			<Pressable style={styles.editBtn}>
				<Text>Editar perfil</Text>
			</Pressable>
			<InfoWrapperComponent profile={profileInfo} />
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	screenContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 32,
	},
	profilePicContainer: {
		height: 200,
		width: 200,
		backgroundColor: colors.secondary,
		borderRadius: 100,
		//position: "relative",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 16,
	},
	cameraIcon: {
		position: "absolute",
		bottom: 0,
		right: 0,
	},
	profilePlaceHolder: {
		fontSize: 120,
	},
	editBtn: {
		margin: 32,
		borderColor: "#000",
		borderWidth: 2,
		borderStyle: "solid",
		height: 40,
		width: 128,
		justifyContent: "center",
		alignItems: "center",
	},
});
