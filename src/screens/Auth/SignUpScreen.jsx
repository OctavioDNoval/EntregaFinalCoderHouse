import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SignUpScreen = () => {
	return (
		<View>
			<TextInput
				onChangeText={(text) => setEmail(text)}
				placeholder="Email"
				style={styles.input}
			/>
			<TextInput
				onChangeText={(text) => setPassword(text)}
				placeholder="Contrasenia"
				style={styles.input}
			/>
		</View>
	);
};

export default SignUpScreen;

const styles = StyleSheet.create({});
