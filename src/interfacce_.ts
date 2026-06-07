interface app{
    readonly name: string;
    version: string;
    description?: string;
}
const myApp: app = {
    name: "My Application",
    version: "1.0.0",
    
};
console.log(myApp.name);
const age: Array<number> = [25, 30, 35];