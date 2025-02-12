- Documentação do Projeto Playwright com TypeScript

Visão Geral
Este projeto utiliza o Playwright com TypeScript para automatizar testes de interface do usuário (UI) no site SauceDemo. O foco é testar funcionalidades relacionadas a compras, remoção de itens do carrinho e logout.

- Estrutura do Projeto
Dependências
Playwright: Biblioteca de automação de testes.

TypeScript: Linguagem utilizada para escrever os testes.

Node.js: Ambiente de execução.

- Instalação
Instale o Node.js: Node.js Official Website.

Instale as dependências do projeto:


npm install @playwright/test
npm install typescript --save-dev
npm install -g yarn 
yarn add dotenv  
npm install --save--dev cross-env 

- Execução dos Testes
Para executar os testes, utilize o seguinte comando:


npx playwright test
npx playwright test --ui
npx cross-env ENVIRONMENT=DEV yarn playwright test --ui
npx cross-env ENVIRONMENT=DEV yarn playwright test 

- Descrição dos Testes
Suite de Testes: CN001 - Realizando Compras
Esta suite de testes cobre três cenários principais:

CT001 - Realizando uma compra.

CT002 - Removendo uma compra do carrinho.

CT003 - Acessando Menu e realizando logout.

Teste: CN001 - CT001 - Realizando uma compra
Objetivo
Verificar se um usuário consegue realizar uma compra completa, desde o login até a finalização do pedido.

Passos:
Navegar para a página de login.

Preencher o formulário de login com as credenciais:

Usuário: visual_user

Senha: secret_sauce

Clicar no botão de login.

Adicionar o produto Sauce Labs Bolt T-Shirt ao carrinho.

Navegar para o carrinho.

Verificar se o produto está visível no carrinho.

Iniciar o checkout.

Preencher os detalhes do checkout:

Nome: Teste

Sobrenome: Teste

CEP: 8000100

Clicar em "Continue".

Verificar se o produto está visível na tela de revisão.

Finalizar a compra.

Verificar se a mensagem "Thank you for your order!" está visível.

Tratamento de Erros:
Em caso de erro, o teste será marcado como falho e o erro será registrado no console.

Teste: CN001 - CT002 - Removendo uma compra do carrinho
Objetivo
Verificar se um usuário consegue remover um item do carrinho.

Passos:
Navegar para a página de login.

Preencher o formulário de login com as credenciais:

Usuário: visual_user

Senha: secret_sauce

Clicar no botão de login.

Adicionar o produto Sauce Labs Bolt T-Shirt ao carrinho.

Navegar para o carrinho.

Verificar se o produto está visível no carrinho.

Remover o produto do carrinho.

Clicar em "Continue Shopping".

Verificar se o botão "Add to cart" está visível para o produto.

Tratamento de Erros:
Em caso de erro, o teste será marcado como falho e o erro será registrado no console.

Teste: CN001 - CT003 - Acessando Menu e realizando logout
Objetivo
Verificar se um usuário consegue acessar o menu e realizar logout.

Passos:
Navegar para a página de login.

Preencher o formulário de login com as credenciais:

Usuário: visual_user

Senha: secret_sauce

Clicar no botão de login.

Clicar no botão "Open Menu".

Clicar em "Logout".

Verificar se a página de login é exibida (verificando a presença do texto "Swag Labs").

Tratamento de Erros:
Em caso de erro, o teste será marcado como falho e o erro será registrado no console.

Estrutura do Código
Variáveis Globais
adicionaProduto: Nome do produto utilizado nos testes ("Sauce Labs Bolt T-Shirt").

usuario: Nome de usuário para login ("visual_user").

senha: Senha para login ("secret_sauce").

Blocos try-catch
Cada teste possui um bloco try-catch para capturar e tratar erros. Em caso de falha:

O erro é registrado no console.

O teste é marcado como falho usando throw error.

Melhorias Futuras
Page Objects:

Criar classes para representar as páginas (LoginPage, InventoryPage, CartPage, etc.) e encapsular a lógica de interação com os elementos.

Seletores Melhores:

Substituir seletores XPath por seletores CSS ou atributos como data-testid para melhorar a legibilidade e manutenção.

Testes Adicionais:

Adicionar testes para outros cenários, como:

Login com credenciais inválidas.

Adicionar múltiplos produtos ao carrinho.

Verificar o valor total da compra.

- Relatórios:

Configurar relatórios HTML para visualizar os resultados dos testes de forma mais amigável.

Exemplo de Execução
Comando para Executar Testes

npx playwright test
Comando para Gerar Relatório HTML

npx playwright show-report
Conclusão
- Este projeto é um exemplo de como automatizar testes de UI usando Playwright e TypeScript. A estrutura atual cobre cenários básicos de compra, remoção de itens do carrinho e logout. Com as melhorias sugeridas, o projeto pode se tornar mais robusto e escalável.
