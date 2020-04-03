import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold:{
        fontWeight: 'bold'
    },

    title:{
         fontSize: 28,
         marginTop: 25,
         marginBottom: 16,
         color: '#13131a',
         fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 18,
        color: '#737380',
        
        
    },

    incidentsList: {
        marginTop: 18,
    },

    incidents: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16, 
    },
    
    incidentsProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentsValue: {
        fontSize: 15,
        marginTop: 8,
        marginBottom: 24,
        color: '#737380'

    },

    detailButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailButtonText: {
        fontSize: 15,
        color: '#e02041',
        fontWeight: 'bold',
    },

    headerTextBold : {
        fontWeight: 'bold'
    }


})