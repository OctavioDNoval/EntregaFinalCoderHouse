import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import HeaderComponent from "../../components/HeaderComponent";

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: () => <HeaderComponent />,
			}}
		>
			<Stack.Screen name="profile" component={ProfileScreen} />
		</Stack.Navigator>
	);
};

export default ProfileStackNavigator;
