const person = ['Christian',23,'Ecuador']

//const [name, ,country, profession='Ministro'] = person;/**destructurar */

//console.log(profession)

const showInfo = ([name,,country]) => {
    console.log(`Lorem Impsue name ${name} \n country ${country}` );
}
showInfo(person);