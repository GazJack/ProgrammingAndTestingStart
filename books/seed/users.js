const md5 = require('md5');
const fs = require('node:fs');
console.log('Seeding users...');
 
const users = [
    { name: 'Briedis', psw: md5('123') },
    { name: 'Barsukas', psw: md5('123') },
    { name: 'Bebras', psw: md5('123') }
];
 
fs.writeFileSync('../data/users.json', JSON.stringify(users));
 