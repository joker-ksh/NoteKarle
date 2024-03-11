let users = {
    '01' : 'Aman',
    '03' : 'Akshat',
    '02' : 'tejas',
    '04' : 'Deep'
}
users['05'] = 'Rahul';
// console.log(users);
// Object.keys(users).forEach(function(key) {
//     console.log(key, users[key]);
// })

// console.log(Object.values(users));

console.log(Object.entries(users));

let keyvalue = Object.keys(users);
console.log(keyvalue);

let names = Object.values(users);
console.log(names);

let combined = keyvalue + names;
// console.log((combined));
combined = Array(combined);

combined.forEach(function(item) {
    console.log(item);
})