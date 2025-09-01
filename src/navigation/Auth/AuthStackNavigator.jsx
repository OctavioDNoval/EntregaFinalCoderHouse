import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "../../screens/Auth/LogInScreen";
import SignUpScreen from "../../screens/Auth/SignUpScreen";
/**
 * Aca vamos a intercambiar entre las pantalals de login y signup
 */

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
	return(
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="login" component={LogInScreen}/>
			<Stack.Screen name="signup" component={SignUpScreen}/>
		</Stack.Navigator>
	);
};

export default AuthStackNavigator;
