import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { useLoginMutation } from "../../Services/authAPI";
import { useDispatch } from "react-redux";
import { colors } from "../../global/colors";
import { setUserCel, setUserEmail, setUserLastName, setUserLocalId, setUserName } from "../../Store/Slices/userSlice";
import { useGetProfileQuery } from "../../Services/profileAPI";
import { clearSession, saveSession } from "../../SQL";

const LogInScreen = ({ navigation }) => {
    //aca vamos a tratar las variables de estado de esta pantalla
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [persistSession, setpersistSession] = useState(false);
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
            <Text>LogInScreen</Text>
            <TextInput onChangeText={(text) => setEmail(text)} placeholder="Email" style={styles.input} />
            <TextInput onChangeText={(text) => setPassword(text)} placeholder="Contrasenia" style={styles.input} />
            <Pressable onPress={logInHandler} style={styles.loginBTN}>
                <Text style={styles.textBTN}>Entrar</Text>
            </Pressable>
            <Switch
                onValueChange={() => setpersistSession(!persistSession)}
                value={persistSession}
                trackColor={{ false: "#767577", true: colors.secondary }}
            />
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
