const names = ['Christian','Paul','Jennifer','Juliana'];
const characters_number = names.map(name=>
    `${name} have ${name.length} characters`
    /**cuando utilizas funciones flecha puedes evitar el return */
);

console.log(characters_number)