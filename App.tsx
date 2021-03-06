import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/Home';
import Cliente from './screens/Cliente';
import Contato from './screens/Contato';
import Portifolio from './screens/Portifolio';
//Vamos criar um elemento que nos ajudará a empilhar as telas

const Pilha = createNativeStackNavigator();

export default function App() {

  return (
   <NavigationContainer>
     <Pilha.Navigator initialRouteName="Home">

      <Pilha.Screen name="Home" component={Home} options={{headerTitleAlign:'center', headerTintColor:'red',headerStyle:{backgroundColor:'blue'}}}  />
      <Pilha.Screen name ="Cliente" component={Cliente}/>
      <Pilha.Screen name ="Contato" component={Contato}/>
      <Pilha.Screen name = "Portifolio" component={Portifolio}/>

     </Pilha.Navigator>
   </NavigationContainer>
  );
}


