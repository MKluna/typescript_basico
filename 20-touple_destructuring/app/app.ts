let persona : [string[],number,string,string[]];
persona = [["Luis", "Matias"], 24, "masculino",["musica","lectura"]];

let [, , , intereses] = persona;
console.log(intereses);
let [item1,item2] = intereses;
console.log(item1,item2);


