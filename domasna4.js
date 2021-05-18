//PRVA VEZBA

let covek = {
firstname : 'Chloe',
lastname : 'Jordan'
};

let covek2 = {
    firstname : 'Jane',
    lastname : 'Jordan'
};

let covek3 = {
    firstname : 'Joe',
    lastname : 'Jordan'
};

console.log(covek);
console.log(covek2);
console.log(covek3);

console.log('FirstName', covek.firstname );
console.log('FirstName', covek2.firstname);
console.log('ForstName', covek3.firstname);


console.log('FirstName', covek['firstname']);
console.log('FirstName', covek2['firstname']);
console.log('ForstName', covek3['firstname']);



//VTORA VEZBA

let luge = [covek, covek2, covek3];
luge[0]['age']=24;
luge[1]['age']=23;
luge[2]['age']=33;

luge[0].age =24;
luge[1].age =23;
luge[3].age =33;


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





