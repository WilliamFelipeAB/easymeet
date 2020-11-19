import React from 'react';

import './style.css';

function CriarEncontro(){
    return(
        <div id="page-criar">
            <div className="form-create-container">
                <form className="form-create">
                    <legend>Criar encontro online</legend>
                    <div className="input-block">
                        <label htmlFor="name">Nome do evento</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="description">Descrição</label>
                        <textarea id="description" maxLength={300}/>
                    </div>
                    <div className="input-block-horizontal">
                        <div className="input-block">
                            <label htmlFor="date">Data do encontro</label>
                            <input type="date" id="date"/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="quant">Quant. vagas</label>
                            <input type="number" id="quant" min="1" max="100"/>
                        </div>
                    </div>
                    <div className="input-block">
                        <label htmlFor="resp">Responsável/Palestrante</label>
                        <input type="text" id="resp"/>
                    </div>

                    <button type="submit">Criar</button>
                </form>
            </div>
        </div>
    );
}

export default CriarEncontro;