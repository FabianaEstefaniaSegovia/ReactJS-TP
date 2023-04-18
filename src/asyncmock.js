const products = [
    {nombre: "Jarrón de Cerámica", precio: 4350, id: "1", img: "../img/jarron-ceramica.webp", idCat:"1", detalle: "Floreros Nórdicos - Texturados Simil Piedra.  Es un material ECO AMIGABLE, de origen 100% vegetal. Poseen una capa de pintura texturada", stock: 30},
    {nombre: "Alfombra Soft", precio: 7560, id: "2", img: "../img/Alfombra-rectangular-soft.jpeg", idCat:"2", detalle: "Alfombra de pelo largo y textura mullida, nuestra colección Soft está confeccionada magistralmente con densos hilos que resaltan por su brillo y suavidad al tacto. De fácil mantenimiento y completamente lavable.", stock: 10},
    {nombre: "Alfombra Boho", precio: 5500, id: "3", img: "../img/alfombra-redonda-boho.jpeg", idCat:"2", detalle: "Alfombra redonda importada de Turquía, material 100% Polyester. Tiene una muy buena resistencia a las manchas, de fácil mantenimiento", stock: 23},
    {nombre: "Alfombra XXL", precio: 12650, id: "4", img: "../img/alfombra-xxl.jpeg", idCat:"2", detalle: "Alfombra de 250X300, material 100% polyester. Confeccionadas a mano con hilos de polipropileno finamente hilados, se sienten suaves debajo de los pies y se adaptan fácilmente al uso diario.", stock: 25},
    {nombre: "Cuadro HOME", precio: 10198, id: "5", img: "../img/cuadro-home.jpeg", idCat:"3", detalle: "Cuadro decorativo para pared, ideal para decoración del hogar, 5 unidades, impresión en lienzo, sin marco, para decoración del hogar.", stock: 17},
    {nombre: "Combo 4 Cuadros", precio: 15398, id: "6", img: "../img/cuadros-combo.webp", idCat:"3", detalle: "Combo de 4 cuadros. Incluye lámina impresa de alto gramaje, marco tipo cajón de madera marupá, vidrio 2mm y accesorios para colgar.", stock: 10},
    {nombre: "Cuadros Nordicos", precio: 9998, id: "7", img: "../img/Cuadros-nordicos.webp", idCat:"3", detalle: "Cuadros impresos listos para colgar. Se limpian con plumero o paño húmedo sin presionar la tela. Calidad de imagen HD verificadas una por una para su tranquilidad. Bastidores de madera de 2x3.", stock: 19},
    {nombre: "Espejo Redondo", precio: 13200, id: "8", img: "../img/espejo-redondo.webp", idCat:"1", detalle: "Espejo redondo decorativo confeccionado en rattan.Medidas: 58 cm diámetro. Creamos objetos que completan tu espacio con un toque especial y sumando un poco de tu esencia personal en cada rincón del hogar.", stock: 25},
    {nombre: "Florero Contemporaneo", precio: 9450, id: "9", img: "../img/florero-contemporaneo.jpeg", idCat:"1", detalle: "Jarron realizado artesanalmente en cerámica, de color off white con terminación mate, diseño minimalista y abstracto. Objeto de Deco.", stock: 11},
    {nombre: "Alfombra de Pelo Corto", precio: 10240, id: "10", img: "../img/Alfombra-pelo-corto.jpeg", idCat: "2", detalle: "Alfombra de pelo corto color natural. Con revés en panamá antideslizante. Aptas lavarropas agua fría.", stock: 50},
    {nombre: "Cuadros Botánicos", precio: 12800, id:"11", img: "../img/Cuadro-botanico.webp", idCat:"3", detalle:"Combo cuadros x 3. Marco natural bombé 2cm estilo nórdico moderno. Calidad y durabilidad comprobada. De fácil colocación.", stock: 9},
    {nombre: "Porta Vela", precio: 3450, id: "12", img:"../img/Porta-vela.jpeg", idCat: "1", detalle:"Vela en copa a juego para decoración del hogar, estilo moderno, material metal iron, incluye dos velas a medida.", stock: 12}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 100)
    })
}

export const getAProduct = (id) =>{
    return new Promise((resolve) =>{
        setTimeout( () => {
            const product = products.find(prod => prod.id ===id);
            resolve(product);
        }, 100)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) =>{
        setTimeout( () =>{
            const productByCategory = products.filter(prod => prod.idCat === categoryId);
            resolve(productByCategory);
        }, 100)
    })
}