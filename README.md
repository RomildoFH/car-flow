## Car Flow
Este projeto foi elaborador com a finalidade de participação do processo seletivo para desenvolvedor front-end da empresa <strong>Ultracar</strong>

## DESAFIO PROPOSTO
Determinada oficina necessita de um processo para
execução de serviço em veículos.
Como pessoa responsável pelo desenvolvimento, você
montará um fluxo e apresentará a sua solução
desenvolvida usando a construção de telas.
A ideia é um cliente chegar em uma oficina, onde um
técnico fará:
- Identificação do cliente
- Via QRCode lido visualizará os dados do
cliente/veículo;
- Será inserido o nome da pessoa que será responsável
pelo serviço a ser executado no veículo
- Se envolver peças será selecionada a peça, onde
automaticamente será lido o valor da peça
- Ao iniciar o serviço (confirmação) deverá ser
administrado internamente a data/hora do inicio e a
data/inicio do termino da execução do serviço.

## Utilização

### Uso Web
Para utilizar essa aplicação em seu browser, acesse o link <a href="https://car-flow-git-main-romildofh.vercel.app/" target= "_blank">Car Flow</a>.
A aplicação não conta com banco de dados implementados, então os dados são estáticos e estão sendo renderizados na tela através de mocks. Ainda que não possua banco de dados, o usuário poderá interagir com a aplicação em todas as suas funcionalidades, porém ao deixar a página, os dados serão perdidos.

### Uso Local
Para utilizar esse projeto localmente, você deverá realizar o clone do repositório atrés do comando:
```
git clone git@github.com:RomildoFH/car-flow.git
```
Após isto, instale as dependências do projeto através do comando (assegure-se de estar na root do projeto):
```
npm install
```
Dependências instaladas, podemos rodar a aplicação através do comando:
```
npm start
```
Esse comando abrirá uma nova aba em seu navegador web, e você poderá fazer uso da aplicação (sem back-end).

## Melhorias futuras
<ul>
  <li>Implementar back-end para gestão das informações inseridas no site</li>
  <li>Desenvolver testes de integração e unitários para assegurar o correto retorno e renderização do código</li>
  <li>Estilização para dispositivos mobile</li>
  <li>Validação de dados através da geração de tokens que possam ser cryptografados para armazenar dados</li>
  <li>Criação de filtros diversos, tais como, filtros de data, peças, serviços, status e outros nas telas de ordem de serviço e relatórios</li>
  <li>Implementação de lógica para exibição exclusiva de peças compatíveis com o veículo que está sendo utilizado para entrada da ordem de serviço</li>
</ul>

## Dificuldades na elaboração do projeto
<ul>
  <li>Dificuldades en consciliar as rotas da aplicação com o github pages</li>
  <li>Levantamento de informações compatíveis com o projeto</li>
  <li>Realizar a "gestão" dos dados através de mocks e não de banco de dados ou APIs que pudessem trazer segurança e praticidade</li>
  <li>Prazo curto para desenvolvimento</li>
</ul>
