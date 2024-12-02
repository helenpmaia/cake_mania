# PROJETO INTEGRADOR TRANSDISCIPLINAR 

Projeto desenvolvido para a disciplina de PROJETO INTEGRADOR TRANSDISCIPLINAR - PIT II para a faculdade de Engenharia de Software.

## LOJA DE CUPCAKES - CAKE MANIA

O site foi todo desenvolvendo localmente utilizando MongoDB, Express, React, Node + Redux.

# FUNCIONALIDADES 

-> Navegação pelos itens;
-> Busca de Produtos;
-> Página de Produtos;
-> Compra de produtos;
-> Conta de usuário com registro de pedidos
-> Conta administrativa para visualização de pedidos e cadastro, edição e exclusão de produtos
-> Checkout com Paypal

## Atualizações futuras:
-> Cadastro completo de categorias
-> Catálogo de produtos de acordo com a categoria

## Utilização 
Criar a o arquivo (.env) e preenchê-lo de acordo com as informações abaixo

NODE_ENV = development
PORT = 5000 (no meu caso utilizei a 5001)
MONGO_URI = sua URI do MongoDb
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = client_id do paypal 

#Para instalar as dependências faça da seguinte maneira:

No diretório raiz, dê o comando npm install;
Posteriormente, acesse a pasta com os arquivos do front e realize o mesmo processo.

## Rodando seu projeto:
No diretório raiz, dê o comando 
npm run dev 

Esse comando roda tanto o front quanto o back.
O front rodará na porta 3000 e o back, geralmente roda no 5000, no meu caso, devido alguns conflitos, tive que rodar no 5001.

# Para deploy
Acesse o diretório frontend e dê o comando : npm run build

# Usuário admin padrão: 

email: admin@gmail.com 
senha: 9828
#   c a k e _ m a n i a 
 
 
