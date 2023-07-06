// setTimeout (()=>{
//     console.log('2sec are up')
// }, 2000)

// const name = ['Abbas', 'Aziz' ,'Badshah'];
// const shortName = name.filter((name)=>{
//     return name.lenght <= 4
// })

// const geocode = (address, callback) => {
// setTimeout( ()=>{
//     const data = {
//         latitude: 0,
//         longitute: 0
//     }
    
//     callback(data)
// }, 2000)
// }

// geocode('Indore', (data) => {
//     console.log(data)
// });

const add = (a , b, callback) => {
    setTimeout(() => {
        const add = a + b;
        callback (add);
    }, 2000);
}

add(1, 4 ,(sum)=>{
    console.log(sum);
})