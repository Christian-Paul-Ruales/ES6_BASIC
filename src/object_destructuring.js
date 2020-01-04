const user = {
    name: 'Chris',
    email: 'theruales@example.com',
    age: 23,
    password: 'theEcuatorianRuales'
}
//const {password,profession='doesn\'t exist'} = user;

//console.log(`${password} - ${profession}`);

const showInf = ( {name,university = 'UPS'} ) => console.log(`${name} is student of ${university}`)

showInf(user);