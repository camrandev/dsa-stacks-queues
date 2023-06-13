"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("../stack");
//iterating over the actual string
//logic to to handle match top value
//stack itself to hold onto values as they appear
function balancedBrackets(str) {
    if (str.length === 0)
        return true;
    let bracketTracker = new stack_1.Stack();
    const pairs = {
        "[": "]",
        "(": ")",
    };
    const closingPairs = {
        "]": "[",
        ")": "(",
    };
    for (const char of str) {
        if (char in pairs) {
            bracketTracker.push(char);
        }
        if (char in closingPairs) {
            const key = char;
            if (bracketTracker.isEmpty())
                return false;
            let topOfStack = bracketTracker.pop();
            // console.log(topOfStack)
            if (closingPairs[key] !== topOfStack) {
                return false;
            }
        }
    }
    if (bracketTracker.size != 0)
        return false;
    return true;
    //iterating over the actual string
}
module.exports = balancedBrackets;
