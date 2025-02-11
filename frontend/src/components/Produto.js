import React from 'react';

function Produto({ nome, descricao, preco, imagem }) {
    return (
        <div className="card mb-4">
            <img src={imagem} className="card-img-top" alt={nome} />
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <p className="card-text">{descricao}</p>
                <p className="card-text"><strong>Preço: R$ {preco}</strong></p>
                <button className="btn btn-primary">Comprar</button>
            </div>
        </div>
    );
}

export default Produto;