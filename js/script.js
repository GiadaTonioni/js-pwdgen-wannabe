//RICHIESTA NOME
let name = prompt ('come ti chiami?');
//console.log(name);

//RICHIESTA COGNOME
let surname = prompt ('qual è il tuo cognome?');
//console.log(surname);

//RICHIESTA COLORE
let color = prompt ('qual è il tuo colore preferito?');
//console.log(color);

//AGGIUNTA NUMERO
let num = 21;
//console.log(num)

//UNIONE ELEMENTI
let pass = name + surname + color + num;
//console.log(pass)

//PASSWORD RISULTANTE
document.getElementById('password').innerHTML = `${pass}`
