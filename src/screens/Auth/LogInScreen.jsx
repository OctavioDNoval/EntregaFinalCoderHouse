import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useLogInMutation } from "../../Services/authAPI";
import { useDispatch } from "react-redux";

const LogInScreen = () => {
	//aca vamos a tratar las variables de estado de esta pantalla
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//aca traemos la mutacion de la api, con esto vamos a controlar
	//el inicio de sesion
	//const [triggerLogin, result] = useLogInMutation();
	const dispatch = useDispatch();

	const logInHandler = () => {};

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
		</View>
	);
};

export default LogInScreen;

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
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
		backgroundColor: "#FF8400",
		borderRadius: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	textBTN: {
		color: "#fff",
	},
});
