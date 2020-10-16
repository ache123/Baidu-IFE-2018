var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    },
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    },
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}

var scoreArray = [];
var obValue = Object.values(scoreObject);
var obKey = Object.keys(scoreObject);
for (var i = 0; i < obValue.length; i++) {
    scoreArray.push([obKey[i], obValue[i].Math, obValue[i].English, obValue[i].Music]);
}

var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

var menuObject = new Object();
var menuObject = {};
for (var i = 0; i < menuArr.length; i++) {
    var tmp = {};
    tmp.name = menuArr[i][1];
    
}