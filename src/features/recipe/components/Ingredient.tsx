import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Input from '../../../components/Input';

export default ({ onAdd }) => {
	const [quantity, setQuantity] = useState<string>();
	const [name, setName] = useState<string>();
	const [description, setDescription] = useState<string>();

	function tryAdd () {
		onAdd({
			quantity,
			name,
			description
		});
	}

	return (
		<View>
			<Text>Ingredientes: </Text>
			<View>
				<Text>Quantidade: </Text>
				<Input
					changeText={(text) => { setQuantity(text) }}
					value={quantity}
					keyboardTypeValue='numeric'
				/>
			</View>
			<View>
				<Text>Nome: </Text>
				<Input
					changeText={(text) => { setName(text) }}
					value={name}
					keyboardTypeValue=''
				/>
			</View>
			<View>
				<Text>Descrição: </Text>
				<Input
					changeText={(text) => { setDescription(text) }}
					value={description}
					keyboardTypeValue=''
				/>
			</View>

			<View style={styles.button}>
				<Button
					title='Adicionar ingrediente'
					onPress={() => { tryAdd() }}
				/>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	button: {
		marginTop: 15
	},
})