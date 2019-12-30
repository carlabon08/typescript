/*function pow(x: number, y: number): string   {
    return Math.pow(x,y).toString();
}
pow(5,10)*/
/*const arr:number[] = []

arr.push(1)
arr.push('23')
arr.push(false)
interface Person {
    first : string;
    last : string;
    [key: string]: any
}

class Observable<T> {
    constructor(public value: T) {}
        
    }
    let x: Observable<number>;
    let y:Observable<Person>;

    let z: new Observable(23)*/
function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [103, 458, 472, 458];
var randomPositions = randomElem(positions);
var colors = ['violet', 'indigo', 'blue', 'green'];
var randmColor = randomElem(colors);
