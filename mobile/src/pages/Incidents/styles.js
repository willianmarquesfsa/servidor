import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; 

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        

    },

    headerText: {
        fontSize: RFValue(15, 580),
        color: '#737380'
    },

    headerTextBold:{
        fontWeight: 'bold'
    },

    title:{
        fontSize: RFValue(22, 580),
         marginTop: 16,
         marginRight: 100,
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
        marginTop: 20,
        
    },

    incidentsList2: {
        marginTop: 18,
        borderRadius: 14,
        backgroundColor: '#FFF',
        paddingVertical: 15,
        padding: 10
        
        
    },

    incidents: {
        //padding: 24,
        
        //marginBottom: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        
        
    },
    
    incidentsProperty:{
        fontSize: RFValue(14),
        color: '#41414d',
        //fontWeight: 'bold',
        padding: 24,
        marginTop: -35
    },

    incidentsValue: {
        flex: 1,
        //justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginTop: -20,
        fontSize: RFValue(18),
        fontWeight: 'bold',

               
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
    },

    actions: {
        //marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
 },

 action1: {
    //paddingLeft: 30,
    
    //height: 50,
    //width: '28%',
    
},
action2: {
    //paddingHorizontal: 30
    
    //height: 50,
    width: '50%',
    alignItems: 'center',
    
},
action3: {
    //paddingRight:30
   // width: '28%',
    //height: 50,
    
    
},





   /* instagram: {
        overflow: 'hidden',
    },
    
    instagram: { wrap: {
        bordertop: '1px solid #eee',
        marginleft: 'auto',
        marginright: 'auto',
        maxwidth: 1280,
        paddingbottom: 30,
        paddingtop: 40,
        textalign: 'center',
    },},
    
    instagram: {widgettitle: {
        fontfamily: 'Playfair Display serif',
        fontsize: 24,
        fontsize: 2.4,
        fontstyle: 'italic',
        marginbottom: 20
    },},
    
    instagram: {ul: {
        display: inline-block,
        marginleft: 'auto',
        marginright: 'auto',
    },},
    
    instagram: {ul: {li: {
        float: left,
        marginleft: 15,
        marginright: 15,
    },},},
    
    instagram: {img: {
        height: 160,
        verticalalign: top,
        width: 160,
    },}


*/




})