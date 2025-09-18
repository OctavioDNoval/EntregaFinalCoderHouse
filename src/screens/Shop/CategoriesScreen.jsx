import {
	ActivityIndicator,
	FlatList,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { useGetCategoriesQuery } from "../../Services/shopAPI";
import { useDispatch } from "react-redux";
import CategorieContainerComponent from "../../components/CategorieContainerComponent";
import {
	setCategoryName,
	setCategorySelected,
} from "../../Store/Slices/shopSlice";
import { colors } from "../../global/colors";

const CategoriesScreen = ({ navigation }) => {
	const { data: categories, isLoading, error } = useGetCategoriesQuery();
	const dispatch = useDispatch();

	const renderCategorie = ({ item }) => {
		return (
			<Pressable onPress={() => handleSelectCategorie(item)}>
				<CategorieContainerComponent img={item.img} name={item.name} />
			</Pressable>
		);
	};

	const handleSelectCategorie = (item) => {
		dispatch(setCategorySelected(item.id));
		dispatch(setCategoryName(item.name));
		navigation.navigate("productos");
	};

	return (
		<View
			style={
				isLoading
					? {
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
							width: "100%",
					  }
					: null
			}
		>
			{isLoading ? (
				<ActivityIndicator size={"large"} color={colors.secondary} />
			) : (
				<FlatList
					style={styles.container}
					data={categories}
					renderItem={renderCategorie}
					keyExtractor={(item) => item.id.toString()}
				></FlatList>
			)}
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
});
