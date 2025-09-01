import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/Home/HomeScreen";
import CartScreen from "../../screens/Cart/CartScreen";
import CategoriesScreen from "../../screens/Shop/CategoriesScreen";
import ShopStackNavigator from "../Shop/ShopStackNavigator";
import HomeStackNaigator from "../Shop/HomeStackNaigator";
import CartStackNavigator from "../Cart/CartStackNavigator";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            /*Screen options sirve para configurar como se van a ver
               y comportar todas las pantallas del TAB*/
            screenOptions={{
                //oculta el header de la barra superior que react native
                //agrega por defecto
                headerShown: false,
                //quita el texto que aparece debajo de los iconos en el bottom tab
                //por defecto muestra un icono y un texto, asi solo muestra el icono
                /*tabBarShowLabel: false,*/
            }}
        >
            <Tab.Screen name="Home" component={HomeStackNaigator} />
            <Tab.Screen name="Cart" component={CartStackNavigator} />
            <Tab.Screen name="categories" component={ShopStackNavigator} />
        </Tab.Navigator>
    );
};

export default TabsNavigator;
