import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";
import CameraIconComponent from "../../components/CameraIconComponent";
import { useSelector } from "react-redux";
import InfoWrapperComponent from "../../components/InfoWrapperComponent";

const ProfileScreen = () => {
	//Vamos a guardar un string vacio porque la imagen la recibimos en
	//base64
	const [profilePic, setProfilePic] = useState("");
	const email = useSelector((state) => state.userSlice.email);

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
						{email.charAt(0).toUpperCase()}
					</Text>
				)}
				<View style={styles.cameraIcon}>
					<CameraIconComponent />
				</View>
			</View>

			<Pressable style={styles.editBtn}>
				<Text>Editar perfil</Text>
			</Pressable>
			<InfoWrapperComponent />
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
