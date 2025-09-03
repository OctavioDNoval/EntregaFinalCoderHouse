import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const InfoShowComponent = () => {
    const profileName = useSelector((state) => state.userSlice.name);

    return (
        <View style={styles.container}>
            <View style={styles.infoRow}>
                <Text>Nombre</Text>
                <Text>{profileName}</Text>
            </View>
        </View>
    );
};

export default InfoShowComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
});
