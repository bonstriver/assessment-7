| Sizes of arrays | doublerAppend | doublerInsert |
|-----------------|---------------|---------------|
| extraLargeArray |   3.0242 ms   |  699.5298 ms  |
|-----------------|---------------|---------------|
|   largeArray    |   475.3 μs    |   8.4414 ms   |
|-----------------|---------------|---------------|
|   mediumArray   |   126.4 μs    |   161.3 μs    |
|-----------------|---------------|---------------|
|   smallArray    |   85.8 μs     |    45.9 μs    |
|-----------------|---------------|---------------|
|   tinyArray     |   86.1 μs     |    74.3 μs    |
|-----------------|---------------|---------------|

Comparing the two functions demonstrates that the function that utilizes .push() takes slightly longer time. However, as this number increases, there is a substantial difference between the two. Append (with .push()) is much faster, increasing linearly. In contrast, the function that uses .unshift() (insert function), is increasing at an exponential rate. This is because with unshift, the new number is being pushed to the front, so each element/number in the array has to shift one index. Using .push() is only adding an additional index to the end.
