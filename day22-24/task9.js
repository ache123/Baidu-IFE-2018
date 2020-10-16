var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
arr = arr.sort((a, b) => a - b);
arr = arr.sort((a, b) => b - a);

var arr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
arr = arr.sort();
arr = arr.reverse();

var arr = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
arr = arr.sort((a,b) => {
    return b[1] - a[1];
});

var arr = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
arr = arr.sort((a,b) => {
    return a.value - b.value;
});