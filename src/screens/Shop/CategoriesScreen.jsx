import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useGetCategoriesQuery } from "../../Services/shopAPI";
import { useDispatch } from "react-redux";
import CategorieContainerComponent from "../../components/CategorieContainerComponent";

const CategoriesScreen = () => {
    const { data: categories, isLoading, error } = useGetCategoriesQuery();
    const dispatch = useDispatch();

    const renderCategorie = ({ item }) => {
        return (
            <Pressable>
                <CategorieContainerComponent img={item.img} name={item.name} />
            </Pressable>
        );
    };

    return (
        <>
            <FlatList
                data={categories}
                renderItem={renderCategorie}
                keyExtractor={(item) => item.id.toString()}
            ></FlatList>
        </>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
