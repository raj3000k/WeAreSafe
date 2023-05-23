import { View, Text, Button, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { deviceHeight, deviceWidth } from './Dimensions'



export default function UserDashboard(props) {
  return (
    <View style={{backgroundColor:'white', height:deviceHeight, width:deviceWidth}}>
        <View style={{flexDirection:'row', backgroundColor:'#ffc0cb', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
        <Icon name="menu" size={40} color="#ab1844"></Icon>
      </TouchableOpacity>
      <Text style={{color:'#ab1844', fontFamily:'roboto', fontSize: 30, marginLeft:100, fontWeight:'bold'}}>Hey, Smriti</Text>
      <Image source={require('../assets/images/logoNoName.png')} style={{height:60, width: 60, marginLeft:deviceWidth-160}}/>
        </View>
        <Text>Health Data</Text>
      
    </View>
  )
}