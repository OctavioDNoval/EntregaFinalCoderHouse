import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStackNavigator from "../Shop/ShopStackNavigator";
import HomeStackNaigator from "../Shop/HomeStackNaigator";
import CartStackNavigator from "../Cart/CartStackNavigator";
import ProfileStackNavigator from "../Profile/ProfileStackNavigator";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../global/colors";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					switch (route.name) {
						case "Home":
							iconName = "home";
							break;
						case "Cart":
							iconName = "shopping-cart";
							break;
						case "Shop":
							iconName = "store";
							break;
						case "profile":
							iconName = "person";
							break;
					}

					return (
						<Icon
							name={iconName}
							size={focused ? 26 : 24}
							color={focused ? colors.secondary : "grey"}
						/>
					);
				},
			})}
		>
			<Tab.Screen name="Home" component={HomeStackNaigator} />
			<Tab.Screen name="Cart" component={CartStackNavigator} />
			<Tab.Screen name="Shop" component={ShopStackNavigator} />
			<Tab.Screen name="profile" component={ProfileStackNavigator} />
		</Tab.Navigator>
	);
};

export default TabsNavigator;
