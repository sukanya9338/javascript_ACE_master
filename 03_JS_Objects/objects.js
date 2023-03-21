let mobile = {
    brand : "Apple",
    color : "Silver",
    price : "75000"
};
console.log(mobile);
console.log(`Brand : ${mobile.brand}`);

// dot , []
console.log(mobile.color); // silver
console.log(mobile['color']); // silver

// dynamic props
let propName = "brand";
console.log(mobile[propName]);

// nested Object
let user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};
console.log(user);
console.log(user.address);
console.log(`Lat : ${user.address.geo.lat} Lng : ${user.address.geo.lng}`);

// de-structuring
let {lat, lng} = user.address.geo;
console.log(`Lat : ${lat} Lng : ${lng}`);

//
let {city , street} = user.address;
console.log(`City : ${city} Street : ${street}`);


// JSON
let person = {
    name : "Naveen",
    age : 33,
    designation : "Tech Lead"
};
console.log(person);
let personStr = JSON.stringify(person);
console.log(personStr);

// string -> object
let personObj = JSON.parse(personStr);
console.log(personObj);






