import { useEffect, useRef, useState } from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	Animated,
	Image,
} from "react-native";

const { width, height } = Dimensions.get("window");

const CarruselImageComponent = () => {
	const promoPic = [
		require("../../assets/promoPics/BlackFriday.webp"),
		require("../../assets/promoPics/NewDrop.webp"),
		require("../../assets/promoPics/2x1.webp"),
	];

	const [index, setIndex] = useState(0);
	const translateX = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const carrusel = setInterval(() => {
			let nextIndex = index === promoPic.length - 1 ? 0 : index + 1;

			Animated.timing(translateX, {
				toValue: -width * 0.8 * nextIndex,
				duration: 500,
				useNativeDriver: true,
			}).start();

			setIndex(nextIndex);
		}, 3000);

		return () => {
			clearInterval(carrusel);
		};
	}, [index]);

	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					styles.carrusel,
					{ width: width * promoPic.length },
					{ transform: [{ translateX }] },
				]}
			>
				{promoPic.map((pic, index) => (
					<Image
						key={index}
						source={pic}
						style={styles.image}
						resizeMode="cover"
					/>
				))}
			</Animated.View>
			<View style={styles.puntoContainer}>
				{promoPic.map((_, i) => {
					<View
						key={i}
						style={[styles.punto, { opacity: i === index ? 1 : 0.6 }]}
					/>;
				})}
			</View>
		</View>
	);
};

export default CarruselImageComponent;

const styles = StyleSheet.create({
	container: {
		height: height * 0.6,
		position: "relative",
		width: width * 0.8,
		overflow: "hidden",
		borderRadius: 32,
		borderColor: "#fff",
		borderWidth: 2,
		borderStyle: "solid",
		shadowColor: "#000",
		shadowOffset: { width: 4, height: 4 },
		shadowRadius: 5,
		shadowOpacity: 0.25,
		backgroundColor: "#fff",
	},
	carrusel: {
		flexDirection: "row",
	},
	image: {
		height: height * 0.6,
		width: width * 0.8,
	},
	punto: {
		height: 8,
		width: 8,
		borderRadius: 4,
		backgroundColor: "#fff",
		marginHorizontal: 4,
	},
	puntoContainer: {
		flexDirection: "row",
		justifyContent: "center",
		position: "absolute",
		zIndex: 3,
		bottom: 8,
		width: "100%",
		height: 10,
	},
});
