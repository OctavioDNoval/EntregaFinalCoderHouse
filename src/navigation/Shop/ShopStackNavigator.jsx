import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../../screens/Shop/CategoriesScreen";
import ProductScreen from "../../screens/Shop/ProductScreen";
import SelectedProductScreen from "../../screens/Shop/SelectedProductScreen";
import HeaderComponent from "../../components/HeaderComponent";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const ShopStackNavigator = () => {
    const categorySelectedName = useSelector((state) => state.shopSlice.categorySelectedName);
    return (
        <Stack.Navigator
            initialRouteName="categorias"
            screenOptions={{
                header: ({ route }) => (
                    <HeaderComponent subtitle={route.name === "categorias" ? "Categorias" : categorySelectedName} />
                ),
            }}
        >
            <Stack.Screen name="categorias" component={CategoriesScreen} />
            <Stack.Screen name="productos" component={ProductScreen} options={() => {}} />
            <Stack.Screen name="Producto seleccionado" component={SelectedProductScreen} />
        </Stack.Navigator>
    );
};

export default ShopStackNavigator;
