let personas = [ 
    { nombre: 'Heyder', edad: 18 },
    { nombre: 'Kevin', edad: 14 },
    { nombre: 'Rommel', edad: 13 },
    { nombre: 'Luis', edad: 17 },
    { nombre: 'Alberto', edad: 21 },
    { nombre: 'Jesus', edad: 45 }
];

let MayoresDeEdad = [];

function filtrarMayoresDeEdad() {
    personas.forEach(element => {
        if(element.edad >= 18){
            MayoresDeEdad.push(element.nombre);
        }
    });    
    return MayoresDeEdad;
}

console.log('mayores de edad', filtrarMayoresDeEdad());


//////////////////////////////////////////////////////////////

let numeros = [1,2,3,4,5,6,7,8];

let numerosCuadrados = [];

function transformarYFiltrar() {
    numeros.forEach(element => {
        if(Math.pow(element, 2) >= 20){
            numerosCuadrados.push(element);
        }
    });    
    return numerosCuadrados;
}

console.log('numeros cuadrdos', transformarYFiltrar());

//////////////////////////////////////////////////////////////

function obtenerUsuarios() {
    fetch('https://datos.com/usuarios')
    .then(res => res.json())
    .then(res => {


    })
    .catch(err => console.error(err));
}



//////////////////////////////////////////////////////////////

    function ordenarPorPropiedad(arr, propiedad) {
        return arr.slice().sort((a, b) => {
            if (a[propiedad] < b[propiedad]) {
                return -1;
            } else if (a[propiedad] > b[propiedad]) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    
    const personas2 = [ 
        { nombre: 'Heyder', edad: 18 },
        { nombre: 'Kevin', edad: 14 },
        { nombre: 'Rommel', edad: 13 },
        { nombre: 'Luis', edad: 17 },
        { nombre: 'Alberto', edad: 21 },
        { nombre: 'Jesus', edad: 45 }
    ];
    
    const ordenadoPorEdad = ordenarPorPropiedad(personas2, 'edad');
    
    console.log('Ordenado por edad:', ordenadoPorEdad);
    