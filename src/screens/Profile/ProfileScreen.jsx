import { useEffect, useState } from "react";
import {
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { colors } from "../../global/colors";
import CameraIconComponent from "../../components/CameraIconComponent";
import { useDispatch, useSelector } from "react-redux";
import InfoWrapperComponent from "../../components/InfoWrapperComponent";
import { useGetProfileQuery } from "../../Services/profileAPI";
import { clearSession } from "../../SQL";
import {
	logout,
	setUserEmail,
	setUserLocalId,
} from "../../Store/Slices/userSlice";

const ProfileScreen = () => {
	//Vamos a guardar un string vacio porque la imagen la recibimos en
	//base64
	const user = useSelector((state) => state.userSlice);
	const dispatch = useDispatch();

	//console.log("este es el profile: ", user);

	const logOut = async () => {
		await clearSession();
		dispatch(logout());
	};

	return (
		<ScrollView>
			<View style={styles.screenContainer}>
				<View style={styles.profilePicContainer}>
					{/**Aca lo que hacemos es que si hay una foto de perfil
					 * ponemos la foto trayendola desde el slice del user
					 * y en caso de que no tenga ninguna mostramos la primera
					 * letra del mail/nombre
					 */}
					{user.image ? (
						<Image
							style={styles.profilePic}
							resizeMode="cover"
							source={{ uri: user.image }}
						/>
					) : (
						<Text style={styles.profilePlaceHolder}>
							{user.name ? user.name.charAt(0).toUpperCase() : ""}
						</Text>
					)}
					<View style={styles.cameraIcon}>
						<CameraIconComponent />
					</View>
				</View>
				<Text>{user.email}</Text>

				<Pressable style={styles.editBtn}>
					<Text>Editar perfil</Text>
				</Pressable>
				<InfoWrapperComponent profile={user} />

				<Pressable onPress={logOut} style={styles.logOut}>
					<Text>Cerrar sesion</Text>
				</Pressable>
			</View>
		</ScrollView>
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
		borderStyle: "dashed",
		height: 40,
		width: 128,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 16,
	},
	logOut: {
		backgroundColor: "red",
		width: 128,
		height: 40,
		borderRadius: 16,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 32,
		fontWeight: "700",
	},
	profilePic: {
		width: "100%",
		height: "100%",
		overflow: "hidden",
		borderRadius: 100,
	},
});
