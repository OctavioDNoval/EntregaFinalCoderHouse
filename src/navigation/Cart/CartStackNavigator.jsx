import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from '../../screens/Cart/CartScreen';
import HeaderComponent from '../../components/HeaderComponent';

const Stack = createStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ()=> <HeaderComponent/>
      }}
    >
        <Stack.Screen name='Cart' component={CartScreen}/>
    </Stack.Navigator>
  )
}

export default CartStackNavigator