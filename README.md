# 🔗 Ordem das requisições
-----------------------
> Importar para dentro do Insomnia o arquivo **requests.json** que está disponível em docs.
1. Criar usuário.
    - Endpoint: Users => Create User

2. Iniciar uma sessão de login e copiar o `token` na resposta da requisição.
    - Endpoint: Login/Authentication => Session

3. Agora antes de consultar um cep, adicione o token copiado anteriormente no Bearer Token do endpoint: **Consult Zip Code**, somente após isso consultar o cep.
    - Endpoint: Via Cep => Consult Zip Code
    > 🚨 O token é valido por 8 minutos, após esse tempo é necessário acessar o Endpoint: Refresh Token.

## ✨ Refresh Token
Para fazer o refresh token e continuar logado, vai precisar copiar o `refresh_token` que foi gerado quando iniciou uma sessão de login, esta informação deve estar na resposta da requisição. Após copiar esta informação, siga os passos abaixo:
1. Adicionar/substituir o `refresh_token` no campo `token`.
  ```
  {
    "token": "ADICIONAR AQUI"
  }
  ```
2. Após isso basta executar o endpoint.

O retorno desta requisição irá fornecer um novo `refresh_token` e `token`. Basta então copiar o `token` e adicionar o token copiado em Bearer Token, do mesmo jeito que foi feito no passo 3.