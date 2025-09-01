
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./Tabs/TabsNavigator";
import AuthStackNavigator from "./Auth/AuthStackNavigator";


const MainNavigator = () => {
	/**
   * Traemos el usuario seleccionado desde su respectivo slice del estado
   * global 
   */
  const user = useSelector(state=>state.userReducer)
  
  return (
		<NavigationContainer>
        {
            user? <TabsNavigator/> :<AuthStackNavigator/>
        }
    </NavigationContainer>
	);
};

export default MainNavigator;
