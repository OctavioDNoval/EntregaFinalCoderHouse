import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./Tabs/TabsNavigator";
import AuthStackNavigator from "./Auth/AuthStackNavigator";
import ProfileStackNavigator from "./Profile/ProfileStackNavigator";
import { useEffect, useState } from "react";
import { getSession, initSessionsTable } from "../SQL";
import { setUserEmail, setUserLocalId } from "../Store/Slices/userSlice";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../global/colors";

const MainNavigator = () => {
    /**
     * Traemos el usuario seleccionado desde su respectivo slice del estado
     * global
     */
    const email = useSelector((state) => state.userSlice.email);

    const [checkingSession, setCheckingSession] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const bootstrap = async () => {
            await initSessionsTable();
            const session = await getSession();
            if (session) {
                dispatch(setUserEmail(session.email));
                dispatch(setUserLocalId(session.localId));
            }
            setCheckingSession(false);
        };

        bootstrap();
    }, []);

    if (checkingSession) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color={colors.secondary} />
            </View>
        );
    }

    return <NavigationContainer>{email ? <TabsNavigator /> : <AuthStackNavigator />}</NavigationContainer>;
};

export default MainNavigator;
