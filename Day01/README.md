
# point to rembeber:
y: Declares an array named y that contains the elements 1, 2, 3, 4, 5.

While it's true that using typeof y in JavaScript will return "object", this is a historical quirk. Arrays in JavaScript are technically different from objects, but the typeof operator treats them similarly for compatibility reasons.

*Here's a more reliable way to check if a variable holds an array:*
```
Array.isArray(y); // Returns true for arrays
```

# Comparison of var, let, and const in JavaScript
| Feature         | Description          | Example                                 |
|-----------------|----------------------|--------------------------------------------|
| Scope            | Where the variable is accessible | `var` - Function or global scope, `let` & `const` - Block scope |
| Reassignment    | Can the value be changed? | `var` & `let` - Yes, `const` - No           |
| Hoisting          | Is the declaration moved to the top? | `var` - Yes, `let` & `const` - No            |
