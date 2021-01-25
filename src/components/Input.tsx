import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default (props: {
	value: string | undefined,
	keyboardTypeValue?: any
	changeText: any
	placeholder?: string
	multiline?: boolean
	numberOfLines?: number
}) => {
	const heightDecision = props.numberOfLines && props.numberOfLines > 0 ?
		{
			minHeight: 35,
		} :
		{
			height: 35
		};

	return (
		<TextInput
			style = {{
				...styles.input,
				...heightDecision
			}}
			keyboardType = {props.keyboardTypeValue || 'default'}
			onChangeText = {text => props.changeText(text)}
			placeholder = {props.placeholder}
			multiline = {props.multiline}
			numberOfLines={props.numberOfLines || 1}
			value = {props.value}
		/>
	)
};

const styles = StyleSheet.create({
	container: {
    flex: 1
  },
	input: {
		padding: 10,
		borderColor: 'gray', 
		borderWidth: 1,
		textAlignVertical: 'top'
	},
})
