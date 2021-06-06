
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => { 
        console.log(response);
        return response.json();
    })
    .then(data => {
        
        console.log(data);
    })
    .catch(error => {
        console.error('error', error);
    });

    
let user = {
    "id": 7,
    "name": "Paskalija Koneska",
    "username": "paskalija",
    "email": "paskalija@gmail.com",
    "address": {
        "street": "Jane Sandanski",
        "suite": "72",
        "city": "Skopje",
        "zipcode": "1000",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "070 999 679",
    "website": "disnova.mk",
    "company": {
        "name": "Dis Nova",
        "catchPhrase": "Accounting firm",
        "bs": "Accounting and auditing"
    }
}
fetch('https://jsonplaceholder.typicode.com/users/7', {
    method: 'PUT', 
    body: JSON.stringify({
        body: user
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => { 
    return response.json();
})
.then(data => {
    console.log('put');
    console.log(data);
})
.catch(error => {
    console.error('error', error);
});


let newUser = {
    "id": 3,
    "name": "Kiril Jordanov",
    "username": "Kire",
    "email": "jordanov.k@outlook.com",
    "address": {
        "street": "Franjo Kluz",
        "suite": "17",
        "city": "Skopje",
        "zipcode": "1000",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "074 203 753",
    "website": "disnova.mk",
    "company": {
        "name": "Dis Nova",
        "catchPhrase": "Accounting firm",
        "bs": "Accounting and auditing"
    }
}
fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
        body: newUser
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => { 
    return response.json();
})
.then(data => {
    console.log('post');
    console.log(data);
})
.catch(error => {
    console.error('error', error);
});


fetch('https://jsonplaceholder.typicode.com/users/11', {
    method: 'DELETE'
})
.then(response => { 
    return response.json();
})
.then(data => {
    console.log('delete');
    console.log(data);
})
.catch(error => {
    console.error('error', error);
});