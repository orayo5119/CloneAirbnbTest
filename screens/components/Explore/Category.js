import React, { Component } from "react";
import { Text, View, StyleSheet,Image } from 'react-native';


class Category extends Component {
    render (){
      return (
             <View style = {{height: 150, width: 130, marginLeft: 15, borderWidth: 0.5, borderColor: "grey" , borderRadius: 5}}>
                <View style={{flex:2}}>
                    <Image source={this.props.imageUri}
                    style={{flex:1, width:null, height:null, resizeMode:"cover"}}
                    />
                </View>
             <View style={{flex:0.8, paddingLeft:10, justifyContent:"center"}}>
               <Text>
                 {this.props.name}
               </Text>
             </View>
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
export default Category;