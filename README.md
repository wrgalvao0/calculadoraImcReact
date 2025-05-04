# Calculadora de IMC com React

Este projeto é uma **Calculadora de IMC (Índice de Massa Corporal)** desenvolvida utilizando **React** e **Vite**. Ele permite que os usuários insiram sua altura e peso para calcular o IMC e exibe a classificação correspondente (como Magreza, Normal, Sobrepeso, etc.). A interface é simples, responsiva e estilizada com CSS.

## Funcionalidades

- **Cálculo do IMC**: O usuário insere sua altura (em metros) e peso (em kg), e o IMC é calculado automaticamente.
- **Classificação do IMC**: O resultado inclui a classificação do IMC (Magreza, Normal, Sobrepeso, Obesidade, etc.).
- **Tabela de Referência**: Uma tabela com as faixas de classificação do IMC é exibida para consulta.
- **Botão de Limpar**: Permite redefinir os campos de entrada.
- **Botão de Voltar**: Retorna à tela de cálculo após visualizar os resultados.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **CSS**: Estilização personalizada para os componentes.

## Estrutura do Projeto

- **`src/components/Calculadora.jsx`**: Componente principal para entrada de dados e cálculo do IMC.
- **`src/components/TabelaResultado.jsx`**: Componente para exibição do resultado e tabela de classificações.
- **`src/components/Button.jsx`**: Componente reutilizável para botões.
- **`src/App.jsx`**: Gerencia a alternância entre os componentes de cálculo e resultado.

## Como Executar

1. Clone o repositório:

   git clone <url-do-repositorio>
   
2. Instale as dependências:
   
   npm install

3. Inicie o servidor de desenvolvimento:
   
   npm run dev

4. Acesse a aplicação no navegador em: `http://localhost:5173`.


