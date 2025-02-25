function CheckInfo()
{
    event.preventDefault();
    const form = document.getElementById("login");

    const user = form.elements["username"];
    const pass = form.elements["password"];

    array = [user, pass];
    CheckNecessary(array);
    CheckPassword(pass);
    CheckEmail(user);
}
function CheckPassword(pass)
{
    if(pass.value.length < 8 && pass.value != "")
    {
        alert("Password is too short, It should be 8 characters in minimum.");
    }
    else
    {
        window.open("main.html")
    }
}
function CheckEmail(input)
{
    if(input.includes("@"))
    {
        
    }
}
function CheckNecessary(inputs)
{
    for(let i = 0; i<inputs.length;i++)
    {
        if (inputs[i].value == "") {
            inputs[i].classList.add("notfilled");
        } else {
            inputs[i].classList.remove("notfilled");
        }
    }   
}