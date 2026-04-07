const mysql = require('mysql2/promise');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nomeUsuario, senha } = req.body;

        try {
            const conexao = await mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: 'banco_de_dados_do_lucas'});

            const [linhas] = await conexao.execute(
                'SELECT * FROM usuarios WHERE nome_usuario = ? AND senha_hash = ?',
                [nomeUsuario, senha]);

            if (linhas.length > 0) {
                res.status(200).json({ sucesso: true, usuario: linhas[0] });
            } else {
                res.status(401).json({ sucesso: false, mensagem: "Usuário ou senha inválidos" });}

            await conexao.end();
        } catch (erro) {
            res.status(500).json({ sucesso: false, erro: "Erro ao conectar no banco de dados..." });}}}