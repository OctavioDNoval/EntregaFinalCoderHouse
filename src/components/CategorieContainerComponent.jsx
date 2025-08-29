import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CategorieContainerComponent = ({ img, name }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: img }} />
            <View style={styles.overlay}></View>
            <Text style={styles.text}>{name.toUpperCase()}</Text>
        </View>
    );
};

export default CategorieContainerComponent;

const styles = StyleSheet.create({
    container: {
        width: width * 0.4,
        borderColor: "#000",
        borderWidth: 2,
        borderStyle: "solid",
        aspectRatio: 1 / 1,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        ...StyleSheet.absoluteFillObject,
        //resizeMode: "cover",
        objectFit: "cover",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.25)",
    },
    text: {
        color: "#fff",
        fontWeight: "700",
    },
});
