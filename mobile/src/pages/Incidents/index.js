import React, { useState, useEffect} from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, Button, Linking } from 'react-native';
import {Feather, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation, DrawerActions, useRoute } from '@react-navigation/native';
import api from '../../services/api'
import logoImg from '../../assets/logo.png';
//import Card, {itemm, colors } from './image';

import styles from './styles';


import {Avatar, Card, Title, Paragraph} from 'react-native-paper';

import { Container, Header, Body, Textt } from 'native-base';



import { createStackNavigator} from '@react-navigation/stack';



const AppStack = createStackNavigator();
/*
const w = 40;


class perfil extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Image
            
            source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg` }}
            style={{ width: 100 }}
            resizeMode="cover"
          />
        </View>
      );
    }
}  

var n = new perfil;
*/

export default function Incidents(x, segun) {
    
   



    console.log(segun);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const grupo = x;
    const centrolojistico = segun;

    const [loanding, setLoading] = useState(false);
    const [incidents, setIncidents] = useState([]);

    const navigation = useNavigation();
    
    function navigateToDetail(incident) {
        navigation.navigate('Detail', {incident});
    };

    async function loadIncidents() {
        if (loanding){
            return;
        };

        if(total > 0 && incidents.length === total) {
            return;
        };

        setLoading(true); 


       const response = await api.get('incidents', {
           
           params: {page, grupo, centrolojistico},
           
       });
       console.log(response.data);
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
    };

    useEffect(()=>{
        loadIncidents();
    },[]); 


    const message = `Olá ${incidents.name }, estamos entrando em contato, pos gostaria de ajudar no caso ${incidents.title} com o valor de ${
        Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL'
            }).format(incidents.value)}`


    
    function sendWhatsapp(whatsapp) {
        Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`);
};

function sendIstagram(instagram) {
    Linking.openURL(`${instagram}`);
};

function sendGoogleMaps(coordenadas) {
  Linking.openURL(`${coordenadas}`);
};

//console.log(incidents.name);

/*function render() {
    
    const fotoUrl = 'https://instagram.fssa3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/90436938_281622322820743_2573674605696778240_n.jpg?_nc_ht=instagram.fssa3-1.fna.fbcdn.net&_nc_ohc=SIlGHQ0_es0AX85Q1e3&oh=c52dbc6ea2626078380653395c1200e5&oe=5EC66D00';
    return (
      <View>
        <Image source={{uri: fotoUrl}} resizeMode="contain"/>
        
      </View>
    );
  };
const perfil = render();
   */
  
   
   



    return (
        
        

      
        <View style={styles.container}>


          <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()} > 
          <Feather name={'list'} size={38} color="#13131a"/>
          
          </TouchableOpacity>
          <Text style={styles.title}> Comércio FSA </Text> 
          </View>



             
             <Text style={styles.headerText}>Encontramos <Text style={styles.headerTextBold}>{total}</Text> estabelecimentos na região:</Text>
             

             <FlatList
                 data={incidents}
                 keyExtractor={incident => String(incident.id)}
                 style={styles.incidentsList}
                 //showsVerticalScrollIndicator={false}
                 onEndReached={loadIncidents}
                 onEndReachedThreshold={0.2}
                 renderItem={({item: incident})=>(
                      
                    <View style={styles.incidentsList2}>
                      <View style={styles.incidents}>
                      
                        <Card.Cover progressiveRenderingEnabled={true} 
                                  style={{width: 70, height: 70, borderRadius: 30}} 
                                  source={{uri: `${incident.instagram}`}}/>
                          <View style={{flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        flex:1}}>
                            <Text style={styles.incidentsValue}>{incident.name}</Text>
                            <Text style={styles.incidentsProperty}>{incident.description}</Text>
                          
                            
                          
                          <View style={styles.actions}>
                               <TouchableOpacity style={styles.action1} onPress={() => sendWhatsapp(incident.whatsapp)}>
                                  <FontAwesome name={'whatsapp'} size={30}/>
                               </TouchableOpacity>

                               <TouchableOpacity style={styles.action2} onPress={() => sendGoogleMaps(incident.google)}>
                                   <MaterialCommunityIcons name={'google-maps'} size={30}/>
                               </TouchableOpacity>
                          

                               <TouchableOpacity style={styles.action3} onPress={() => sendIstagram(incident.value)}>
                                   <FontAwesome name={'instagram'} size={30}/>
                               </TouchableOpacity>
                          
                               </View>
                          
                        </View>
                      </View>        
                   
                    

                    
                          
                      
           
            

                 </View>
                 

                 )}
             />
        </View>
    );
}





