var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }
        }
    }
}

let flag = 0;
// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name, tree) {
    if (tree.name === name) {
        console.log(tree.id);
        flag = 1;
    }
    else {
        if (tree.left != undefined && flag == 0) {
            findIdByName(name, tree.left);
        }

        if (tree.right != undefined && flag == 0) {
            findIdByName(name, tree.right);
        }
    }
}

// findIdByName("Carl", tree);

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id, tree) {
    if (tree.id === id) {
        console.log(tree.name);
    }
    else {
        if (tree.left != undefined) {
            findNameById(id, tree.left);
        }

        if (tree.right != undefined) {
            findNameById(id, tree.right);
        }
    }
}

// findNameById(11, tree);

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(tree) {
    console.log(tree.name);
    if (tree.left != undefined) {
        getListWithDLR(tree.left);
    }
    if (tree.right != undefined) {
        getListWithDLR(tree.right);
    }
}

// getListWithDLR(tree);

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR(tree) {
    
    if (tree.left != undefined) {
        getListWithLDR(tree.left);
    }
    console.log(tree.name);
    if (tree.right != undefined) {
        getListWithLDR(tree.right);
    }

}

// getListWithLDR(tree);

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD(tree) {
    if (tree.left != undefined) {
        getListWithLRD(tree.left);
    }
    
    if (tree.right != undefined) {
        getListWithLRD(tree.right);
    }
    console.log(tree.name);
}

getListWithLRD(tree);