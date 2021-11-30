//import files sync library
//install fs in terminal. npm i fs
//install fs. npm i fs
//create functions to addMovie and listMovie
//'try and catch' to catch any errors

const fs = require("fs");

const addMovie = (movieObj) => {
    try {
        const stringyObj = JSON.stringify(movieObj);
        fs.writeFileSync('./storage.json', stringyObj);
    } catch (error){
        console.log(error);
    }
};

//list movies, no value needed as just listing
const listMovie =() => {
    try {
        const jsonList = fs.readFileSync('./storage.json');
        const list = JSON.parse(jsonList);
        console.log(list);
    } catch (error) {
        console.log(error);
    };
};

//Neils help. on alex screen. push not working
// const append = (movieObj) => {
//     try {
//         const jsonList = fs.readFileSync("./storage.json")
//         const storage = JSON.parse(jsonList)
//         storage.movies.push(movieObj)
//         fs.writeFileSync("./storage.json", JSON.stringify(storage))
//     } catch (error) {
//         console.log(error);
//     }
// };

//export modules
module.exports = { addMovie, listMovie, append };