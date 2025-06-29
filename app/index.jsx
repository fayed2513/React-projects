import coffee from "@/assets/images/iced-coffee.png"
import { Link } from "expo-router"
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
const app = () => {
  return (
    <View style={colour.container}>
      <ImageBackground
      source={coffee}
      resizeMode="cover"
      style={colour.image}>
      <Text style={colour.text}>Coffee shop</Text>

       <Link href="/menu" style={{marginHorizontal:'auto'}} 
       asChild>
       <Pressable style={colour.button}>
        <text style={colour.button_text}>Menu</text>
        </Pressable>
      </Link>

      <Link href="/contact" style={{marginHorizontal:'auto'}} 
       asChild>
       <Pressable style={colour.button}>
        <text style={colour.button_text}>contact us</text>
        </Pressable>
      </Link>

      </ImageBackground>
    </View>
  )
}
export default app


const colour=StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'column',
  },
  text:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
    marginBottom:120,
  },
   link:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    textDecorationLine:'underline',
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:4,
  },
  button:{
   height:60,
   width:150,
   borderRadius:20,
   justifyContent:'center',
   backgroundColor:'rgba(0,0,0,0.75)',
   padding:6,
   marginBottom:60,
  },
   button_text:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    padding:4,
  },
  image:{
   width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
})