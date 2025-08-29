import { FlatList, StyleSheet, Text, View } from "react-native";
import { useGetCategoriesQuery } from "../../Services/shopAPI";
import { useDispatch } from "react-redux";

const CategoriesScreen = () => {
    const { data: categories, isLoading, error } = useGetCategoriesQuery();
    const dispatch = useDispatch();

    return (
        <FlatList
            data={categories}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
