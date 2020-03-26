import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import "./style.css";

export default function NovoCaso(){

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNovoCaso(e){
        e.preventDefault();

        const dados = {
            titulo,
            descricao,
            valor,
        };

        try{
            await api.post('casos', dados, {
                headers: {
                    Authorization: ongId, 
                }
            })
            history.push('/profile');

        }catch (err){
            alert('Erro ao cadastrar o Caso, tente novamente!');
        }



    }

    return (
        <div className="novocaso-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói
                    para resolver isso.
                </p>
                <Link className="back-link" to="/profile"> 
                    <FiArrowLeft size={16} color="#e02041"/> 
                    Voltar para Página Inicial
                 </Link>
            </section>
            <form onSubmit={handleNovoCaso}>
                <input 
                    placeholder="Titulo do Caso" 
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                /> 

                <textarea 
                    placeholder="Descrição"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                />             
                
                <input 
                    placeholder="Valor em Reais" 
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>    
    
        )
}