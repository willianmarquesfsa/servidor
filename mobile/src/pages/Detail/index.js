import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking  } from 'react-native';
import styles from './style';
import {useNavigation, useRoute} from '@react-navigation/native';

import * as MailComposer from 'expo-mail-composer';

import {Feather} from '@expo/vector-icons';


import logoImg from '../../assets/logo.png';



export default function Detail() {
    const route = useRoute();
    const navigator = useNavigation();
    const incident = route.params.incident;
    const message = `Olá ${incident.name }, estamos entrando em contato, pos gostaria de ajudar no caso ${incident.title} com o valor de ${
        Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL'
            }).format(incident.value)}`
    function navigateBack() {
        navigator.goBack();
    };

    function sendEmail() {
             MailComposer.composeAsync({
                 subject: `Heroi do caso: ${incident.title}`,
                 recipients: [incident.email],
                 body: message,
             }) 
    };

    function sendWhatsapp() {
             Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    };

    return (
        <View style={styles.container}>
             <View style={styles.header}>
             <Image source={logoImg}/>

             <TouchableOpacity onPress={navigateBack}>
                 <Feather name="arrow-left" size={28} color="#882041"/>
             </TouchableOpacity>

             </View>

             <View style={styles.incidents}>
                      <Text style={styles.incidentsProperty}>ONG</Text>
                      <Text style={styles.incidentsValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                      <Text style={styles.incidentsProperty}>Caso</Text>
                      <Text style={styles.incidentsValue}>{incident.description}</Text>

                      <Text style={styles.incidentsProperty}>Valor</Text>
                      <Text style={styles.incidentsValue}>{
                          Intl.NumberFormat('pt-BR', { 
                              style: 'currency', 
                              currency: 'BRL'
                              }).format(incident.value)}
                              </Text>

                      
                      
                 </View>


                  <View style={styles.contactBox}>
                      <Text style={styles.heroTitle}>Salve o dia!</Text>
                      <Text style={styles.heroTitle}>Seja o heroi desse caso</Text>

                      <Text style={styles.heroDescription}>Entre em contato:</Text>
                      <View style={styles.actions}>
                          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                              <Text style={styles.actionsText}>Whastsapp</Text>
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.action} onPress={sendEmail}>
                              <Text style={styles.actionsText}>E-mail</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
             
          </View>
        
    );

    
}



