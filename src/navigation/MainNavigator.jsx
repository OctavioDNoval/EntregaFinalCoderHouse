import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./Tabs/TabsNavigator";
import AuthStackNavigator from "./Auth/AuthStackNavigator";
import ProfileStackNavigator from "./Profile/ProfileStackNavigator";

const MainNavigator = () => {
	/**
	 * Traemos el usuario seleccionado desde su respectivo slice del estado
	 * global
	 */
	const email = useSelector((state) => state.userSlice.email);

	return (
		<NavigationContainer>
			{email ? <TabsNavigator /> : <AuthStackNavigator />}
		</NavigationContainer>
	);
};

export default MainNavigator;
