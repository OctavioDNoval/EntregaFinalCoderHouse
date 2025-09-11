import {
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { colors } from "../../global/colors";
import { useAddProductToCartMutation } from "../../Services/profileAPI";
import { useSelector } from "react-redux";

const SelectedProductScreen = ({ route }) => {
	const { product } = route.params;

	const [addToCart] = useAddProductToCartMutation();
	const localId = useSelector((state) => state.userSlice.localId);

	const handleAddCart = async () => {
		try {
			const result = await addToCart({
				localId: localId,
				product: product,
			}).unwrap();
			console.log("producto agregado", result);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.productName}>{product.name}</Text>
				{product.hasDiscount ? (
					<Text style={styles.discount}>
						-{(product.discount * 100).toFixed(0)}%
					</Text>
				) : null}
				<View style={styles.imgContainer}>
					<Image
						style={styles.img}
						source={{ uri: product.img }}
						resizeMode="cover"
					/>
				</View>
				{product.hasDiscount ? (
					<View>
						<Text style={styles.price}>
							${(product.price * (1 - product.discount)).toFixed(2)}
						</Text>
						<Text style={styles.originalPrice}>${product.price}</Text>
					</View>
				) : (
					<Text style={styles.price}>{product.price}</Text>
				)}
				<Text style={styles.desc}>{product.desc}</Text>
				<Pressable
					style={({ pressed }) => [
						styles.addCartBtn,
						pressed && { opacity: 0.8 },
					]}
					onPress={handleAddCart}
				>
					<Text style={styles.addCartText}>Agregar al carrito</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
};

export default SelectedProductScreen;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 24,
		paddingHorizontal: 12,
	},
	productName: {
		fontWeight: "700",
		fontSize: 24,
		textAlign: "center",
	},
	discount: {
		textAlign: "center",
		fontSize: 16,
	},
	imgContainer: {
		width: "100%",
		aspectRatio: 1 / 1,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 8,
		overflow: "hidden",
		shadowColor: "#000",
		shadowOffset: { width: 4, height: 4 },
		shadowRadius: 5,
		shadowOpacity: 0.25,
	},
	img: {
		width: "85%",
		aspectRatio: 1 / 1,
		borderRadius: 32,
	},
	price: {
		fontSize: 28,
		fontWeight: "800",
	},
	originalPrice: {
		fontSize: 20,
		opacity: 0.6,
		textDecorationLine: "line-through",
		fontStyle: "italic",
	},
	addCartBtn: {
		backgroundColor: colors.secondary,
		height: 40,
		width: "75%",
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 32,
	},
	addCartText: {
		color: "#fff",
		fontWeight: "600",
		fontSize: 16,
	},
	desc: {
		marginVertical: 32,
	},
});
