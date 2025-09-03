import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	Modal,
	Image,
} from "react-native";
import { colors } from "../../global/colors";
import { useEffect, useState } from "react";
import { useSignupMutation } from "../../Services/authAPI";
import {
	setLocalId,
	setUserCel,
	setUserEmail,
	setUserLastName,
} from "../../Store/Slices/userSlice";
import { useDispatch } from "react-redux";
import {
	useUpdateProfileCelMutation,
	useUpdateProfileLastNameMutation,
	useUpdateProfileNameMutation,
} from "../../Services/profileAPI";

const SignUpScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [cel, setCel] = useState("");

	const [UpdateName] = useUpdateProfileNameMutation();
	const [UpdateLastName] = useUpdateProfileLastNameMutation();
	const [UpdateCel] = useUpdateProfileCelMutation();

	const [errorMsg, setErrorMsg] = useState("");
	const [showModal, setShowModal] = useState(false);

	const [triggerSignUp, result] = useSignupMutation();
	const dispatch = useDispatch();

	const saveData = async (localId) => {
		try {
			await UpdateName({ localId, name });
			await UpdateLastName({ localId, lastName });
			await UpdateCel({ localId, cel });
		} catch (error) {
			console.log(error);
		}
	};

	const handleSignUp = () => {
		if (passwordConfirm != password) {
			setErrorMsg("Las contrasenias no coinciden");
		} else {
			setErrorMsg("");
			triggerSignUp({ email, password });
			//console.log(result);
		}
	};

	useEffect(() => {
		if (result.isSuccess) {
			setShowModal(true);
			saveData(result.data.localId);
			setTimeout(() => {
				setShowModal(false);
				dispatch(setUserEmail(email));
				dispatch(setLocalId(result.localId));
			}, 2000);
		}
	}, [result]);

	return (
		<View style={styles.conatiner}>
			<Text style={styles.h1}>Crear cuenta</Text>
			<TextInput
				onChangeText={(text) => setEmail(text)}
				placeholder="Email"
				style={styles.input}
			/>
			<TextInput
				onChangeText={(text) => setPassword(text)}
				placeholder="Contrasenia"
				style={styles.input}
			/>
			<TextInput
				onChangeText={(text) => setPasswordConfirm(text)}
				placeholder="Confirmar contrasenia"
				style={styles.input}
			/>

			{errorMsg ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}

			<View style={styles.line}></View>
			<Text style={styles.infoText}>Info. Personal</Text>

			{/*Nombre*/}
			<TextInput
				onChangeText={(text) => setName(text)}
				placeholder="Nombre"
				style={styles.input}
			/>
			{/*Apelldio*/}
			<TextInput
				onChangeText={(text) => setLastName(text)}
				placeholder="Apellido"
				style={styles.input}
			/>
			{/*Celular*/}
			<TextInput
				onChangeText={(text) => setCel(text)}
				placeholder="Celular"
				style={styles.input}
			/>

			<Pressable onPress={handleSignUp} style={styles.loginBTN}>
				<Text style={styles.textBTN}>Crear</Text>
			</Pressable>
			<Pressable onPress={() => navigation.navigate("login")}>
				<Text style={styles.textContainer}>
					<Text>Ya tienes cuenta?</Text>
					<Text style={styles.createAccount}>Entrar</Text>
				</Text>
			</Pressable>
			{/*Hacemos el modal para cuando tenga que aparecer*/}
			<Modal visible={showModal} transparent={true} animationType="fade">
				<View style={styles.modalWrapper}>
					<View style={styles.modalContainer}>
						<Image
							style={styles.check}
							source={require("../../../assets/AccountCreated.png")}
							resizeMode="contain"
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 24,
	},
	modalWrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	line: {
		height: 1,
		width: "75%",
		backgroundColor: "#bbb",
	},
	modalContainer: {
		backgroundColor: "rgba(0,0,0,0.5)",
		borderRadius: 20,
		padding: 20,
		width: "50%",
		aspectRatio: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	check: {
		width: "90%",
		height: "90%",
	},
	input: {
		width: "60%",
		height: 32,
		backgroundColor: "#ccc",
		borderRadius: 16,
		paddingLeft: 16,
	},
	loginBTN: {
		width: "60%",
		height: 32,
		backgroundColor: colors.secondary,
		borderRadius: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	textBTN: {
		color: "#fff",
	},
	errorMsg: {
		color: "red",
	},
	createAccount: {
		color: colors.secondary,
		marginLeft: 8,
		textDecorationColor: colors.secondary,
		textDecorationStyle: "solid",
		textDecorationLine: "underline",
	},
	h1: {
		fontSize: 32,
	},
});
