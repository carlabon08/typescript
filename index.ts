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

    function randomElem (theArray:any[]): any {
        let randomIndex = Math.floor(Math.random()*theArray.length);
        return theArray[randomIndex];
    }

    let positions = [103, 458,472, 458];
    let randomPositions = randomElem(positions);

    let colors = ['violet','indigo','blue','green'];
    let randmColor = randomElem(colors);
