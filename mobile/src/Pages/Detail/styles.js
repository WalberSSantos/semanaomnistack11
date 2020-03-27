import { StyleSheet } from 'react-native';
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
        color: '#737390',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },
    titulo: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    descricao: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },
    listaDeCasos: {
        marginTop: 32,

    },

    casos: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48,
    },

    proprietarioDoCaso: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    textoResultado: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },

    contatoBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    msgTitulo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    msgDescricao: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    boxBotoesContato: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    botoesContato: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    acaoTexto: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'


    }

 
})