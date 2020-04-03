import React, { useState, useEffect} from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import api from '../../services/api'
import logoImg from '../../assets/logo.png';
import styles from './styles';


export default function Incidents() {
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);

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
           params: {page}
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
    
    return (
        <View style={styles.container}>
          <View style={styles.header}>
             <Image source={logoImg}/>
             <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>{total} Casos</Text> </Text>
          </View>
             <Text style={styles.title}> Bem-Vindo </Text>
             <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

             <FlatList
                 data={incidents}
                 keyExtractor={incident => String(incident.id)}
                 style={styles.incidentsList}
                 //showsVerticalScrollIndicator={false}
                 onEndReached={loadIncidents}
                 onEndReachedThreshold={0.2}
                 renderItem={({item: incident})=>(
                      
                    <View style={styles.incidents}>
                      <Text style={styles.incidentsProperty}>ONG</Text>
                      <Text style={styles.incidentsValue}>{incident.name}</Text>

                      <Text style={styles.incidentsProperty}>Caso</Text>
                      <Text style={styles.incidentsValue}>{incident.title}</Text>

                      <Text style={styles.incidentsProperty}>Valor</Text>
                      <Text style={styles.incidentsValue}>{
                          Intl.NumberFormat('pt-BR', { 
                              style: 'currency', 
                              currency: 'BRL'
                              }).format(incident.value)}
                              </Text>

                      <TouchableOpacity style={styles.detailButton} onPress={()=>navigateToDetail(incident)}>
                          <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                          <Feather name='arrow-right' size={16} color="#e02041"/>
                      </TouchableOpacity>
                      
                 </View>

                 )}
             />
        </View>
    );
}