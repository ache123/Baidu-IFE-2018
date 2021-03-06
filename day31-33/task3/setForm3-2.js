let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];


let regionList = [{
    value: 1,
    name: "华东"
}, {
    value: 2,
    name: "华南"
}, {
    value: 3,
    name: "华北"
}];

const regionTemp = regionList.slice();

let productList = [{
    value: 1,
    name: "手机"
}, {
    value: 2,
    name: "笔记本"
}, {
    value: 3,
    name: "智能音箱"
}];

const productTemp = productList.slice();

const region = document.getElementById("region-radio-wrapper");
const product = document.getElementById("product-radio-wrapper");
const tableWrapper = document.getElementById("table-wrapper");

let data = getData();
drawForm(data);

function checkDiv(checkBoxParent, checkBoxArr, tempArr) {
    let checkedNum = 3;
    checkBoxParent.onchange = (event) => {
        let target = event.target;
        // console.log(target.nextSibling.nodeValue);
        if (target.type == "checkbox") {
            let value = target.value;

            //先判断是点了全选吗
            if (value == 0) {
                if (target.checked == true) {

                    target.parentNode.children[1].checked = true;
                    target.parentNode.children[2].checked = true;
                    target.parentNode.children[3].checked = true;
                    checkedNum = 3;

                    let index = checkBoxArr.findIndex((data) => data.value === 1);
                    if (index == -1) {
                        checkBoxArr.push(tempArr[0]);
                    }
                    index = checkBoxArr.findIndex((data) => data.value === 2);
                    if (index == -1) {
                        checkBoxArr.push(tempArr[1]);
                    }
                    index = checkBoxArr.findIndex((data) => data.value === 3);
                    if (index == -1) {
                        checkBoxArr.push(tempArr[2]);
                    }

                }
                // console.log(regionList);
                // console.log(productList);

            } else {
                //是选中吗？
                if (target.checked == true) {
                    checkBoxArr.push({ value: Number(target.value), "name": target.nextSibling.nodeValue.trim() });
                    checkedNum++;
                    if (checkedNum == 3) {
                        target.parentNode.children[0].checked = true;
                    }
                    console.log(checkedNum);
                } else {
                    //取消选择时判断是不是最后一个
                    if (checkedNum == 1) {
                        target.checked = true;
                    } else {
                        checkedNum--;
                        target.parentNode.children[0].checked = false;

                        //如果取消就在数组中删除它
                        const index = checkBoxArr.findIndex(data => data.value == target.value);
                        if (index != -1) {
                            checkBoxArr.splice(index, 1);
                        }

                    }
                    console.log(checkedNum);

                }
                // console.log(regionList);
                // console.log(productList);
            }
        }
        console.log(regionList);
        console.log(productList);
        tableWrapper.innerHTML = "";
        let data = getData();
        drawForm(data);
    }
}


//获取数据
function getData() {
    let tempArr = [];

    for (let i of sourceData) {
        let index1 = regionList.findIndex(data => data.name === i.region);
        let index2 = productList.findIndex(data => data.name === i.product);
        if (index1 != -1 && index2 != -1) {
            tempArr.push(i);
        }
    }

    return tempArr;
}



//绘制表格
function drawForm(data) {
    let table = document.createElement("table");
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";

    let thead = table.createTHead();
    thead.style.fontWeight = "bold";

    thead.insertRow(0);
    thead.rows[0].insertCell(0);
    thead.rows[0].cells[0].appendChild(document.createTextNode("商品"));
    thead.rows[0].cells[0].style.border = "1px solid black";
    thead.rows[0].insertCell(1);
    thead.rows[0].cells[1].appendChild(document.createTextNode("地区"));
    thead.rows[0].cells[1].style.border = "1px solid black";

    for (let i = 1; i < 13; i++) {
        thead.rows[0].insertCell(i + 1);
        thead.rows[0].cells[i + 1].appendChild(document.createTextNode(`${i}月`));
        thead.rows[0].cells[i + 1].style.border = "1px solid black";
    }


    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    // tbody.style.border = "1px solid black";

    for (let i = 0; i < data.length; i++) {
        tbody.insertRow(i);
        tbody.rows[i].insertCell(0);
        tbody.rows[i].cells[0].appendChild(document.createTextNode(data[i].product));
        tbody.rows[i].cells[0].style.border = "1px solid black";
        tbody.rows[i].insertCell(1);
        tbody.rows[i].cells[1].appendChild(document.createTextNode(data[i].region));
        tbody.rows[i].cells[1].style.border = "1px solid black";

        for (let j = 0; j < 12; j++) {
            tbody.rows[i].insertCell(j + 2);
            tbody.rows[i].cells[j + 2].appendChild(document.createTextNode(data[i].sale[j]));
            tbody.rows[i].cells[j + 2].style.border = "1px solid black";
        }
    }

    tableWrapper.appendChild(table);
}

checkDiv(region, regionList, regionTemp);
checkDiv(product, productList, productTemp);