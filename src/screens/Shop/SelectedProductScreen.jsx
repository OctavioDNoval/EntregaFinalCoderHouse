import { StyleSheet, Text, View } from "react-native";

const SelectedProductScreen = ({ route }) => {
	const { product } = route.params;

	return (
		<View>
			<Text>{product.name}</Text>
		</View>
	);
};

export default SelectedProductScreen;

const styles = StyleSheet.create({});
