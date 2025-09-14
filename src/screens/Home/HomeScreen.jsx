import {
	Dimensions,
	FlatList,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { useGetProfileQuery } from "../../Services/profileAPI";
import { useDispatch, useSelector } from "react-redux";
import {
	setImage,
	setUserCel,
	setUserLastName,
	setUserName,
} from "../../Store/Slices/userSlice";
import { useEffect, useMemo } from "react";
import CarruselImageComponent from "../../components/CarruselImageComponent";
import { useGetProductsQuery } from "../../Services/shopAPI";
import ProductContainerComponent from "../../components/ProductContainerComponent";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
	const id = useSelector((state) => state.userSlice.localId);
	const { data, isSuccess } = useGetProfileQuery(id, { skip: !id });
	const dispatch = useDispatch();
	const { data: products, isLoading } = useGetProductsQuery();

	const ofertProducts = useMemo(() => {
		return products
			? products
					.filter((p) => p.hasDiscount && p.discount > 0.3)
					.sort((a, b) => b.discount - a.discount)
			: [];
	}, [products]);

	useEffect(() => {
		console.log(isLoading);
	}, [ofertProducts]);

	useEffect(() => {
		if (isSuccess && data) {
			dispatch(setImage(data.image));
			dispatch(setUserName(data.name));
			dispatch(setUserLastName(data.lastname));
			dispatch(setUserCel(data.cel));
		}
	}, [isSuccess, data]);

	const renderOfertproducts = ({ item }) => {
		return (
			<Pressable
				onPress={() =>
					navigation.navigate("producto seleccionado", { product: item })
				}
			>
				{console.log(item.name)}
				<ProductContainerComponent item={item} />
			</Pressable>
		);
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.carruselContainer}>
					<CarruselImageComponent />
				</View>
				<View style={styles.ofertProductContainer}>
					<Text style={styles.title}>Ofertas destacadas</Text>

					{}
					<FlatList
						data={ofertProducts}
						keyExtractor={(item) => item.id.toString()}
						renderItem={renderOfertproducts}
						numColumns={2}
						columnWrapperStyle={styles.list}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	title: {
		fontWeight: "800",
		fontSize: 32,
		marginVertical: 24,
		textAlign: "center",
	},
	list: {
		justifyContent: "space-around",
		marginBottom: 24,
	},
	carruselContainer: {
		width: "100%",
		height: height * 0.65,
		justifyContent: "center",
		alignItems: "center",
	},
});
