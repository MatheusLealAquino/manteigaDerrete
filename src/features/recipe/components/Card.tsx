import React, { useRef } from 'react';
import {
	Animated, PanResponder, StyleSheet, View, Text, Dimensions,
	Alert
} from 'react-native';
import { Link } from 'react-router-native';
import colorsStyle from '../../../style/colors.style';

export default (props: {
	name: string,
	id: string,
	onDelete: Function
}) => {
	const totalWidth = Dimensions.get('window').width;
	const maximumWidth = (totalWidth * 80) / 100;
	const mediumWidth = (totalWidth * 60) / 100;
	const minimumWidth = (totalWidth * 35) / 100;
	const gestureDelay = -50;

	const pan = useRef(new Animated.ValueXY()).current;

	function tryDelete () {
		Alert.alert(
      `Deletar: ${props.name}`,
      'Deseja mesmo deletar?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log("Cancelar pressionado"),
          style: 'cancel'
        },
        { 
					text: 'Confirmar', onPress: () => {
						props.onDelete(props.id)
					}
				}
      ],
      { cancelable: false }
    );
	};

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
    	onMoveShouldSetPanResponder: (evt, gestureState) => true,
    	onPanResponderTerminationRequest: (evt, gestureState) => false,
			onPanResponderMove: (evt, gestureState) => {
				if (gestureState.dx < maximumWidth && gestureState.dx > minimumWidth) {
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
						toValue: {x: minimumWidth, y: 0},
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
					<Text
						style={styles.absoluteCellText}
						onPress={() => {
							tryDelete()
						}}>
							Deletar
					</Text>
				</View>

				<View style={styles.innerCell}>
					<Link
						style={{
							width: totalWidth
						}}
						to={'/receipe/' + props.id}
						underlayColor="#ffffff00"
					>
						<Text style={styles.item}>
							{props.name}
						</Text>
					</Link>
				</View>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	listItem: {
		height: 60,
    marginLeft: -100,
    justifyContent: 'center',
		backgroundColor: 'red',
  },
  absoluteCell: {
    position: 'absolute',
    top: 0,
    bottom: 0,
		left: 0,
    flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
  },
  absoluteCellText: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingRight: 20,
    margin: 16,
    color: '#FFF',
  },
  innerCell: {
		zIndex: 1,
		borderTopColor: colorsStyle.black,
		borderTopWidth: 0.3,
		borderBottomColor: colorsStyle.black,
		borderBottomWidth: 0.3,
		backgroundColor: colorsStyle.white,

    width: Dimensions.get('window').width,
    height: 60,
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