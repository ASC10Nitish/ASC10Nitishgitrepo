function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(42);
const str = identity<string>("Hello");

console.log(num); 
console.log(str);