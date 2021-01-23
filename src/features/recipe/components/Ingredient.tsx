import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Input from '../../../components/Input';
import { IIngredients } from '../../../interfaces/IIngredients';

export default ({ onAdd }) => {
	const [quantity, setQuantity] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	function tryAdd () {
		if (!quantity || !name) {
			Alert.alert(
				`Favor preencher os campos com *`,
				'Verifique o campo de quantidade e nome.',
				[
					{
						text: 'Tentar novamente',
						onPress: () => console.log('tentar novamente pressionado'),
					},
				],
				{ cancelable: true }
			);
			return;
		}

		const ingredient: IIngredients = {
			id: `${new Date().getTime()}`,
			quantity: quantity ? Number(quantity) : 1,
			name,
			description
		};

		setQuantity('');
		setName('');
		setDescription('');
		onAdd(ingredient);
	}

	return (
		<View>
			<Text>Ingredientes: </Text>
			<View>
				<Text>Quantidade: *</Text>
				<Input
					changeText={(text) => { setQuantity(text) }}
					value={quantity}
					keyboardTypeValue='numeric'
				/>
			</View>
			<View>
				<Text>Nome: *</Text>
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
					multiline={true}
					placeholder={'Ex: 2 colheres'}
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
		marginTop: 15,
		paddingHorizontal: 60,
	},
})