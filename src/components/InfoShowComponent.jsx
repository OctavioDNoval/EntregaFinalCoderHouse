import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const InfoShowComponent = ({ profile }) => {
	/**
	 * La info aca esta encapsulada en profileInfo y viene desde el profile screen
	 * tenemos los campos:
	 * -name
	 * -lastname
	 * -cel
	 */

	console.log(profile);

	return (
		<View style={styles.container}>
			<View style={styles.infoRow}>
				<Text>Nombre</Text>
				<Text>{profile.name}</Text>
			</View>
			<View style={styles.infoRow}>
				<Text>Apelldio</Text>
				<Text>{profile.lastname}</Text>
			</View>
			<View style={styles.infoRow}>
				<Text>Celular</Text>
				<Text>{profile.cel}</Text>
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
