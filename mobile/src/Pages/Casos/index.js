import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

import LogoImg from '../../assets/logo.png';
import styles from './styles';

import api from "../../services/api";

export default function Casos(){
    const [casos, setCasos] = useState([]);
    const navigation = useNavigation();
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigationDetail(caso){
        navigation.navigate('Detail', {caso});
    }

    async function carregaCasos(){

        if (loading){
            return;
        }
        
        if (total > 0 && casos.length == total){
            return;
        }

        setLoading(true);

        const response = await api.get('casos', {params: {page}})
        setPage(page + 1);
        setLoading(false);

        setCasos([ ... casos, ...response.data]);
        setTotal(response.headers['x-total-count'])
    }

    useEffect(() => {
        carregaCasos();

    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> {total} casos</Text>.
                </Text>
            </View>
        <Text style={styles.titulo}>Bem-vindo</Text>
        <Text style={styles.descricao}>Escolha um dos casos e salve uma vida!</Text>

        <FlatList
            data={casos}
            style={styles.listaDeCasos} 
            keyExtractor={caso => String(caso.id)}     
            showsVerticalScrollIndicator={false} 
            onEndReached={carregaCasos}
            onEndReachedThreshold={0.2}
            renderItem={({ item: caso}) => (
                <View style={styles.casos}>
                    <Text style={styles.proprietarioDoCaso}>ONG:</Text>
                    <Text style={styles.textoResultado}>{caso.nome}</Text>

                    <Text style={styles.proprietarioDoCaso}>CASO:</Text>
                    <Text style={styles.textoResultado}>{caso.descricao}</Text>

                    <Text style={styles.proprietarioDoCaso}>VALOR R$:</Text>
                    
                    <Text style={styles.textoResultado}>
                        {Intl.NumberFormat('pb-BR', { 
                            style: 'currency', 
                            currency: 'BRL'
                            }).format(caso.valor)}
                        </Text>

                    <TouchableOpacity style={styles.detailButton} 
                        onPress={() =>navigationDetail(caso)}
                    >
                        <Text style={styles.botaoDetalhe}>Ver mais detalhes...</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
            )}
        />
        </View>
    );
}