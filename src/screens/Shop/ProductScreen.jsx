import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../../Services/shopAPI";
import ProductContainerComponent from "../../components/ProductContainerComponent";

const ProductScreen = ({ navigation }) => {
	const categorySelectedID = useSelector(
		(state) => state.shopSlice.categorySelected
	);

	const {
		data: productsFiltered,
		isLoading,
		error,
	} = useGetProductsByCategoryQuery(categorySelectedID);

	console.log(categorySelectedID);
	console.log(productsFiltered);
	console.log(isLoading);

	const renderProduct = ({ item }) => {
		return (
			<Pressable
				style={styles.container}
				onPress={() =>
					navigation.navigate("Producto seleccionado", { product: item })
				}
			>
				<ProductContainerComponent item={item} />
			</Pressable>
		);
	};

	return (
		<>
			<FlatList
				style={styles.productContainer}
				data={productsFiltered}
				renderItem={renderProduct}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
				columnWrapperStyle={styles.row}
			/>
		</>
	);
};

export default ProductScreen;

const styles = StyleSheet.create({
	productContainer: {
		flex: 1,
		paddingTop: 48,
	},
	row: {
		justifyContent: "space-around",
		marginBottom: 24,
	},
});
