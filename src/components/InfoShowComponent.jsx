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
				<Text style={styles.titleRow}>Nombre</Text>
				<Text style={styles.info}>{profile.name}</Text>
			</View>
			<View style={styles.infoRow}>
				<Text style={styles.titleRow}>Apelldio</Text>
				<Text style={styles.info}>{profile.lastname}</Text>
			</View>
			<View style={styles.infoRow}>
				<Text style={styles.titleRow}>Celular</Text>
				<Text style={styles.info}>{profile.cel}</Text>
			</View>
		</View>
	);
};

export default InfoShowComponent;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		gap: 8,
	},
	infoRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 24,
	},
	titleRow: {
		fontWeight: "700",
	},
	info: {
		fontStyle: "italic",
	},
});
