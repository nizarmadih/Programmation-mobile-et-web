function CheckForm()
{
    event.preventDefault();
    const form = document.getElementById("signup");

    const firstname = form.elements["firstname"];
    const lastname = form.elements["lastname"];
    const email = form.elements["email"];
    const pass = form.elements["pass"];
    const rpass = form.elements["rpass"];
    const num = form.elements["num"];
    const birth = form.elements["birth"];
    const male = form.elements["male"];
    const female = form.elements["female"];

    array = [firstname, lastname, email, pass, rpass, num, birth, male, female]
    CheckNecessary(array)
    
    if(!CheckPassword(pass, rpass))
    {
        return false
    }
    else if(!CheckGender(male, female))
    {
        return false;
    }
    else if(!CheckBirthday(birth))
    {
        return false;
    }
    else
    {
        window.open("Login.html")
    }

}
function CheckPassword(pass, rpass)
{
    if(pass.value != rpass.value)
    {
        alert("Password is not repeated correctly, Please try again.");
        return false;
    }
    else if(pass.value.length < 8 && pass.value != "")
    {
        alert("Password is too short, It should be 8 characters in minimum.");
        return false;
    }
    return true;
}
function CheckBirthday(birth)
{
    const dateValue = birth.value;

    const [year, month, day] = dateValue.split('-');

    const currentdate = new Date();

    const currentYear = currentdate.getFullYear();
    const currentMonth = currentdate.getMonth() + 1;
    const currentDay = currentdate.getDate();

    if (year > currentYear || (year == currentYear && month > currentMonth) || (year == currentYear && month == currentMonth && day > currentDay)) {
        alert("Birthday is incorrect, Try again.");
        return false;
    }
    return true;
}
function CheckGender(male, female)
{
    if(male.checked && female.checked)
    {
        alert("Please Choose only one gender.");
        return false;
    }
    else if(!male.checked && !female.checked)
    {
        alert("Please select a gender.")
        return false;
    }
    return true;
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