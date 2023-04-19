var word = 'Hello';
word = 'World';
// let names: string[] = ['Ali']
// names.push('Rashad')
// names.push(32)
var mixed = ['Ali'];
var person = {
    name: "ali",
    age: 32
};
var obj;
obj = {
    name: "ali",
    age: 24,
    isAdult: true
};
var user1 = {
    name: 'Nese',
    age: 18,
    isAdult: false
};
var user2 = {
    name: 'Nese',
    age: 18,
    isAdult: false
};
var user3 = {
    name: 'Nese',
    age: 18,
    isAdult: false
};
var users = [];
users.push(user1);
users.push(user2);
users.push(user3);
var users2 = ['Ali', 'Bla', "Bla"];
function ListUser(users) {
    users.map(function (u) {
        console.log(u.name);
    });
}
ListUser(users);
