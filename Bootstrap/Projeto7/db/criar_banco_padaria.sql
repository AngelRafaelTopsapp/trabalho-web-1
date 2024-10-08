-- criar_banco_padaria_blob.sql

-- Cria o banco de dados
CREATE DATABASE IF NOT EXISTS padaria;

-- Usa o banco de dados criado
USE padaria;

-- Cria a tabela de produtos com um campo BLOB para a imagem
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    imagem BLOB NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

-- **Nota:** Para inserir imagens diretamente como BLOB, você precisará usar um comando específico
-- que depende do seu cliente SQL ou linguagem de programação. Por exemplo, usando PHP você faria algo assim:
-- $sql = "INSERT INTO produtos (nome, imagem, preco) VALUES (?, ?, ?)";
-- onde `imagem` seria o conteúdo binário da imagem.

-- Insira os produtos com imagens já codificadas em binário
-- Exemplo: (coloque seus dados e codifique as imagens em binário)
-- INSERT INTO produtos (nome, imagem, preco) VALUES ('Produto', [BINÁRIO], 1.00);
