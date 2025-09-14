import { useEffect, useMemo, useState } from "react";
import {
	Image,
	Pressable,
	StyleSheet,
	Switch,
	Text,
	TextInput,
	View,
} from "react-native";
import { useLoginMutation } from "../../Services/authAPI";
import { useDispatch } from "react-redux";
import { colors } from "../../global/colors";
import {
	setUserCel,
	setUserEmail,
	setUserLastName,
	setUserLocalId,
	setUserName,
} from "../../Store/Slices/userSlice";
import { useGetProfileQuery } from "../../Services/profileAPI";
import { clearSession, saveSession } from "../../SQL";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LogInScreen = ({ navigation }) => {
	//aca vamos a tratar las variables de estado de esta pantalla
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [persistSession, setpersistSession] = useState(false);
	const [error, setError] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	//aca traemos la mutacion de la api, con esto vamos a controlar
	//el inicio de sesion
	const [triggerLogin, result] = useLoginMutation();
	const dispatch = useDispatch();

	const logo = useMemo(() => require("../../../assets/logo.webp"), []);

	const logInHandler = () => {
		//Usamos la query mandando los parametros de autenticacion, esto todavia no va a cambiar
		//la screen porque falta hacer el dipatch al userSlice donde va a estar la info del usuario
		//y cuando el email deja de estar vacio la Screen en el mainNavigator va a cambiar
		triggerLogin({ email, password });
		if (!result.isSuccess) {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 5000);
		}
	};

	useEffect(() => {
		const handleLogin = async () => {
			if (result.isSuccess) {
				const id = result.data.localId;
				const email = result.data.email;
				try {
					if (persistSession) {
						await saveSession(id, email);
						console.log("se guardo la session");
					} else {
						await clearSession();
					}
				} catch (error) {
					console.log("hubo un error al persistit la cuenta", error);
				}
				dispatch(setUserEmail(email));
				dispatch(setUserLocalId(id));
			}
		};

		handleLogin();
	}, [result]);

	return (
		<View style={styles.conatiner}>
			<View style={styles.logoContainer}>
				<Image source={logo} style={styles.logo} resizeMode="cover" />
			</View>
			<TextInput
				onChangeText={(text) => setEmail(text)}
				placeholder="Email"
				style={styles.input}
			/>
			<View style={styles.passwordContainer}>
				<TextInput
					onChangeText={(text) => setPassword(text)}
					placeholder="Contrasenia"
					style={styles.input}
					secureTextEntry={!showPassword}
				/>
				<Pressable
					style={styles.iconPassword}
					onPress={() => setShowPassword(!showPassword)}
				>
					<MaterialCommunityIcons
						name={showPassword ? "eye-off" : "eye"}
						size={24}
						color="grey"
					/>
				</Pressable>
			</View>
			<Pressable onPress={logInHandler} style={styles.loginBTN}>
				<Text style={styles.textBTN}>Entrar</Text>
			</Pressable>
			{error ? (
				<Text style={styles.errorLogIn}>Email o contraseña incorrectas</Text>
			) : null}
			<View style={styles.rememberUser}>
				<Text style={styles.rememberUserText}>Recordar usuario</Text>
				<Switch
					onValueChange={() => setpersistSession(!persistSession)}
					value={persistSession}
					trackColor={{ false: "#767577", true: colors.secondary }}
				/>
			</View>
			<Pressable onPress={() => navigation.navigate("signup")}>
				<Text style={styles.createAccount}>Crear Cuenta</Text>
			</Pressable>
		</View>
	);
};

export default LogInScreen;

const styles = StyleSheet.create({
	conatiner: {
		//flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 24,
		marginTop: "20%",
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
	rememberUser: {
		flexDirection: "row",
		alignItems: "center",
	},
	rememberUserText: {
		marginHorizontal: 16,
	},
	logo: {
		height: "100%",
		width: "100%",
	},
	logoContainer: {
		height: 200,
		aspectRatio: 1 / 1,
	},
	errorLogIn: {
		color: "red",
		fontSize: 12,
	},
	iconPassword: {
		position: "absolute",
		right: 8,
		top: "50%",
		transform: [{ translateY: -12 }],
	},
	passwordContainer: {
		flexDirection: "row",
	},
});
