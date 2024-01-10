/* function Painter(first_name, last_name, birth) {
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

const Picture1 = new Picture(Painter1.first_name, Painter1.last_name, Painter1.birth, "MonaLisa", 860, 1503);

console.log(Painter1);
console.log(Picture1); */


class Painter {
    constructor(first_name, last_name, birth) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.birth = birth;
    }

    getFullName() {
        return `${this.first_name} - ${this.last_name}`;
    }

    getAuthor() {
        return `Name of autor: ${this.first_name}; Last name of autor: ${this.last_name}; Birth: ${this.birth};`
    }
}

class Picture {
    constructor(author, name, price, year) {
        this.author= author;
        this.name = name;
        this.price = price;
        this.year = year;
    }

    getPainting() {
        if (this.author === undefined) {
            return `Painting: ${this.name}`;
        }
        return `Painting: ${this.name}; Price: ${this.price}milion; Year of creation: ${this.year}; Author: ${this.author.getAuthor()};`;
    }
}

let davinci = new Painter("Leonardo", "Vinci", 1452);
let diCaprio = new Painter("Leonardo", "DiCaprio", 1974);
let adolf = new Painter("Adolf", "Hitler", 1889);

let mona = new Picture(davinci, "MonaLisa", 860, 1503);
let titanic = new Picture(diCaprio,"Titanic",200,1998);
let lakehouse = new Picture(adolf, "House at a lake with mountains",5,1910);
console.log(davinci);
console.log(mona.getPainting());