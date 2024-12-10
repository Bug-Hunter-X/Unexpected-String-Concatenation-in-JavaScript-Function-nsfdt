# Unexpected String Concatenation in JavaScript Function

This repository demonstrates a common, yet subtle, error in JavaScript: unexpected string concatenation. The issue arises when a function designed for numerical addition encounters a string argument, leading to unexpected behavior.  The bug.js file contains the problematic code, while bugSolution.js presents the corrected version.

## Bug Description
The function `foo` intends to add two numbers. However, when one of the inputs is a string, JavaScript's type coercion mechanism performs string concatenation instead of numerical addition. This results in an incorrect output.

## Bug Solution
The solution involves explicitly converting the input arguments to numbers using `parseInt` or `Number` before performing the addition. This ensures that the function always behaves as intended, regardless of the input types.