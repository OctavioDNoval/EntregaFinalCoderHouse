import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
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
import OfertProductComponent from "../../components/OfertProductComponent";

const HomeScreen = () => {
	const id = useSelector((state) => state.userSlice.localId);
	const { data, isSuccess } = useGetProfileQuery(id, { skip: !id });
	const dispatch = useDispatch();
	const { data: products, isLoading } = useGetProductsQuery();

	const ofertProducts = useMemo(() => {
		return products ? products.filter((p) => p.hasDiscount) : [];
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
		<Pressable>
			<OfertProductComponent item={item} />
		</Pressable>;
	};

	return (
		<View style={styles.container}>
			<CarruselImageComponent />
			<View style={styles.ofertProductContainer}>
				<Text style={styles.title}>Ofertas destacadas</Text>

				{}
				<FlatList
					data={ofertProducts}
					keyExtractor={(item) => item.id}
					renderItem={renderOfertproducts}
				/>
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
