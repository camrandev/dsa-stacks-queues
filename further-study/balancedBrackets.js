"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("../stack");
//iterating over the actual string
//logic to to handle match top value
//stack itself to hold onto values as they appear
function balancedBrackets(str) {
    if (str.length === 0)
        return true;
    var bracketTracker = new stack_1.Stack();
    var pairs = {
        "[": "]",
        "(": ")",
    };
    var closingPairs = {
        "]": "[",
        ")": "(",
    };
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char in pairs) {
            bracketTracker.push(char);
        }
        if (char in closingPairs) {
            var key = char;
            var topOfStack = bracketTracker.pop();
            console.log(topOfStack);
            if (closingPairs[key] !== topOfStack) {
                return false;
            }
        }
    }
    return true;
    //iterating over the actual string
}
module.exports = balancedBrackets;
