const yargs = require("yargs");
//now install yargs in the terminal. parent folder. npm i yargs
//import modules

const { addMovie, listMovie, append } = require("./utils");
//original code
const app = () => {
    if (process.argv[2] === "add"){
        addMovie({title: yargs.argv.title, actor: yargs.argv.actor});
    } else if (process.argv[2] === "list") {
        listMovie();
    } else {
        console.log("incorrect command");
    }
};

//using yargs
// PS C:\Users\Matt\Desktop\CodeNation\week07\nodejson> node src/app.js --add --title "pitch perfect" --actor "anna kendrick"
// PS C:\Users\Matt\Desktop\CodeNation\week07\nodejson> node src/app.js --list
// { title: 'pitch perfect', actor: 'anna kendrick' }

//Neils help. on alex screen. append not working
// const app = () => {
//     if (yargs.argv.add){
//         addMovie({title: yargs.argv.title, actor: yargs.argv.actor});
//     } else if (yargs.argv.list) {
//         listMovie();
//     } else if (yargs.argv.append) {
//         append({title: yargs.argv.title, actor: yargs.argv.actor});
//     } else {
//         console.log("incorrect command");
//     }
// };

app();