// ES6 stands for ECMAScript 6.

// React ES6 Classes
class TransportMachine
{
    constructor(medium)
    {
        this.medium = medium;
    }

    TellMedium()
    {
        return this.medium;
    }
}


class Car extends TransportMachine{
    constructor(name,price,medium)
    {
        super(medium)
        this.brand = name;
        this.cost = price;
       
    }

    changeGearUp(lastGear)
    {
        let currGear = lastGear+1;
        return ("gear changed to " + currGear)
    }
}

const mycar = new Car("Ford");
const jatinscar = new Car('aulto',"2rs","land")
console.log(mycar.changeGearUp(4))
console.log(jatinscar.brand);
console.log(jatinscar.medium);
console.log(mycar.medium);

class Bike{
    constructor(name,price,medium)
    {
        this.brand = name;
        this.cost = price;
        this.medium=medium;
    }
}

class Boat{
    constructor(name,price,medium)
    {
        this.brand = name;
        this.cost = price;
        this.medium=medium;
    }
}
