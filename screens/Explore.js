import React, { Component } from 'react';
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
	Dimensions,
	Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Category from './components/Explore/Category';
import Home from './components/Explore/Home';

// 根據手機螢幕調整尺寸
const { height, width } = Dimensions.get('window');

class Explore extends Component {
	// For android Top navigation 上方位置的修正
	componentWillMount() {
		this.startHeaderHeight = 80;
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
						{/* search bar */}
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
								// if device is android, marginTop + 30, if is ios + 15
								marginTop: Platform.OS == 'android' ? 30 : 15
							}}
						>
							<Icon name="search" style={{ marginRight: 7 }} size={20} />
							<TextInput
								underlineColorAndroid="transparent"
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
					{/* main content */}
					<ScrollView scrollEventThrottle={16}>
						<View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
							<Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
								What can we help you find?
							</Text>
							{/* Scroll view area height */}
							<View style={{ height: 160, marginTop: 20 }}>
								<ScrollView
									horizontal={true}
									// if don't want to show horizontal scroll bar
									showsHorizontalScrollIndicator={false}
								>
									<Category imageUri={require('../assets/home.jpg')} name="Home" />

									<Category imageUri={require('../assets/restaurant.jpg')} name="Restaurent" />

									<Category imageUri={require('../assets/experiences.jpg')} name="Experience" />

									<Category imageUri={require('../assets/home.jpg')} name="Home" />

									<Category imageUri={require('../assets/restaurant.jpg')} name="Restaurent" />

									<Category imageUri={require('../assets/experiences.jpg')} name="Experience" />
								</ScrollView>
							</View>
							<View style={{ marginTop:10,paddingHorizontal: 20 }}>
								<Text style={{ fontSize: 24, fontWeight: '700' }}>Introducing Airbnb Plus</Text>

								<Text style={{ marginTop: 10, fontWeight: '100' }}>
									A new selection of homes verified for quality and comfort
								</Text>

								<View style={{ width: width - 40, height: 200, marginTop: 20 }}>
									<Image
										style={{
											flex: 1,
											height: null,
											width: null,
											resizeMode: 'cover',
											borderRadius: 5,
											borderWidth: 1,
											borderColor: '#dddddd'
										}}
										source={require('../assets/home.jpg')}
									/>
								</View>
							</View>
						</View>
						<View style={{marginTop:20}}>
							<Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
								Homes around the world!
							</Text>
							<View style={{ paddingHorizontal:20, marginTop:20, flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between"}}>
								<Home width={width}/>
								<Home width={width}/>
								<Home width={width}/>

							</View>
						</View>
					</ScrollView>
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
