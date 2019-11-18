import React from 'react'

function About() {
    return (
        <div>
            <h1>About</h1>
            <div>
            <p>Author: Jailson Nicoletti</p>
            <p>Suntech selection test</p>
            <p>Requirements:</p>
            </div>
            <div>
                <h2>
                Neste desafio você deverá:
                </h2>
                <br/><br/>
                <p>
- Desenvolver uma aplicação Web simples, utilizando React para o frontend e Java para o backend.
<br/>
- A aplicação deve exibir apenas uma listagem da entidade Users;
<br/>
- Utilizar algum framework de persitência (jpa, hibernate, mybatis, etc...);
<br/>
- Não é necessária tela de login;
<br/>
- Pode-se usar qualquer banco relacional (mysql, postgres, hsqldb...);
<br/>
- Definição da entidade Users:
<br/>
      * id (int)
      <br/>
      * username (String)
      <br/>
      * password (String)
      <br/>
      * is_enabled (boolean)
      <br/>
      * register_date (Date)
      <br/>
      * name (String)
      <br/>
      * surname (String)
      <br/>
      * email (String)
      <br/>
      * phone (String)
      <br/>
- A listagem deve ser capaz de filtrar o conteúdo pelo username, name ou email mostrando como resultado todas as colunas descritas no item anterior;
<br/><br/>
O que você deve nos entregar após a conclusão do desafio:
<br/><br/>
1) Código fonte do projeto e suas dependências
<br/>
2) Passo a passo do procedimento de importação na ferramenta de desenvolvimento e versão do Java utilizados;
<br/>
3) Pequeno descritivo explicando a estratégia de construção utilizada na concepção da solução - arquitetura e design dos componentes;
<br/>
4) Fazer auto-avaliação do que criou entre pontos fortes e a melhorar na solução.
                </p>
            </div>
        </div>
    )
}

export default About;