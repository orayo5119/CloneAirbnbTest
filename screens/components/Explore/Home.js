import React, { Component } from "react";
import { Text, View, StyleSheet,Image } from 'react-native';
import StarRating from "react-native-star-rating";

class Home extends Component {
    render (){
      return (
        //width:this.props.width/2 - 30 because of the padding
        <View style={{width:this.props.width/2 - 30, height: this.props.width/2 - 30, borderWidth:0.5, borderColor:"#dddddd" }}>
        <View style={{flex: 1}}>
            <Image style={{ flex:1, width:null, height:null, resizeMode:"cover"}}
            source={require('../../../assets/home.jpg')}/>
        </View>
        <View style={{flex: 0.8, alignItems:"flex-start", justifyContent:"space-evenly", paddingLeft: 10}}>
            <Text style={{ fontSize:10, fontWeight:"bold", color:"#b63838"}}>{this.props.type}</Text>
            <Text style={{ fontSize:14, fontWeight:"bold"}}>{this.props.name}</Text>
            <Text style={{ fontSize:10}}> $ {this.props.price}</Text>
            <StarRating
              disable={true}
              maxStars={5}
              rating={this.props.rating}
              starSize={10}
            />
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
export default Home;