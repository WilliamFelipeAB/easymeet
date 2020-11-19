import React from 'react';

import './style.css';

function Menu(){
    return(
        <div id="page-menu">
            <div className="menu-container">
                <h1>Menu</h1>
                <button>Criar eventos</button>
                <button>Listar eventos</button>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Menu;