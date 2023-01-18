const person = {
    name:'Tony',
    age: 32,
    pass: 'Iroman',
}

const { name, age, pass} = person;

console.log(name, age, pass);


const returnPerson = ({name})=>{
    return(
        console.log(name)
    )
}

returnPerson(person) 
