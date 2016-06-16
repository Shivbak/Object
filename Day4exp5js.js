function Person(firstname,lastname,street,city)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.address =
        {
        street: street,
        city : city
    }
}

var person = new Person("ABS","DEF","G","F");
document.getElementById("demo").innerHTML = Person.street;