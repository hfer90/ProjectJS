import monstera from "../img/planta-monstera.jpg"
import gloriosum from "../img/planta-gloriosum.jpg"
import verrucosum from "../img/planta-verrucosum.jpg"

const stock = [
    {
        nombre: 'Mon',
        id: '01',
        desc: 'Monstera Deliciosa albo variegada var Borsigiana',
        precio: 8000,
        img: monstera,
        stock: 5,
        category:'mon'
    },
    {
        nombre: 'Glori',
        id: '02',
        desc: 'Philodendron Gloriosum Regular Form',
        precio: 6000,
        img: gloriosum,
        stock: 5,
        category:'glor'
    },
    {
        nombre: 'Verru',
        id: '03',
        desc: 'Philodendron Verrucosum',
        precio: 6000,
        img: verrucosum,
        stock: 5,
        category:'verr'
    },   
]


export const getProducts = new Promise ((resolve, reject) =>{
    let condition = true
    if(condition){  
        setTimeout (()=>{
            resolve(stock)
       }, 2000)
    }else{
        reject('algo anda mal')
    }
    })