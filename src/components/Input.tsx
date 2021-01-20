import React, { useState } from 'react';
import { TextInput } from 'react-native';

export default (props: {
	value: string | undefined,
	keyboardTypeValue?: any,
	changeText: any,
}) => {
	return (
		<TextInput
			style = {{
				height: 35,
				padding: 10,
				borderColor: 'gray', 
				borderWidth: 1
			}}
			keyboardType = {props.keyboardTypeValue || 'default'}
			onChangeText = {text => props.changeText(text)}
			value = {props.value}
		/>
	)
};
