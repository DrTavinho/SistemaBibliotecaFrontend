const pause = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const axios = require('axios');

async function buscarComAxios() {
    try {
        // Usando 127.0.0.1 para evitar problemas de IPv6 do Node.js
        const resposta = await axios.get('http://127.0.1:8000/livros');

        console.log('--- Resposta da API Python (Front Simulado) ---');
        console.log(resposta.data);
    } catch (erro) {
        console.error('Erro ao conectar na API:', erro.message);
    }
    await pause(3000);
}

async function cadastrarLivro() {
    // 1. Defina os dados do livro seguindo o seu modelo
    const novoLivro = {
        "titulo": "O Senhor dos Aneis",
        "autor": "J.R.R. Tolkien",
        "ano_publicacao": 1954,
        "isbn": "978-8551002506",
        "quantidade_total": 5
    };

    try {
        // 2. Use o axios.post passando a URL e o objeto com os dados
        const resposta = await axios.post('http://127.0.1:8000/livros', novoLivro, {
            proxy: false // Evita problemas com proxies locais
        });

        console.log('--- Livro Cadastrado com Sucesso! ---');
        console.log(resposta.data);
    } catch (erro) {
        // Se a API retornar um erro de valida��o (ex: tipo de dado errado), 
        // o erro detalhado do Python estar� em erro.response.data
        if (erro.response) {
            console.error('Erro da API:', erro.response.data);
        } else {
            console.error('Erro de conex�o:', erro.message);
        }
    }
}

cadastrarLivro();

buscarComAxios();




