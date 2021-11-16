import * as React from 'react';
import {Button, Text, TouchableOpacity, View } from 'react-native';
import { estilo } from '../css/Styles';
export default function Portifolio({navigation}){
    return(
        <View style={estilo.conteudo}>
            <Text>Tela Portifolio</Text>

<View style={estilo.barra}>
<TouchableOpacity style={estilo.btn}
onPress={()=>{
   navigation.navigate('Portifolio'); 
}}>
    <Text style={estilo.txtbtn}>Portifolio</Text>
</TouchableOpacity>



</View>




        </View>
    );
}