function greet(name:string): string {
    return `Hello, ${name}!`;
    
}
console.log(greet('world'));
const name: string = 'Alice';
console.log(greet(name));
let num:bigint = 4223434342n;
let arr: number[] = [1, 2, 3];
 // This will cause a TypeScript error due to type mismatch