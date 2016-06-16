function Person (firstname,surname,fullname)
{
    this.firstname = firstname;
    this.surname = surname;
    this.fullname = function()
    {
        return this.firstname + " " + this.surname;
    }
}

var person = new Person("Shiv","ABCD");
//document.write(person.fullname());

document.getElementById("demo").innerHTML = person.fullname();