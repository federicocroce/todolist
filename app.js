window.onload = function () {

    // Display the todo items.
    todoDB.open(refreshTodos);


    // Get references to the form elements.
    var newTodoForm = document.getElementById('new-todo-form');
    var newTodoInput = document.getElementById('new-todo');

    // Handle new todo item form submissions.
    newTodoForm.onsubmit = function () {
        // Get the todo text.
        var text = newTodoInput.value;

        // Check to make sure the text is not blank (or just spaces).
        if (text.replace(/ /g, '') != '') {
            // Create the todo item.
            todoDB.createTodo(text, function (todo) {
                refreshTodos();
            });
        }

        // Reset the input field.
        newTodoInput.value = '';

        // Don't send the form.
        return false;
    };

}


//function allowDrop(ev)
//{
//ev.preventDefault();
//}
//
//function drag(ev)
//{
//ev.dataTransfer.setData("Text",ev.target.id);
//}
//
//function drop(ev)
//{
//ev.preventDefault();
//var data=ev.dataTransfer.getData("Text");
//ev.target.appendChild(document.getElementById(data));
//}

//setInterval(function(){
//           if(navigator.onLine === false)
//alert('Sin Conexion');
//           } , 1000);


// Update the list of todo items.

function refreshTodos() {
    var eliminar = document.getElementById('contenido_elimnar');
    todoDB.fetchTodos(function (todos) {
        var todoList = document.getElementById('todo-items');
        var colororiginal;
        todoList.innerHTML = '';

        for (var i = 0; i < todos.length; i++) {
            // Read the todo items backwards (most recent first).
            var todo = todos[(todos.length - 1 - i)];

            var li = document.createElement('li');
            var item = document.createElement('img');
            item.src = 'img/flecha.png';
            item.width = 20;
            item.height = 20;
            item.className = "todo-checkbox";
            li.tagName = 'elemento';
            li.setAttribute("data-id", todo.timestamp);
            li.setAttribute("draggable", true);

            li.addEventListener('dragstart', function (e) {
                //                this.style.opacity = 0.1;  
                document.getElementById('new-todo-form').style.opacity = 0.1;
                //                document.getElementById('todo-items').style.opacity = 0.1;
                //                document.getElementById('todo-items').style.opacity = 0.1;
              
                for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
                    document.getElementsByTagName('li')[i].style.opacity = 0.1;
                }
                
                document.getElementById('page-wrapper').style.boxShadow = "0  1px 30px rgba(10, 10, 10, 0.21)";
                this.style.opacity = 0.4;
                colororiginal = this.style.backgroundColor;
                this.style.backgroundColor = "rgba(244, 101, 101, 0.6)";
                this.child
                document.getElementById('todo-items').className='';
                document.getElementById('elimina').className='';
            }, false);



            //             li.addEventListener('dragstart', function (e) {
            //                //                this.style.opacity = 0.1;                     
            //                for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
            //                    document.getElementsByTagName('div')[i].style.opacity = 0.1;
            //                }
            //                li.style.opacity = 1;
            //                li.style.borderStyle='dashed';
            //            }, false);


            //item.addEventListener('dragstart', function(e));
            document.getElementsByName
            li.appendChild(item);

            var span = document.createElement('span');

            span.innerHTML = todo.text;

            li.appendChild(span);

            todoList.appendChild(li);

            // Setup an event listener for the checkbox.



            li.addEventListener('dragend', function (e) {
                document.getElementById('new-todo-form').style.opacity = 1;
                //                document.getElementById('todo-items').style.opacity = 1;
                //                document.getElementById('todo-items').style.opacity = 0.1;
                console.log(document.getElementsByTagName('li').length);
                for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
                    document.getElementsByTagName('li')[i].style.opacity = 1;
                }
                document.getElementById('page-wrapper').style.boxShadow = "0  1px 30px rgba(10, 10, 10, 1)";
                this.style.opacity = 1;
                this.style.backgroundColor = colororiginal;

            }, false);


            //            
            //            li.addEventListener('dragend', function (e) {
            //                this.style.opacity = 1;
            //                for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
            //                    document.getElementsByTagName('div')[i].style.opacity = 1;
            //                    //                         document.getElementsByTagName('div')[i].style.color = rgba(255, 255, 255, 1);
            //                }
            //                //	   li.style.padding: 0.5em;
            //                //	   li.style.background: #FFF;
            //                //	   li.style.border-bottom: 3px solid #EEE;
            //
            //                //We change the background-color of the element
            //
            //            }, false);



            //         document.getElementById('contenido_elimnar').addEventListener('dragover',function(e){
            //         todoDB.deleteTodo(id, refreshTodos);},false);

            eliminar.addEventListener('dragover', function (e) {
                eliminar.style.webkitTransform = "scale(1.1,1.1)";

                //We MUST prevent the default action of dragover!
                if (e.preventDefault) {
                    e.preventDefault();
                }
            }, false);

            eliminar.addEventListener('dragleave', function (e) {
                //We change again its background-color
                eliminar.style.webkitTransform = "scale(1,1)";
                return false;
            }, false);

            eliminar.addEventListener('drop', function (e) {
                 document.getElementById('todo-items').className='slideUp';
                todoDB.deleteTodo(parseInt(li.getAttribute('data-id')), refreshTodos);
                document.getElementById('elimina').className='efectoOpacity';
            });
            
        }

    });



}




//// Update the list of todo items.
//function refreshTodos() {  
//  todoDB.fetchTodos(function(todos) {
//    var todoList = document.getElementById('todo-items');
//    todoList.innerHTML = '';
//    
//    for(var i = 0; i < todos.length; i++) {
//      // Read the todo items backwards (most recent first).
//      var todo = todos[(todos.length - 1 - i)];
//
//      var li = document.createElement('li');
//     var checkbox = document.createElement('input');
//      checkbox.type = "checkbox";
//      checkbox.className = "todo-checkbox";
//      checkbox.setAttribute("data-id", todo.timestamp);
//        li.setAttribute("draggable", true);
////        checkbox.addEventListener('dragstart',function(e)
////                          {
////                           li.style.opacity=0.2;
////        li.style.borderStyle='dashed';
////                          }
////      //item.addEventListener('dragstart', function(e));
//        
//        
//      li.appendChild(checkbox);
//      
//      var span = document.createElement('span');
//      span.innerHTML = todo.text;
//      
//      li.appendChild(span);
//      
//      todoList.appendChild(li);
//      
//      // Setup an event listener for the checkbox.
//      checkbox.addEventListener('click', function(e) {
//        var id = parseInt(e.target.getAttribute('data-id'));
//
//      //  todoDB.deleteTodo(id, refreshTodos);
//      });
//    }
//
//  });
//}