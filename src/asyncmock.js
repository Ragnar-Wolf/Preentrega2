const productos = [
    { nombre: "PC INTEL CELERON", precio: 145000, id: "4", img: "../img/04.jpg", idCat: "2" },
    { nombre: "NOTEBOOK ASUS ", precio: 289990, id: "1", img: "../img/01.jpg", idCat: "2" },
    { nombre: "NOTEBOOK GIGABYTE S", precio: 750400, id: "2", img: "../img/02.jpg", idCat: "2" },
    { nombre: "PC AMD RYZEN 3 8GB", precio: 170600, id: "3", img: "../img/03.jpg", idCat: "2" },
    { nombre: "DDR4 16GB VIPER", precio: 35000, id: "5", img: "../img/05.jpg", idCat: "3" },
    { nombre: "AAMD RYZEN 5 5500", precio: 52900, id: "6", img: "../img/06.jpg", idCat: "3" },
    { nombre: "MOTHERBOARD MSI PLUS", precio: 62000, id: "7", img: "../img/07.jpg", idCat: "3" },
    { nombre: "INTEL I3 10THGEN", precio: 34500, id: "8", img: "../img/08.jpg", idCat: "3" },
    { nombre: "AURICULAR RED DRAGON", precio: 16500, id: "9", img: "../img/09.jpg", idCat: "4" },
    { nombre: "MICROFONO HYPERX", precio: 37000, id: "10", img: "../img/10.jpg", idCat: "4" },
    { nombre: "MOUSE GAME PRO GM-01", precio: 4609, id: "11", img: "../img/11.jpg", idCat: "4" },
    { nombre: "TECLADO PATRIOT VIPER", precio: 17309, id: "12", img: "../img/12.jpg", idCat: "4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}