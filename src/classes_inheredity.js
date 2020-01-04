/** organizar codigo*/
class User {
    constructor(NAME,AGE){
        this.name = NAME,
        this.age =AGE
        /*
        this.name = 'Christian Paul',
        this.age = 23*/

    }

    greet(word){
        return `<br>Hi ${word}`;
    }
    toString(){
        return `[${this.name},${this.age}]`;
    }
} 


/** INstanciamos la clase */
const christian = new User('Christian',23);
document.write(christian.name);

const elver = new User('Elver', 54);
document.write(`<br>Name: ${elver.name},  age:${elver.age}`)

document.write(elver.greet('savandija'));
document.write(`<br/><hr/> ${elver.toString()}`);

/**Herencia */
class student extends User{
    constructor(name,age,profession){
        super(name,age)
        this.profession = profession
    }
    toString(){
        return `[${this.name},${this.age},${this.profession}]`;

    }
}
const the_Student = new student("Student1",21,'developer')
document.write(`<br/><hr/> ${the_Student.toString()}`);
