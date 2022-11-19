let number1: number; /*tipa que posso utilizar a variavel somente em números*/
let text: string; /*tipa que posso utilizar a variavel somente em strings*/
let bol: boolean; /*tipa que posso utilizar a variavel somente em boolean*/
let data: Date; /*tipa que posso utilizar a variavel somente em datas*/
let sim: symbol; /**/
number1 = 2;

console.log(number1);

interface person {
  name: string;
  age?:
    | number
    | undefined /*assim precisa ter age porém pode ser vazio, com o ? ela acaba não sendo necessária*/;
} /*Sempre usar interface no back por ser algo mais padrão e universal */

type Person = {
  name: string;
  age: number;
  code: () => string;
};

//INTERFACE CRIA UM OBJETO PARA SER UTILIZADO DE "PADRÃO", COMO POR EXEMPLO DECLAREI UM TIPO PERSON QUE PRECISA TER NAME COMO STRING E AGE COMO NUMBER, APÓS ISSO PERSON1 FOI DECLARADO COMO SENDO DO TIPO PERSON, ASSIM PERSON1 PRECISA TER AS TIPAGENS INFORMADAS EM PERSON
let person1: Person;

person1 = {
  age: 23,
  name: "Carlos",
  code: function () {
    return "Coding";
  },
};

class Character implements Person {
  name: string;
  age: number;
  code: () => string;
}

function test(person: Person): string {
  return "Olá" + person.name;
}
test(person1);
