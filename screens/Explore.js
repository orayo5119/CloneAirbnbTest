import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Explore extends Component {
	// For android Top navigation 上方位置的修正
	componentWillMount() {
		this.startHeaderHeight = 65;
		if (Platform.OS == 'android') {
			this.startHeaderHeight = 70 + StatusBar.currentHeight;
		}
	}

	render() {
		return (
			// SafeAreaView 避掉 iphone x 的瀏海
			// 上方Top navigation coding demo
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					<View
						style={{
							height: this.startHeaderHeight,
							backgroundColor: 'white',
							borderBottomWidth: 1,
							borderBottomColor: '#B7B7B7'
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								padding: 12,
								backgroundColor: 'white',
								marginHorizontal: 20,
								shadowOffset: { width: 0, height: 0 },
								shadowColor: 'black',
								shadowOpacity: 0.2,
								// (Android-only) This adds a drop shadow to the item and affects z-order for overlapping views. Only supported on Android 5.0+ above
								elevation: 2,
								// if device is android, marginTop + 30
								marginTop: Platform.OS == 'android' ? 30 : null
							}}
						>
							<Icon name="search" style={{ marginRight: 7 }} size={20} />
							<TextInput
								placeholder="Search places"
								placeholderTextColor="#B7B7B7"
								// Size="30"
								style={{
									flex: 1,
									fontWeight: '500',
									backgroundColor: 'white'
								}}
							/>
						</View>
					</View>
				</View>
			</SafeAreaView>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#fff',
		alignItems: 'center'
	}
});
export default Explore;
