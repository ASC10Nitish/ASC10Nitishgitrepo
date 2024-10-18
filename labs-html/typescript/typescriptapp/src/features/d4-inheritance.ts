class Animal
{ 
    constructor(public name:string){}

    makesound():void{
        console.log(`${this.name} makes sound`);
    }
}

class Dog extends Animal
{ 
    makesound(): void
    { 
        console.log(`${this.name} makes sound`);
    }
}

const animal=new Animal("cat");
animal.makesound();
const dog=new Dog("Dog");
dog.makesound();