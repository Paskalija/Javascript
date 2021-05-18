//PRVA VEZBA

let person = {
firstname : 'Chloe',
lastname : 'Jordan'
};

let person2 = {
    firstname : 'Jane',
    lastname : 'Jordan'
};

let person3 = {
    firstname : 'Joe',
    lastname : 'Jordan'
};

console.log(person);
console.log(person2);
console.log(person3);

console.log('FirstName', person.firstname );
console.log('FirstName', person2.firstname);
console.log('ForstName', person3.firstname);


console.log('FirstName', person['firstname']);
console.log('FirstName', person2['firstname']);
console.log('ForstName', person3['firstname']);



//VTORA VEZBA

let people = [person, person2, person3];
people[0]['age']=24;
people[1]['age']=23;
people[2]['age']=33;

people[0].age =24;
people[1].age =23;
people[3].age =33;


//TRETA VEZBA




//CETVRTA VEZBA


let person = {
    firstname : 'Chloe',
    lastname : 'Jordan',
    age : 33
    };
    
    let person2 = {
        firstname : 'Jane',
        lastname : 'Jordan',
        age : 35
    };
    
    let person3 = {
        firstname : 'Joe',
        lastname : 'Jordan',
        age : 37
    };



//PETTA VEZBA

    let people = [person,person2,person3];


    let sum = 0;
    let godini = [33, 35, 37];
    godini.forEach(sobiranje);


// SESTA VEZBA

let prosek = (33, 35, 37) / 3;





