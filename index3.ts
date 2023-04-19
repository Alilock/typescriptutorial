import axios, { Axios, AxiosResponse } from "axios"


type Address = {
    street: string,
    city: string,
    region: string,
    postalCode: string,
    country: string,
    phone: string
}
type Customer = {
    id: string,
    companyName: string,
    contactName: string,
    contactTitle: string,
    address: Address
}

async function getLondonCustomers() {
    let datas: AxiosResponse<Customer[]> = await axios.get('https://northwind.vercel.app/api/customers')
    let filtered: Customer[] = datas.data.filter(c => c.address?.city === 'London')
    filtered.map(f => console.log(f.address))

}

async function getNullCount() {
    let datas: Customer[] = (await axios.get('https://northwind.vercel.app/api/customers')).data

    const count = datas.filter(c => c.address?.region == 'NULL').length
    console.log(count);



}
async function Main() {
    // await getLondonCustomers()
    await getNullCount()
}
Main()