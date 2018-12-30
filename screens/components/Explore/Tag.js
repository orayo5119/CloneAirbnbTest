import React, { Component } from "react";
import { Text, View, StyleSheet,Image } from 'react-native';


class Tag extends Component {
    render (){
      return (
        <View style={{minHeight:20, minWidth:40, padding:5, backgroundColor:'white', borderColor:'#dddddd', borderWidth:1, borderRadius:2, marginRight:15}}>
            <Text style={{fontWeight:'700', fontSize:12 }}>{this.props.name}</Text>
        </View>
      );
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
export default Tag;