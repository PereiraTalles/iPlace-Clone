const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const produtos = [
    { nome: 'iPhone 16 Pro Max Titânio', descricao: 'Concebido para a inteligência da Apple, com um fantástico design em titânio.', preco: 8999.99, imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/182538541/image-0.jpg?v=638724823034400000',categoria: 'iphone' },
    { nome: 'iPhone 16 Pro Max Rose', descricao: 'Concebido para a inteligência da Apple, com um fantástico design em titânio.', preco: 8999.99, imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/182538253/image-0.jpg?v=638724822505400000',categoria: 'iphone' },
    { nome: 'iPhone 16 Pro Max Branco', descricao: 'Concebido para a inteligência da Apple, com um fantástico design em titânio.', preco: 8999.99, imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/182538321/image-0.jpg?v=638724822625830000',categoria: 'iphone' },
    { nome: 'Apple Macbook Pro', descricao: 'Apple Macbook Pro A2251 Intel Core I5 10gen Ssd 500gb 16gb Macos.', preco: 13499.99, imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/183133039/image-0.jpg?v=638738658814070000',categoria: 'macbook' },
    { nome: 'Apple Macbook Air Processador M1', descricao: '8Gb - 256Gb SSD - Tela de 13.3" Cinza Espacial MGN63LL/A.', preco: 13499.99, imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/182538508/image-0.jpg?v=638724822978230000',categoria: 'macbook' },
    { nome: 'Apple Macbook Air 15 Pol M3', descricao: 'cpu De 8 Núcleos, Gpu De 10 Núcleos, 16gb Ram, 256gb Ssd - Meia Noite.', preco: 13499.99, imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/182691291/image-0.jpg?v=638727423670330000',categoria: 'macbook' },
    { nome: 'Ipad Air De 11 Polegadas', descricao: 'Wi-fi + Cellular 1tb Cinza-espacial, M2 6ª Geraçãocâmera Câmera Grande', preco: 2999.99, imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/181539284/image-0.jpg?v=638696916463370000',categoria: 'ipad' },
    { nome: 'Ipad Pro De 11 Polegadas', descricao: 'Wi-fi 2tb Com Vidro Convencional - Preto-espacial, O Ipad Fica Mais Produtivo, Intuitivo E Versáti', preco: 2999.99, imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/177177398/ipad-pro-de-11-polegadas-wi-fi-2tb-com-vidro-convencional-preto-espacial.jpg?v=638659985156330000',categoria: 'ipad' },
    { nome: 'Ipad Pro De 13 Polegadas', descricao: 'Wi-fi 1tb Com Vidro Convencional - Prateado, O Ipad Fica Mais Produtivo, Intuitivo E Versáti', preco: 2999.99, imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/178691873/ipad-pro-de-13-polegadas-wi-fi-1tb-com-vidro-convencional-prateado.jpg?v=638668506298570000',categoria: 'ipad' }
];

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});