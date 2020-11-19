import React from 'react';

import {FiEye} from 'react-icons/fi'
import './style.css';

function ListarEventos(){
    return(
        <div id="page-list">
            <h1>Lista de eventos</h1>
            <table className="table-list">
                <thead>
                    <tr className="head">
                        <th className="nome">Nome</th>
                        <th className="data">Data</th>
                        <th className="vagas">Vagas</th>
                        <th className="resp">Responsável/Palestrante</th>
                        <th className="details">Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SAINF</td>
                        <td>20/10/2020</td>
                        <td>10/30</td>
                        <td>William</td>
                        <td><FiEye className="icon"/></td>
                    </tr>
                    <tr>
                        <td>SAINF</td>
                        <td>20/10/2020</td>
                        <td>10/30</td>
                        <td>William</td>
                        <td><FiEye className="icon"/></td>
                    </tr>
                    <tr>
                        <td>SAINF</td>
                        <td>20/10/2020</td>
                        <td>10/30</td>
                        <td>William</td>
                        <td><FiEye className="icon"/></td>
                    </tr>
                    <tr>
                        <td>SAINF</td>
                        <td>20/10/2020</td>
                        <td>10/30</td>
                        <td>William</td>
                        <td><FiEye className="icon"/></td>
                    </tr>
                    <tr>
                        <td>SAINF</td>
                        <td>20/10/2020</td>
                        <td>10/30</td>
                        <td>William</td>
                        <td><FiEye className="icon"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListarEventos;