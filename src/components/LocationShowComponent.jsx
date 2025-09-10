import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const LocationShowComponent = () => {
	const [errorMsg, setErrorMsg] = useState("");
	const [location, setLocation] = useState(null);
	const [locationLoaded, setLocationLoaded] = useState(false);

	useEffect(() => {
		async function getCurrentLocation() {
			try {
				let { status } = await Location.requestForegroundPermissionsAsync();
				if (status !== "granted") {
					setErrorMsg("Los permisos fueron denegados");
					return;
				}

				let ubi = await Location.getCurrentPositionAsync();
				if (ubi) {
					setLocation(ubi);
				}
			} catch (error) {
				console.log("hubo un error:", error);
			} finally {
				setLocationLoaded(true);
			}
		}

		getCurrentLocation();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.addres}>Falta hacer la direccion con Api</Text>
			{location ? (
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: location.coords.latitude,
						longitude: location.coords.longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				>
					<Marker
						coordinate={{
							latitude: location.coords.latitude,
							longitude: location.coords.longitude,
						}}
					/>
				</MapView>
			) : locationLoaded ? (
				<Text>{errorMsg}</Text>
			) : (
				<ActivityIndicator />
			)}
		</View>
	);
};

export default LocationShowComponent;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		gap: 24,
		paddingVertical: 24,
	},
	map: {
		width: "80%",
		aspectRatio: 1,
	},
	addres: {
		fontSize: 24,
		fontWeight: "bold",
	},
});
