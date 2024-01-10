function Author(first_name, last_name, birth) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.birth = birth;
}

function Magazine(Author, name, price, year) {
    Author.call(this, first_name, last_name,birth);
    this.name = name;
    this.price = price;
    this.year = year;
}


const Painter1 = new Author("Leonardo", "Vinci", 1452);

console.log(Painter1);