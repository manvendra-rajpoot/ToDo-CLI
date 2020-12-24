const process = require('process'); 
const fs = require('fs');

var args =  process.argv; 

const argsLen = args.length;
var command='', commandStatement='';
var add=0, done=0;

if(argsLen>2){
    for(var i = 2; i < argsLen; ++i){
        if(i==2){
            command = args[i];
        }
        if(i==3){
            commandStatement = args[i];
        }
    }
}

// 1. Help
if(command=='help' || argsLen<3){
console.log(`Usage :-
$ ./todo add "todo item"  # Add a new todo
$ ./todo ls               # Show remaining todos
$ ./todo del NUMBER       # Delete a todo
$ ./todo done NUMBER      # Complete a todo
$ ./todo help             # Show usage
$ ./todo report           # Statistics`);
}

// 2. List all pending todos
if(command=='ls'){
    fs.readFile('Input.txt', (err, data) => { 
    if (err) throw err; 

    console.log(data.toString()); 
}) 
}


// 3. Add a new todo
if(command=='add'){
    add++;
    addStatement = `[${add}] ${commandStatement}\n`;
    fs.appendFile('todo.txt', addStatement, (err) => { 
    if (err) throw err;

    console.log(`Added todo: "${commandStatement}"`)
    });
}
