import axios from 'axios'
import readline from 'readline-sync'
let sa = readline.question('sa')
type User = {
    name: string,
    age: number,
    isAdult?: boolean
}


let user1: User = {
    name: 'Nese',
    age: 18,
    isAdult: false
}
let user2: User = {
    name: 'Nese',
    age: 18,
    isAdult: false
}
let user3: User = {
    name: 'Nese',
    age: 18,
    isAdult: false
}

let users: User[] = []
users.push(user1)
users.push(user2)
users.push(user3)
let users2 = ['Ali', 'Bla', "Bla"]
function ListUser(users: User[]) {
    users.map(u => {
        console.log(u.name);

    })
}
ListUser(users)

type Student = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Adress,
    phone: string,
    website: string,
    company: Company
}
type Company = {
    name: string,
    catchPhrase: string,
    bs: string

}
type Adress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}
type Geo = {
    lat: string,
    lng: string
}


let students: Student[] = []

async function getAllStudent(): Promise<Student[]> {

    let datas = (await axios.get("https://jsonplaceholder.typicode.com/users"))
    const students: Student[] = datas.data
    console.log(students[0].address.geo);
    return students

}

async function Main() {
    await getAllStudent()
}

Main()

