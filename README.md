## Setup inicial

Todo passo do setup inicial a partir do "nodejs" deve ser feito num terminal de linux. O WSL2 é recomendado caso seja usuário de windows.
 
### WSl2
Abra uma aba do powershell, digite o comando abaixo e siga os passos de instalação:

wsl --install -d ubuntu

### Nodejs

1. curl -fsSL https://fnm.vercel.app/install | bash
2. source ~/.bashrc
3. fnm use --install-if-missing 22

### Yarn

1. npm install --global yarn

## Scripts disponiveis

No diretorio raiz do projeto, você pode rodar os seguintes comandos:

### `yarn start`

Abre o app em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o estado atual do app.

### `yarn test`

Roda a interface de testes, mostrando erros no app sem a necessidade de aguardar o processo de compilação do "yarn start"\
Para mais informações: [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `yarn build`

Compila o app na pasta `build` para produção. Esse passo deve ser feito antes de testar ao app num dispositivo mobile.\

## Como rodar o app no celular
WIP

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

