import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const HeaderComponent = ({ title = "BKN store", subtitle = "" }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

export default HeaderComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111",
        width: "100%",
        height: height * 0.1,
        justifyContent: "center",
        alignItems: "center",
        /*position: "absolute",
        top: 0,*/
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 24,
    },
    subtitle: {
        color: "#fff",
        fontSize: 16,
    },
    content: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
