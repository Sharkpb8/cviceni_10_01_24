function Painter(first_name, last_name, birth) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.birth = birth;
}

function Picture(first_name, last_name, birth, name, price, year) {
    Painter.call(this, first_name, last_name, birth);
    this.name = name;
    this.price = price;
    this.year = year;
}


const Painter1 = new Painter("Leonardo", "Vinci", 1452);
const Painter2 = new Painter("Leonardo", "DiCaprio", 1974);
const Painter3 = new Painter("Adolf", "Hitler", 1889);

const Picture1 = new Picture(Painter1,"MonaLisa", 860, 1503);

console.log(Painter1);
console.log(Picture1);