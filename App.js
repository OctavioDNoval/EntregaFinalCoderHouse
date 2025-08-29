import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./src/navigation/Tabs/TabsNavigator";
import { Provider } from "react-redux";
import { store } from "./src/Store/store";

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer>
                    <StatusBar style="auto" />
                    <TabsNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
