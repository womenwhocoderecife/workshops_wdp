# Workshop Javascript

> [Acesse aqui os slides apresentados no workshop de Javascript](https://github.com/womenwhocoderecife/workshops_wdp/blob/master/javascript/Meetup%20Javascript.pdf)

## Abaixo estão os resultados dos desafios aplicados no workshop de Javascript

1. Cálculo de idade:
   - Declara o ano atual para fazer o cálculo
   - Pede que o usuário digite o ano em que nasceu
   - Calcula a idade do usuário e armazena na variável idade
   - Mostra ao usuário a idade que ele possui
  ```JS
    const year = 2019
    let born =  prompt('When you born? ');
    const age = year - born

    alert('You are ' + age + ' years old');
  ```
2. Manipulando um Array:
   - Criar um array com 5 elementos
      ```js
        let goddesses = ["Lea Verou", "Una Kravets ", "Sarah Drasner"]
        // ["Lea Verou", "Una Kravets ", "Sarah Drasner"]
      ```
   - Adicionar itens no final e no início do array
      ```js
        goddesses.push('Sara Soueidan')
        // ["Lea Verou", "Una Kravets ", "Sarah Drasner", "Sara Soueidan"]

        goddesses.unshift('Rachel Andrew')
        // ["Rachel Andrew", "Lea Verou", "Una Kravets ", "Sarah Drasner", "Sara Soueidan"]
      ```
   - Remover itens no final e no início do array 
      ```js
        goddesses.pop()
        // ["Rachel Andrew", "Lea Verou", "Una Kravets ", "Sarah Drasner"]

        goddesses.shift()
        // ["Lea Verou", "Una Kravets ", "Sarah Drasner"]
      ```
   - Qual o tamanho do seu array?
      ```js
        goddesses.length
        // 3
      ```
   - Mudar a ordem do array
      ```js
        goddesses.reverse()
        // ["Sarah Drasner", "Una Kravets ", "Lea Verou"]
      ```
   - Criar um novo array
      ```js
        let toFollow = ["Rachel Andrew", "Sara Soueidan"]
        // ["Rachel Andrew", "Sara Soueidan"]
      ```
   - Criar um terceiro array com os valores dos dois arrays que você criou inicialmente
      ```js
        /* ES5*/
        let following = goddesses.concat(toFollow)
        // ["Rachel Andrew", "Sara Soueidan"]

        /* ES6*/
        let following_ = [...goddesses, ...toFollow]
        // ["Rachel Andrew", "Sara Soueidan"]
      ```
   - Remover elementos do array usando slice() e splice()
      ```js
      /* slice não altera o Array original*/
        following.slice(2, 3) 
        // ["Lea Verou"]
        // ["Sarah Drasner", "Una Kravets ", "Lea Verou", "Rachel Andrew", "Sara Soueidan"]

        /* splice altera o Array original*/
        following.splice(2, 2, "HJ Chen", "Monica Dinculescu")
        // ["Lea Verou", "Rachel Andrew"]
        // ["Sarah Drasner", "Una Kravets ", "HJ Chen", "Monica Dinculescu", "Sara Soueidan"]
      ```
3. Criar um Objeto para guardar os dados de um projeto:
    - O nome é uma string
    - O time é um array de nome das pessoas do time
    - A data de entrega é uma string
    - Adicione mais uma pessoa no time
    - Exclua a uma pessoa do time
    - Altere o nome do projeto
    ```js
      let project = {
        name: "womenDevProject",
        team: ["Ada Lovelace", "Grace Hopper", "Carol Shaw", "Margaret Hamilton"],
        showCase: "November/15/2019",
      }
      // {name: "womenDevProject", team: Array(4), showCase: "November/15/2019"}

      project.team.push("Frances Allen")
      // {name: "womenDevProject", team: Array(5), showCase: "November/15/2019"}

      project.team.pop()
      // "Frances Allen"
      // {name: "womenDevProject", team: Array(4), showCase: "November/15/2019"}

      project.name = "womenDevProjects"
      // {name: "womenDevProjects", team: Array(4), showCase: "November/15/2019"}
    ```
4. Média do aluno: 
    - Criar duas constantes com valores que representam notas
    - Calcular a média e armazenar em uma constante
    - Se a média for maior ou igual a sete, mostrar “Aprovado”
    - Senão mostrar “Reprovado”
    - *** bônus: se  a média for igual a dez, mostrar “Aprovado, top da balada”
    ```js
      const gradeOne = 10;
      const gradeTwo = 8;
      const average = (gradeOne + gradeTwo) / 2

      if(average === 10) {
        console.log("Aprovado, top da balada");
      } else if( average >= 7) {
        console.log("Aprovado"); 
      } else {
        console.log("Reprovado");
      }
      // Aprovado
    ```
5. Número par: 
    - Criar uma instrução de repetição de vai de 1 até 100
    - Verifique se o número atual é par
    - Se for par, mostre o número
    - Use o operador Modulus (%) para verificar o resto da divisão
    ```js
      for( let count= 1; count <= 100; count++) {
        if( count % 2 === 0) {
          console.log(count)
        }
      }
    ``` 


## Links Importantes:
- [JavaScript Variables: The Beginner's Guide](https://dev.to/howtocodejs/javascript-variables-the-beginners-guide-5eid)
- [Declaring a Winner 🥇 Between JavaScript's var, let and const](https://love2dev.com/blog/javaScript-var-let-const/)
- [JavaScript brief history and ECMAScript(ES6,ES7,ES8,ES9) features](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4)
- [What's new in ECMAScript 2019 (ES2019) / ES10](https://alligator.io/js/es2019/)
- [JavaScript Curso 100% online e gratuito](https://rocketseat.com.br/starter/curso-gratuito-javascript)
- [The 10 Best JavaScript ES6 Features](https://www.lifewire.com/best-javascript-es6-features-4579821)
- [Simplify your JavaScript – Use .map(), .reduce(), and .filter()](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)
