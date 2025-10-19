let todo = [];

let choice = prompt('Enter operation to be performed: ');
if(choice !== null) choice = choice.toLowerCase();

while(true){
    if(choice === 'quit'){
        console.log('exit');
        break;
    }else if(choice === 'list'){
        console.log('-----------------------');
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log('-----------------------');
    }else if(choice === 'add'){
        let newTask = prompt('Enter task to be added: ');
        todo.push(newTask);
        console.log('tast added');
    }else if(choice === 'delete'){
        let idx = Number(prompt('Enter task id to be deleted: '));
        if(idx < 0 || idx > todo.length - 1){
            console.log('You entered invalid task id cannot perform delete operation');
        }else{
            todo.splice(idx,1);
            console.log('deleted successfully');
        }
    }else{
        console.log('you entered invalid request');
    }
    choice = prompt('Enter operation to be performed: ');
    if(choice !== null) choice = choice.toLowerCase();
}
