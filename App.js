import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
//import Icon from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather'

import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Inbox from './screens/Inbox';
import Trips from './screens/Trips';
import Profile from './screens/Profile';

class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>YUProfile! Profile up App.js to start working on your app!</Text>
			</View>
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

const TabNavigator = createBottomTabNavigator({
	Explore: {
		screen: Explore,
		navigationOptions: {
			tabBarLabel: 'Explore',
			tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} size={24} />
		}
	},
	Saved: {
		screen: Saved,
		navigationOptions: {
			tabBarLabel: 'Saved',
			tabBarIcon: ({ tintColor }) => <Icon name="heart" color={tintColor} size={24} />
		}
	},
	Trips: {
		screen: Trips,
		navigationOptions: {
			tabBarLabel: 'Trips',
			tabBarIcon: ({ tintColor }) => (
				<Image source={require('./assets/airbnb.png')} style={{ width: 20, height: 20, tintColor:tintColor}} />
				//<Icon name="ios-heart-empty" color={tintColor} size={24} />
			)
		}
	},
	Inbox: {
		screen: Inbox,
		navigationOptions: {
			tabBarLabel: 'Inbox',
			tabBarIcon: ({ tintColor }) => <Icon name="message-square" color={tintColor} size={24} />
		}
  },
  Profile: {
		screen: Profile,
		navigationOptions: {
			tabBarLabel: 'Profile',
			tabBarIcon: ({ tintColor }) => <Icon name="user" color={tintColor} size={24} />
		}
	}
});

export default createAppContainer(TabNavigator);
