# numterse

returns formatted abridged version of a number if possible else returns number

## usage 
```js
numterse(2000000); // returns 2M
```

## tests 

```
numterse should return 0 for text: 0ms
numterse should return 1K for 1000: 0ms
numterse should return 1M for 1000000: 0ms
numterse should return 2.5M for 2500000: 0ms
numterse should return 2.5G for 2500000000: 0ms
numterse should return 2.5T for 2500000000000: 1ms
numterse should return 2.5Z for 2.5e+21: 0ms
numterse should return 2.5Z for 2.5e+21: 0ms

8 passing (18ms)
```
