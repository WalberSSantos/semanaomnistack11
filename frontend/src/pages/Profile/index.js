import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2} from 'react-icons/fi';
import api from '../../services/api';

import "./styles.css";

import logoImg from '../../assets/logo.svg';

export default function Profile(){
    const [caso, setCaso] = useState([]);

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongNome = localStorage.getItem('ongNome');
    

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,  
            }
        }).then(response => {
            setCaso(response.data);
        })
    }, [ongId]);

   async function handleDeleteCaso(id){
        try{
            await api.delete(`casos/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setCaso(caso.filter(caso => caso.id !== id));

        }catch (err){
            alert('Erro ao deletar caso, tente novamente!');
        }
    }

function handleLogout(){
    localStorage.clear();
    history.push("/");
   
}


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vindo, {ongNome}</span>

                <Link className="button" to="/caso/novo">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button"><FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {caso.map(caso => (
                    <li key={caso.id}>
                        <strong>CASO:</strong>
                        <p>{caso.titulo }</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{caso.descricao}</p>

                        <strong>VALOR:</strong>
                        <p> {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(caso.valor)} </p>
                        <button onClick={() => handleDeleteCaso(caso.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
                
            </ul>
        </div>


    )
}