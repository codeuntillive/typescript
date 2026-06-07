"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function print(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
print("hi there");
print(1233.3434);
let ordersize = (size) => {
    if (typeof size === "number") {
        return size;
    }
    switch (size) {
        case "small":
            return 1;
        case "medium":
            return 2;
        case "large":
            return 3;
        default:
            throw new Error("Invalid size");
    }
};
print(ordersize("medium"));
print(ordersize(5));
//# sourceMappingURL=typenarrow.js.map