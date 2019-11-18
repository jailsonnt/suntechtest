# Teste suntech - User List

Aplicação desenvolvida para o processo seletivo da empresa suntech de 11/2019. Os requisitos recebidos estão abaixo:


**Neste desafio você deverá:**

- [x] Desenvolver uma aplicação Web simples, utilizando React para o frontend e Java para o backend.

- [x] A aplicação deve exibir apenas uma listagem da entidade Users;

- [x] Utilizar algum framework de persitência (jpa, hibernate, mybatis, etc...);

- [x] Não é necessária tela de login;

- [x] Pode-se usar qualquer banco relacional (mysql, postgres, hsqldb...);

- [x] Definição da entidade Users:

      * id (int)

      * username (String)

      * password (String)

      * is_enabled (boolean)

      * register_date (Date)

      * name (String)

      * surname (String)

      * email (String)

      * phone (String)

- [x] A listagem deve ser capaz de filtrar o conteúdo pelo username, name ou email mostrando como resultado todas as colunas descritas no item anterior;



**O que você deve nos entregar após a conclusão do desafio:**

1) Código fonte do projeto e suas dependências

2) Passo a passo do procedimento de importação na ferramenta de desenvolvimento e versão do Java utilizados;

3) Pequeno descritivo explicando a estratégia de construção utilizada na concepção da solução - arquitetura e design dos componentes;

4) Fazer auto-avaliação do que criou entre pontos fortes e a melhorar na solução.

Esse repositório contém o projeto do [backend](https://github.com/jailsonnt/suntechtest/tree/master/suntechtest) e do [frontend](https://github.com/jailsonnt/suntechtest/tree/master/suntechtest_front). O backend utiliza maven como gerenciador de dependências, portanto, basta importar o projeto em qualquer IDE com suporte ao maven e todas as dependências serão baixadas. O frontend utiliza npm portanto também contém todas as dependências necessárias.

Para importar o projeto do backend na IDE, será necessário uma IDE com suporte ao Maven e utilizar o **importar** referente ao maven da IDE escolhida. A pasta que deve ser escolhida para importar o backend é o subrepositório **suntechtest**.

-   O banco de dados escolhido foi o mysql mas pode ser alterado alterando as configurações em **src/main/resources/application.properties**
-   A aplicação foi configurada de forma a criar automaticamente a tabela no banco e precisa somente que seja configurado um banco existente na configuração **spring.datasource.url** , portanto o primeiro passo deve ser **criar o banco** e o segundo **configurar a url username e password no arquivo application.properties**

Para importar o projeto do frontend basta **abrir** a pasta **suntechtest_front**.

Para executar o projeto do frontend via linha de comando, basta executar os comandos **npm ci** e **npm start** na pasta do front logo após o git clone do repositório.

Para executar o projeto do backend via linha de comando, basta executar o comando **mvn install** na pasta do backend logo após o git clone do repositório, depois acessar a subpasta **target** criada, colar o arquivo editado com suas configurações de application.properties dentro de target e executar o comando **java -jar suntechteste-0.0.1.jar**.

O backend foi feito utilizando o framework spring boot. A escolha do framework foi feita pois ele oferece várias funcionalidades prontas e bem testadas  que aceleram o desenvolvimento. Além dele foi utilizado o lombok como para gerar um código menos extenso, sem perder nenhuma funcionalidade.

Arquiteturalmente foram utilizados os padrões Repositório e DAO na camada de persistência separando totalmente todas as camadas de software. Vários recursos do spring foram utilizados de forma a validar objetos JSON e fornecer respostas adequadas para a API. A camada de serviço é bastante simples por ser um CRUD cuja única lógica diferente necessária ficou na consulta por filtro, essa lógica foi implementada na consulta dentro da camada de acesso a dados. A opção de paginação foi tomada como boa prática para evitar grande massa de dados sendo transportada de uma vez, oque pode gerar experiências ruins para o usuário. Além disso o objeto page fornece todas as opções necessárias para o frontend ser capaz de paginar a lista.
A Interface na camada de serviço foi feita de forma a descrever as operações básicas de CRUD, o uso dessa interface no construtor do UserResource permite alteração transparente na camada de serviço e criação de novas implementações estendendo ou alterando a forma como o serviço se comporta, por exemplo, escrevendo um mock para utilização em testes unitários. Essas decisões também tornam a aplicação aderente aos princípios SOLID.
Todas essas decisões tornaram o código fácil de ser compreendido e de dar manutenção e extensão.

No front end busquei uma implementação simples e eficiente, para garantir com segurança que os requisitos fossem implementados dentro do tempo necessário. Essa preocupação com gerenciamento de riscos foi tomada levando-se em conta o fato de que essa foi a minha primeira utilização do react e o tempo de desenvolvimento foi dividido entre aprendizado e execução.

Como melhoria nesse projeto eu continuaria a implementação utilizando o padrão Decorator na camada de serviços e Endpoint para separar os tratamentos de erro e validações da implementação em si.
Faria a implementação de testes automatizados unitários e de integração.
No front end, poderia utilizar outras bibliotecas em conjunto com React, separaria o form User da lista de usuários com um botão fazendo collapse do form , finalizaria a implementação das operações delete e edit, utilizar a biblioteca de componentes como primereact para garantir uma aparência mais *profissional*, além disso algumas melhoras de usabilidade como inserir os filtros no título das colunas, melhora no componente de paginação criado.   

