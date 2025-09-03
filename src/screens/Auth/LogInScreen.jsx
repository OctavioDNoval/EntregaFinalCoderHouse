import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useLoginMutation } from "../../Services/authAPI";
import { useDispatch } from "react-redux";
import { colors } from "../../global/colors";
import { setLocalId, setUserEmail } from "../../Store/Slices/userSlice";

const LogInScreen = ({ navigation }) => {
	//aca vamos a tratar las variables de estado de esta pantalla
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//aca traemos la mutacion de la api, con esto vamos a controlar
	//el inicio de sesion
	const [triggerLogin, result] = useLoginMutation();
	const dispatch = useDispatch();

	const logInHandler = () => {
		//Usamos la query mandando los parametros de autenticacion, esto todavia no va a cambiar
		//la screen porque falta hacer el dipatch al userSlice donde va a estar la info del usuario
		//y cuando el email deja de estar vacio la Screen en el mainNavigator va a cambiar
		triggerLogin({ email, password });
	};

	useEffect(() => {
		console.log(result);
		if (result.isSuccess) {
			dispatch(setUserEmail(result.data.email));
			dispatch(setLocalId(result.data.localId));
		} else if (result.status === "rejected") {
			console.log(result.error);
		}
	}, [result]);

	return (
		<View style={styles.conatiner}>
			<Text>LogInScreen</Text>
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
			<Pressable onPress={logInHandler} style={styles.loginBTN}>
				<Text style={styles.textBTN}>Entrar</Text>
			</Pressable>
			<Pressable onPress={() => navigation.navigate("signup")}>
				<Text style={styles.createAccount}>Crear Cuenta</Text>
			</Pressable>
		</View>
	);
};

export default LogInScreen;

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 24,
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
	createAccount: {
		color: colors.secondary,
	},
});
