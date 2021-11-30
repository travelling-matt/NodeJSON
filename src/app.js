const yargs = require("yargs");
//now install yargs in the terminal. parent folder. npm i yargs
//import modules

const { addMovie, listMovie } = require("./utils");

const app = () => {
    if (process.argv[2] === "add"){
        addMovie({title: yargs.argv.title, actor: yargs.argv.actor});
    } else if (process.argv[2] === "list") {
        listMovie();
    } else {
        console.log("incorrect command");
    }
};

app();