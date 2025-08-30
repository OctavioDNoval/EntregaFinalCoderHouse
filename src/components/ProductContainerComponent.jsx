import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const ProductContainerComponent = ({ item }) => {
    return (
        <View>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{ uri: item.img }} />
            </View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
        </View>
    );
};

export default ProductContainerComponent;

const styles = StyleSheet.create({
    imgContainer: {
        width: width * 0.4,
        aspectRatio: 1 / 1,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
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
    },
    productPrice: {
        textAlign: "center",
    },
});
