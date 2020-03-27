import React from 'react';
import { Feather} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import LogoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const caso = route.params.caso;
    const message = `'Olá ${caso.nome}, estou entrando em contato pois gostaria de ajuda no caso: 
    "${caso.titulo}" com o valor de ${Intl.NumberFormat('pb-BR', { style: 'currency',  currency: 'BRL'}).format(caso.valor)}`;

    function voltar(){
        navigation.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${caso.titulo}`,
            recipients: [caso.email],
            body: message,

        })


    }

    function sendWhatapp(){
        Linking.openURL(`whatsapp://send?phone={caso.whatsapp}&text=${message}`);

    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={LogoImg}/>
                <TouchableOpacity onPress={voltar}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>             
            </View>
            
            <View style={styles.casos}>
            <Text style={styles.proprietarioDoCaso, { marginTop: 0 }}>ONG:</Text>
                    <Text style={styles.textoResultado}>{caso.nome} da cidade: {caso.cidade}/{caso.uf}</Text>

                    <Text style={styles.proprietarioDoCaso}>CASO:</Text>
                    <Text style={styles.textoResultado}>{caso.descricao}</Text>

                    <Text style={styles.proprietarioDoCaso}>VALOR R$:</Text>
                    
                    <Text style={styles.textoResultado}>
                        {Intl.NumberFormat('pb-BR', { 
                            style: 'currency', 
                            currency: 'BRL'
                            }).format(caso.valor)}
                        </Text>
            </View>

            <View style={styles.contatoBox}>
                <Text style={styles.msgTitulo}>Salve o dia!</Text>
                <Text style={styles.msgTitulo}>Seja o herói desse caso.</Text>
                <Text style={styles.msgDescricao}>Entre em contato:</Text>

                <View style={styles.boxBotoesContato}>
                    <TouchableOpacity style={styles.botoesContato} onPress={sendWhatapp}>
                        <Text style={styles.acaoTexto}>WhatApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botoesContato} onPress={sendMail}>
                        <Text style={styles.acaoTexto}>E-mail</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}