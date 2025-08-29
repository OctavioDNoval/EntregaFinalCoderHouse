import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import HomeScreen from "../../screens/Home/HomeScreen";
import SelectedProductScreen from "../../screens/Shop/SelectedProductScreen";
import HeaderComponent from "../../components/HeaderComponent";

const Stack = createStackNavigator();

const HomeStackNaigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                header: () => <HeaderComponent />,
            }}
        >
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="producto seleccionado" component={SelectedProductScreen} />
        </Stack.Navigator>
    );
};

export default HomeStackNaigator;
