function transformExp(x) {
    if (x > 0) {
        return Math.sqrt(x); // Square root if positive
    } else {
        return Math.pow(x, 2); // Square if non-positive
    }
}

// Example usage:
console.log(transformExp(4)); // Output: 2 (sqrt(4))
console.log(transformExp(-3)); // Output: 9 (-3 * -3)
