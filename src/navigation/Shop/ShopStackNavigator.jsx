import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../../screens/Shop/CategoriesScreen";
import ProductScreen from "../../screens/Shop/ProductScreen";
import SelectedProductScreen from "../../screens/Shop/SelectedProductScreen";
import HeaderComponent from "../../components/HeaderComponent";

const Stack = createStackNavigator();

const ShopStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="categorias"
            screenOptions={{
                header: () => <HeaderComponent subtitle="Categorias" />,
            }}
        >
            <Stack.Screen name="categorias" component={CategoriesScreen} />
            <Stack.Screen name="productos" component={ProductScreen} />
            <Stack.Screen name="Producto seleccionado" component={SelectedProductScreen} />
        </Stack.Navigator>
    );
};

export default ShopStackNavigator;
