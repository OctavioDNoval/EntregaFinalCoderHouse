import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import HeaderComponent from "../../components/HeaderComponent";
import EditProfileScreen from "../../screens/Profile/EditProfileScreen";

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: () => <HeaderComponent />,
			}}
		>
			<Stack.Screen name="profile" component={ProfileScreen} />
			<Stack.Screen name="editProfile" component={EditProfileScreen} />
		</Stack.Navigator>
	);
};

export default ProfileStackNavigator;
