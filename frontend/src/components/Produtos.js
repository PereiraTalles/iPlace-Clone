import React, { useState, useEffect } from 'react';
import Produto from './Produto';

function Produtos() {
    const [categoria, setCategoria] = useState('todos');
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const buscarProdutos = async () => {
        try {
            const resposta = await fetch('http://localhost:5000/produtos');
            const dados = await resposta.json();
            setProdutos(dados);
            setCarregando(false);
        } catch (erro) {
            console.error('Erro ao buscar produtos:', erro);
            setCarregando(false);
        }
    };

    useEffect(() => {
        buscarProdutos();
    }, []);

    const produtosFiltrados = categoria === 'todos' ? produtos : produtos.filter(p => p.categoria === categoria);

    return (
        <div className="container">
            <h1 className="text-center my-4">Nossos Produtos</h1>
            
            <div className="text-center mb-4">
                <button className={`btn mx-2 ${categoria === 'todos' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setCategoria('todos')}>Todos</button>
                <button className={`btn mx-2 ${categoria === 'iphone' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setCategoria('iphone')}>iPhones</button>
                <button className={`btn mx-2 ${categoria === 'macbook' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setCategoria('macbook')}>MacBooks</button>
                <button className={`btn mx-2 ${categoria === 'ipad' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setCategoria('ipad')}>iPads</button>
            </div>

            {carregando ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Carregando...</span>
                    </div>
                    <p>Carregando produtos...</p>
                </div>
            ) : (
                <div className="row">
                    {produtosFiltrados.map((produto, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <Produto nome={produto.nome} descricao={produto.descricao} preco={produto.preco} imagem={produto.imagem} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Produtos;