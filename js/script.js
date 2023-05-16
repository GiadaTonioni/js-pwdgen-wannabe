let name = prompt ('come ti chiami?');
console.log(name);

let surname = prompt ('qual è il tuo cognome?');
console.log(surname);

let color = prompt ('qual è il tuo colore preferito?');
console.log(color);

let num = 21;
console.log(num)

let pass = name + surname + color + num;
console.log(pass)

document.getElementById('password').innerHTML = `${pass}`
