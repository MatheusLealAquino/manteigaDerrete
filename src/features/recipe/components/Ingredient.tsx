import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { IIngredients } from '../../../interfaces/IIngredients';

import Input from '../../../components/Input';

export default ({ onAdd }) => {
	const [quantity, setQuantity] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	function setInitialState() {
		setName('');
		setQuantity('');
		setDescription('');
	}

	useFocusEffect(
    React.useCallback(() => {
			console.log('limpando dados do componente de ingredientes');

			setInitialState();
    }, [onAdd])
  );

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

		setInitialState();
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
					numberOfLines={2}
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
		marginVertical: 5,
		paddingHorizontal: 60,
	},
})