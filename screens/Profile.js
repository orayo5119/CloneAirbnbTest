import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';



class Profile extends Component {
    render (){
      return (
        <View style={styles.container}>
          <Text> This is the profile screen</Text>
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
export default Profile;

