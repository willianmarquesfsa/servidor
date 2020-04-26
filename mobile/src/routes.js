import React  from 'react';
import logo from './assets/logo.png';

 import {Image} from "react-native";
 //import { View, FlatList, Image, Text, TouchableOpacity, Button, Container, Content, Headerr, Body, Icon} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';

//import { DrawerNavigation} from '@react-navigation';


import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContentScrollView, DrawerNavigation} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();

//import {HomeScreen, NotificationsScreen } from './pages/Barra';

import Incidents from './pages/Incidents';
//import Detail from './pages/Detail';  
//import { Title } from 'native-base';
//import Incidents2 from './pages/Incidents';
import { Container, Header, Body, Text } from 'native-base';
//import { Header } from 'react-native/Libraries/NewAppScreen';




const e = 'Eletronicos';
const a = 'CasaeJardin';
const b = 'AcessoriosDiversos';
const x = 'ModaMasculina';
const y = 'ModaFeminina';
const z = 'Beleza';
const segun = 'Feiraguay';
const grupoall = 'all'


const Eletronicos = props => (
  Incidents(e, segun)
);

const CasaeJardin = props => (
  Incidents(a, segun)
);

const AcessoriosDiversos = props => (
  Incidents(b, segun)
);


const Beleza = props => (
  Incidents(z, segun)
);

const ModaMasculina = props => (
  Incidents(x, segun)
);

const ModaFeminina = props => (
  Incidents(y, segun)
);

const FeiraGuay = props => (
  Incidents(grupoall, segun)
);

function CustomDrawerContentComponent(props) {
 return ( 
  
  <Container>
    <Header style={{height: 200, backgroundColor: '#fff'}}>
      <Body>
         <Image
         style={{marginLeft: 20}} 
         source={require('../assets/icon.png')}></Image>
        
      </Body>
    </Header>
    
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      
    </DrawerContentScrollView>
    
  </Container>

  
)
}


function MyDrawer() {

  return (
  <Drawer.Navigator  drawerContentOptions={{
                                
    labelStyle: {fontSize: 18},
    activeTintColor: '#e91e63',
    itemStyle:  { marginVertical: 4}}}
  drawerContent={props => <CustomDrawerContentComponent {...props} />}
  drawerType={'slide'} 
  drawerStyle={{backgroundColor: '#c6cbef', width: 270}}>
     
     
   

<Drawer.Screen name="FeiraGuay" component={FeiraGuay}/>
<Drawer.Screen name="Acessorios/Diversos" component={AcessoriosDiversos}/>
<Drawer.Screen name="Beleza" component={Beleza}/>
<Drawer.Screen name="Casa & Jardin" component={CasaeJardin}/>
<Drawer.Screen name="Eletronicos" component={Eletronicos}/>
<Drawer.Screen name="Moda Masculina" component={ModaMasculina}/>
<Drawer.Screen name="Moda Feminina" component={ModaFeminina}/>




 
</Drawer.Navigator>
  )
}



export default function Routes() {

  return (
       
        <NavigationContainer>
           
  
      <MyDrawer/>
        </NavigationContainer>
    );
}