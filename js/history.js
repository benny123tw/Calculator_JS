let obj = {
    table: []
};

let id = 0;

function dataStorge(currentOperand = '', previousOperand = '', operation = '', computation = 0) {
    this.current = currentOperand;
    this.prev = previousOperand;
    this.operation = operation;
    this.computation = computation;
    // obj.table.push({id: id, current: current, previous: prev, 
    //     operation: operation, computation: computation});   
    obj.table.push({id, current, prev, 
        operation, computation}); 
    historyDiv = document.createElement("div");
    historyDiv.id = "history_" + id;
    historyDiv.className = "history";

    prev = document.createElement("p");
    prev.className = "history-previous-operand";
    prev.textContent = obj.table[id]["prev"];
    document.getElementById("mySidenav").appendChild(historyDiv).appendChild(prev);

    operation = document.createElement("p");
    operation.className = "history-operation";
    operation.textContent = obj.table[id]["operation"];
    document.getElementById("mySidenav").appendChild(historyDiv).appendChild(operation);

    current = document.createElement("p");
    current.className = "history-current-operand";
    current.textContent = obj.table[id]["current"];
    document.getElementById("mySidenav").appendChild(historyDiv).appendChild(current);

    equal = document.createElement("p");
    equal.className = "history-current-operand";
    equal.textContent = "=";
    document.getElementById("mySidenav").appendChild(historyDiv).appendChild(equal);

    computation = document.createElement("p");
    computation.className = "computation";
    computation.textContent = obj.table[id]["computation"];
    document.getElementById("mySidenav").appendChild(historyDiv).appendChild(computation);

        
    id++;
}

const historyBtn = document.getElementsByClassName('historyBtn')[0];

historyBtn.addEventListener('click', () => {
    
})
 



// var json = JSON.stringify(obj);

// var fs = require('fs');
// fs.writeFile('../tmp/history.json', json, 'utf8', callback);

// fs.readFile('../tmp/history.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//         console.log(err);
//     } else {
//     obj = JSON.parse(data); //now it an object
//     obj.table.push({id: 2, square:3}); //add some data
//     json = JSON.stringify(obj); //convert it back to json
//     fs.writeFile('../tmp/history.json', json, 'utf8', callback); // write it back 
// }});