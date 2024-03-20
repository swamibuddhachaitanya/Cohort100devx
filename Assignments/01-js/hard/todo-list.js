/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.initialIndex = 0; 
    this.todoList = [];
  }

  add(str){
    this.todoList.push({indexOfTodo : this.initialIndex++, todo : str});
  }
  remove(indexToDelete){
    
    const index = this.todoList.findIndex(obj=> obj.indexOfTodo === indexToDelete);
    if (index !== -1) {
      this.initialIndex--;
      this.todoList.splice(index,1);
    }
    // else{
    //   throw new Error();
    // }
  }
  update(indexToUpdate,updatedTodo){
      let listFound = this.todoList.find(obj=> obj.indexOfTodo === indexToUpdate);
      if (listFound) {
        listFound.todo = updatedTodo;  
      }
      // else{
      //   throw new Error();
      // }
      
  }

  getAll(){
    return this.todoList.map(obj => obj.todo);
  }

  get(indexOfTodo){
    let listFound = this.todoList.find(obj=> obj.indexOfTodo === indexOfTodo);
    if (listFound) {
      return listFound.todo;
    }
    else{
      return null;
    }
  }

  clear(){
    this.todoList = []
    this.initialIndex = 0;
  }
}

// let todolist = new Todo();
// todolist.add("go to the gym");
// todolist.remove(1);
// todolist.add("drink plenty of water");
// todolist.add("enjoy coding");
// todolist.update(2,"enjoy the coding and learning");
// todolist.getAll();
// todolist.get(1);
// todolist.clear();


module.exports = Todo;
