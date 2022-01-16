# lolDesign
Criei uma aplicação simples que faz o desejado do desafio. 

## Execução
Para executar, pode-se aderir a dois modos:
1. Utilizar docker 
2. Instalar os pacotes diretamente na máquina

### Docker
Deixei preconfigurado um dockerfile com todos os arquivos e comandos necessários, basta executar o comando no terminal em um computador que possua docker:
> docker build -t loldesign .

e, após isso:
> docker run -p 3000:3000 loldesign

Assim que o comando acima for executado, irá mostrar uma série de testes unitários que fiz em duas funções para verificar os parâmetros e, após isso, irá iniciar
um servidor que deixará disponível a página da aplicação [neste link](http://localhost:3000)

### Instalar os pacotes diretamente na máquina
Também é possível executar a aplicação instalando os pacotes diretamente na máquina, executando em uma máquina com os seguintes requisitos:
- node 16
- npm 
- jest global
tendo os requisitos supracitados concluidos, podemos iniciar a aplicação utilizando:
> npm install 

e, logo em seguida: 
> npm start
