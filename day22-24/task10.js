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


//以下逻辑参考他人代码


//妙在用了数组转存，以及引用类型

function toObject(arr) {
    var menuObject = {};
    var storeArr = [];
    for (var i = 0; i < arr.length; i++) {
        //既然是一个对象，首先要把每组数据转存下来
        var temp = {
            name: arr[i][1]
            //subMenu: {}
        }
        //然后把他放入一个数组中
        storeArr.push(temp);
        //最后再考虑把它放在哪个对象里面
        if (arr[i][2] == -1) {
            menuObject['"' +arr[i][0] +'"'] = temp;
        } else {
            var father = arr[i][2];
            storeArr[father - 1]["subMenu"] = {};
            storeArr[father - 1]["subMenu"]['"'+ arr[i][0] +'"'] = temp;

            /*
                如果这里不分两步创建而是直接
                storeArr[father - 1]["subMenu"]['"'+ arr[i][0] +'"'] = temp;
                会导致最后一个属性无法创建
                使用中括号语法创建属性，最多创建一个,因为前面那个就是undefined
                除非在对象初始化的时候写subMenu: {}
            */
        }
    }

    return menuObject;
}

toObject(menuArr);

