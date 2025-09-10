import { StyleSheet, Text, View } from "react-native";
import { useGetProfileQuery } from "../../Services/profileAPI";
import { useDispatch, useSelector } from "react-redux";
import {
	setImage,
	setUserCel,
	setUserLastName,
	setUserName,
} from "../../Store/Slices/userSlice";
import { useEffect } from "react";
import CarruselImageComponent from "../../components/CarruselImageComponent";

const HomeScreen = () => {
	const id = useSelector((state) => state.userSlice.localId);
	const { data, isSuccess } = useGetProfileQuery(id, { skip: !id });
	const dispatch = useDispatch();

	useEffect(() => {
		if (isSuccess && data) {
			dispatch(setImage(data.image));
			dispatch(setUserName(data.name));
			dispatch(setUserLastName(data.lastname));
			dispatch(setUserCel(data.cel));
		}
	}, [isSuccess, data]);

	return (
		<View style={styles.container}>
			<CarruselImageComponent />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
