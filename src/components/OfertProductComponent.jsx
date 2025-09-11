import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const OfertProductComponent = ({ item }) => {
	return (
		<View style={styles.container}>
			{item.hasDiscount ? (
				<View style={styles.discountCard}>
					<Text style={styles.discountText}>
						-{(item.discount * 100).toFixed(0)}%
					</Text>
				</View>
			) : null}

			<View style={styles.imgContainer}>
				<Image style={styles.img} source={{ uri: item.img }} />
			</View>
			<Text style={styles.productName}>{item.name}</Text>

			{item.hasDiscount ? (
				<View>
					<Text
						style={[
							styles.productPrice,
							{ textDecorationLine: "line-through", opacity: 0.6 },
						]}
					>
						{item.price}
					</Text>
					<Text style={styles.productPrice}>
						{(item.price * (1 - item.discount)).toFixed(2)}
					</Text>
				</View>
			) : (
				<Text style={styles.productPrice}>{item.price}</Text>
			)}
		</View>
	);
};

export default OfertProductComponent;

const styles = StyleSheet.create({
	imgContainer: {
		width: width * 0.35,
		aspectRatio: 1 / 1,
		borderRadius: 16,
		overflow: "hidden",
	},
	img: {
		...StyleSheet.absoluteFillObject,
		objectFit: "cover",
	},
	productName: {
		display: "flex",
		width: width * 0.4,
		textAlign: "center",
		flexWrap: "wrap",
		fontWeight: "600",
		paddingHorizontal: 8,
	},
	productPrice: {
		textAlign: "center",
		fontStyle: "italic",
	},
	container: {
		backgroundColor: "#fff",
		minHeight: height * 0.3,
		width: width * 0.4,
		justifyContent: "space-between",
		alignItems: "center",
		padding: 12,
		borderRadius: 24,
		shadowColor: "#000",
		shadowOffset: { width: 4, height: 4 },
		shadowRadius: 5,
		shadowOpacity: 0.25,
	},
	discountCard: {
		position: "absolute",
		backgroundColor: "red",
		height: "20%",
		aspectRatio: 1 / 1,
		justifyContent: "center",
		alignItems: "center",
		top: 12,
		right: 12,
		zIndex: 10,
		borderRadius: "50%",
	},
	discountText: {
		color: "#fff",
		fontWeight: "800",
	},
});
