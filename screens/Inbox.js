import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Inbox extends Component {
    render (){
      return (
        <View style={styles.container}>
          <Text> This is the Inbox screen</Text>
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
export default Inbox;


