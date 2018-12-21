import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';



class Explore extends Component {
    render (){
      return (
        <View style={styles.container}>
          <Text> This is the Explore screen</Text>
        </View>
      )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });
export default Explore;

