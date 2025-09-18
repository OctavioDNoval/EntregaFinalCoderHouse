import {
	ActivityIndicator,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { useGetCartQuery } from "../../Services/profileAPI";
import { useSelector } from "react-redux";
import CartProductComponent from "../../components/CartProductComponent";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";

import { colors } from "../../global/colors";

const CartScreen = () => {
	const localId = useSelector((state) => state.userSlice.localId);
	const { data: cart, refetch, isLoading } = useGetCartQuery(localId);
	const [itemDeleted, setItemDeleted] = useState(false);

	const cartArray = cart ? Object.values(cart) : [];

	const renderCartProduct = ({ item }) => {
		return (
			<CartProductComponent product={item} setItemDeleted={setItemDeleted} />
		);
	};

	useEffect(() => {
		if (itemDeleted) {
			setItemDeleted(false);
			refetch();
		}
	}, [itemDeleted, refetch]);

	useFocusEffect(
		useCallback(() => {
			refetch();
		}, [refetch])
	);

	return (
		<View
			style={[
				styles.container,
				isLoading ? { justifyContent: "center", alignItems: "center" } : null,
			]}
		>
			{isLoading ? (
				<ActivityIndicator size={"large"} color={colors.secondary} />
			) : cartArray.length > 0 ? (
				<FlatList
					data={cartArray}
					keyExtractor={(item) => item.id}
					renderItem={renderCartProduct}
				/>
			) : (
				<View style={styles.emptyContainer}>
					<Text style={styles.emptyCart}>El carrito esta vacio</Text>
				</View>
			)}
			<View></View>
		</View>
	);
};

export default CartScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	emptyCart: {
		color: "#666",
		opacity: 0.6,
		fontSize: 20,
	},
	emptyContainer: {
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
});
