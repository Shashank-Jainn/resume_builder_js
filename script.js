function addNewWEField() {
    // console.log("adding New Field");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here");
    newNode.setAttribute("rows", 3);
    
    let weob= document.getElementById("we"); 
    let weaddbuttonob = document.getElementById("weaddbutton");
weob.insertBefore(newNode,weaddbuttonob);

}