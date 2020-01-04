function registerUser(name, country='NO COUNTRY', email, phone='NO PHONE'){
    return `Name: ${name} , country: ${country}, email: ${email}, phone: ${phone}`;
}

console.log(registerUser('Christian',undefined,'example@example.com','12345678'));