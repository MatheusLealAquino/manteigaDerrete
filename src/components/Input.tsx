import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default (props: {
	value: string | undefined,
	keyboardTypeValue?: any,
	changeText: any,
	placeholder?: string
	multiline?: boolean
}) => {
	return (
		<TextInput
			style = {styles.input}
			keyboardType = {props.keyboardTypeValue || 'default'}
			onChangeText = {text => props.changeText(text)}
			placeholder = {props.placeholder}
			multiline = {props.multiline}
			numberOfLines={4}
			value = {props.value}
		/>
	)
};

const styles = StyleSheet.create({
	container: {
    flex: 1
  },
	input: {
		height: 35,
		padding: 10,
		borderColor: 'gray', 
		borderWidth: 1,
		textAlignVertical: 'top'
	},
})
