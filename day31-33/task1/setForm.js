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
    id: "east",
    name: "华东"
}, {
    id: "sorth",
    name: "华南"
}, {
    id: "north",
    name: "华北"
}];




let region = document.getElementById("region-select");
let tableWrapper = document.getElementById("table-wrapper");
let data = getData();
drawForm(data);

region.onchange = () => {
    tableWrapper.innerHTML = "";
    let data = getData();
    drawForm(data);
}

//获取数据
function getData() {
    let regionName = getReginName(region.value);
    let tempArr = [];

    for (let i of sourceData) {
        console.log(i);
        if (i.region == regionName) {
            tempArr.push(i);
        }
    }

    return tempArr;
}

//将option中的value转成对应的中文
function getReginName(regionId) {
    for (let i of regionList) {
        if (i.id == regionId) {
            return i.name;
        }
    }
}

//绘制表格
function drawForm(data) {
    let table = document.createElement("table");
    table.style.border = "1px solid black";
    table.style.borderCollapse = "collapse";

    let thead = table.createTHead();
    // thead.style.border = "1px solid black";

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

        for (let j = 0; j < 12; j++){
            tbody.rows[i].insertCell(j + 2);
            tbody.rows[i].cells[j + 2].appendChild(document.createTextNode(data[i].sale[j]));
            tbody.rows[i].cells[j + 2].style.border = "1px solid black";
        }
    }

    tableWrapper.appendChild(table);
}
