import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useRemoveProductFromCartMutation } from "../Services/profileAPI";
import { useSelector } from "react-redux";

const CartProductComponent = ({ product, setItemDeleted }) => {
	const [deleteProduct] = useRemoveProductFromCartMutation();
	const localId = useSelector((state) => state.userSlice.localId);

	const handleDeleteFromCart = () => {
		try {
			deleteProduct({ localId: localId, productId: product.id });
			setItemDeleted(true);
			console.log("producto eliminado con exito");
		} catch (e) {
			console.log("hubo un error en el remove: ", e);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.imgContainer}>
				<Image
					style={styles.img}
					source={{ uri: product.img }}
					resizeMode="cover"
				/>
			</View>
			<View style={styles.productInfo}>
				<Text style={styles.productName}>{product.name}</Text>
				{product.hasDiscount ? (
					<Text style={styles.price}>
						${(product.price * (1 - product.discount)).toFixed(0)}
					</Text>
				) : (
					<Text style={styles.price}>${product.price}</Text>
				)}
			</View>
			<Pressable style={styles.deleteBtn} onPress={handleDeleteFromCart}>
				<Text style={styles.x}>X</Text>
			</Pressable>
		</View>
	);
};

export default CartProductComponent;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "#fff",
		marginVertical: 16,
		marginHorizontal: 16,
		height: 88,
		padding: 16,
		justifyContent: "space-between",
		alignItems: "center",
		borderRadius: 32,
		shadowColor: "#000",
		shadowOffset: { width: 4, height: 4 },
		shadowRadius: 5,
		shadowOpacity: 0.25,
	},
	imgContainer: {
		height: "100%",
		aspectRatio: 1 / 1,
	},
	img: {
		height: "100%",
		borderRadius: 16,
	},
	deleteBtn: {
		backgroundColor: "red",
		width: "10%",
		aspectRatio: 1 / 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "50%",
	},
	x: {
		color: "#fff",
		fontWeight: "900",
	},
	productInfo: {
		alignItems: "center",
	},
});
