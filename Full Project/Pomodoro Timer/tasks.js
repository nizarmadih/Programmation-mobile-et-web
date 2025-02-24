let counter = 1;
function Show_InputTasks()
{
    let inputdiv = document.createElement("div");
    inputdiv.id = "inputdiv";

    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter Name Here..."
    nameInput.id = "name" + counter;
    inputdiv.appendChild(nameInput);

    let confirm = document.createElement("button");
    confirm.textContent = "Confirm"
    confirm.onclick = function ()
    {
        input = document.getElementById("name" + counter).value;

        let taskdiv = document.createElement("div");
        taskdiv.id = "taskdiv" + counter;
        taskdiv.className = "taskdiv";

        let taskindex = document.createElement("p");
        taskindex.textContent = "Task : ";
        taskdiv.appendChild(taskindex);
        taskindex.className = "taskindex";

        let taskname = document.createElement("p");
        taskname.textContent = input;
        taskdiv.appendChild(taskname);
        taskname.className = "task";
        
        let edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.className = "edit";
        edit.onclick = function()
        {
            let oldname = taskname.textContent;
            taskname.remove();
            

            let editInput = document.createElement("input");
            editInput.type = "text";
            editInput.placeholder = "Edit Name Here..."
            editInput.id = "editinput";
            editInput.className = "task"
            editInput.value = oldname;
            taskdiv.insertBefore(editInput, edit);

            let confirmEdit = document.createElement("button");
            confirmEdit.textContent = "Confirm"
            confirmEdit.onclick = function ()
            {
                let newname = document.getElementById("editinput").value;

                let newtaskname = document.createElement("p");
                newtaskname.textContent = newname;
                newtaskname.className = "task";
                taskname = newtaskname;
                editInput.remove();
                confirmEdit.remove();
                
                taskdiv.insertBefore(newtaskname, edit);
            };
            taskdiv.appendChild(confirmEdit);
        }
        taskdiv.appendChild(edit);

        let remove = document.createElement("button");
        remove.textContent = "Delete";
        remove.className = "remove";
        remove.onclick = function () {taskdiv.remove();}
        taskdiv.appendChild(remove);


        document.getElementById("tasklist").appendChild(taskdiv);
        counter++;
        inputdiv.remove();
    }
    inputdiv.appendChild(confirm);

    document.getElementById("tasklist").appendChild(inputdiv);
}

function AddTask(name)
{
    let task = document.createElement("p");
    task.textContent = "Task " + counter + " : " + name;
    document.getElementById("tasklist").appendChild(task);
}
