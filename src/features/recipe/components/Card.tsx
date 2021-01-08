import React, { useRef, useState } from 'react';
import {
	Animated, PanResponder, StyleSheet, View, Text, Dimensions, Alert
} from 'react-native';
import { Link } from 'react-router-native';
import colorsStyle from '../../../style/colors.style';

export default (props: {
	name: string
}) => {
	const width = Dimensions.get('window').width;
	const maximumWidth = (width * 80) / 100;
	const mediumWidth = (width * 60) / 100;
	const minimumWidth = (width * 35) / 100;
	const gestureDelay = -50;

	const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
    	onMoveShouldSetPanResponder: (evt, gestureState) => true,
    	onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderMove: (evt, gestureState) => {
				if (gestureState.dx < maximumWidth) {
					const newX = gestureState.dx + gestureDelay;
					pan.setValue({x: newX, y: 0});
				}
			},
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx < minimumWidth) {
					Animated.timing(pan, {
						useNativeDriver: true,
						toValue: {x: 0, y: 0},
						duration: 150,
					}).start(() => {});
				} else {
					Animated.timing(pan, {
						useNativeDriver: true,
						toValue: {x: mediumWidth, y: 0},
						duration: 150,
					}).start(() => {});
				}
    	},
    })
  ).current;

	return (
		<View style={styles.listItem}>
			<Animated.View
				style={{
					transform: [{ translateX: pan.x }, { translateY: 0 }],
					borderRadius: 5,
				}}
				{...panResponder.panHandlers}
			>
				<View style={styles.absoluteCell}>
					<Link
						to="/topics"
						underlayColor="#f0f4f7"
					>
						<Text style={styles.absoluteCellText}>Enter</Text>
					</Link>
				</View>

				<View style={styles.innerCell}>
					<Text style={styles.item}>
						{props.name}
					</Text>
				</View>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	listItem: {
		height: 80,
    marginLeft: -100,
    justifyContent: 'center',
		backgroundColor: 'green',
  },
  absoluteCell: {
    position: 'absolute',
    top: 0,
    bottom: 0,
		left: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
		alignItems: 'center',
  },
  absoluteCellText: {
    margin: 16,
    color: '#FFF',
  },
  innerCell: {
		borderTopColor: colorsStyle.black,
		borderTopWidth: 0.3,
		borderBottomColor: colorsStyle.black,
		borderBottomWidth: 0.3,
		backgroundColor: colorsStyle.white,

    width: Dimensions.get('window').width,
    height: 80,
    marginLeft: 100,
    justifyContent: 'space-around',
		alignItems: 'flex-start',
	},
	item: {
		paddingLeft: 20,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 18,
	},
});