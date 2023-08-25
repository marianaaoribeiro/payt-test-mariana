# mariana_payt


### Planejamento

##### 1 - Imagine a estrutura de componentes e arquivos que você pretende montar, comece em /src. Faça a descrição como no exemplo quando/onde achar necessário.

```
// COMPONENTES:
/src/App.vue
/src/components // Componentes do sistema
/src/components/paymentMethods  // Componentes dos métodos de pagamento
/src/components/shared  // Componentes compartilhados em arquivos
/src/components/assets // Imagens utilizadas nos componentes

// ROTAS:
/src/router/index.js // Delclaração de rotas

// SCSS:
/src/scss/variables.scss  // Declarando cores do tema

// MIXINS:
/src/shared/mixins // Funções reutilizáveis

// STORE:
/src/store // Declarando actions, states, mutations e getters do VueX

// VIEWS:
/scr/views // Páginas

// MAIN:
/scr/main // Importação de libs
```

##### 2 - Após o planejamento, por onde você costuma começar?

Começar pelas configurações iniciais, instalações e importações. Em seguida, desenvolver os componentes principais e criar as páginas e rotas.

##### 3 - Onde você imagina que está o maior grau de dificuldade dessa tarefa?

Lidar com interações do usuário, como foco em campos, exibição condicional de campos e determinar quando acionar determinados eventos.

##### 4 - Mencione alguns possíveis bugs em cada um dos requisitos aos quais você quer se atentar
##### 4.1 - Endereço
Existem CEP's específicos que não possuem endereços correspondentes. Como resultado, os campos não serão preenchidos automaticamente e é necessário que o campo permaneça editável em vez de ser definido como "disabled".

#####  4.2 - Método de Pagamento - Cartão de Crédito
A validação da bandeira do cartão de crédito pode não ser identificada corretamente devido a error digitação, nesses casos a bandeira será definida por padrão como null.

#####  4.3 - Sistema de Eventos
Os eventos podem não ser acionados nos momentos corretos, resultando em logs no console em momentos inesperados. Para disparar no momento apropriado, será implementado consoles em eventos de @focus, @input, @invalid e @change.

#####  4.4 - Outro
A API de ViaCEP pode não encontrar nenhum resultado, sendo necessário exibir uma mensagem no campo.

##### 5 - Existe algum design pattern conhecido que você aplicaria? Se sim, cite-o(s). 

Sim, o Component Pattern e o Component Pattern.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
