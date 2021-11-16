import * as React from 'react';
import {Button, Text, TouchableOpacity, View } from 'react-native';
import { estilo } from '../css/Styles';
export default function Contato({navigation}){
    return(
        <View style={estilo.conteudo}>
            <Text>Tela Contato</Text>
<View style={estilo.barra}>
<TouchableOpacity style={estilo.btn}
onPress={()=>{
    navigation.navigate('Contato');
}}>

<Text style={estilo.txtbtn}>Contato</Text>
</TouchableOpacity>


</View>


        </View>
    );
}