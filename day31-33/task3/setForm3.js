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

const region = document.getElementById("region-radio-wrapper");
const product = document.getElementById("product-radio-wrapper");

function createCheckBox(checkBoxParent, checkBoxArr) {
    let innerContent = ``;
    let checkedNum = 3;
    innerContent = innerContent + `<input type="checkbox" name="region" value=0 checked="true">全选`;

    for (let i = 0; i < checkBoxArr.length; i++) {
        innerContent = innerContent + `<input type="checkbox" name="region" value=${i + 1} checked="true">${checkBoxArr[i].name}`
    }

    checkBoxParent.innerHTML = innerContent;

    checkBoxParent.onchange = (event) => {
        let target = event.target;
        if (target.type == "checkbox") {
            let value = target.value;

            //先判断是点了全选吗
            if (value == 0) {
                if (target.checked == true) {
                    console.log(target.parentNode.children);
                    console.log(target.parentNode.children[1].nodeType);
                    target.parentNode.children[1].checked = true;
                    target.parentNode.children[2].checked = true;
                    target.parentNode.children[3].checked = true;
                    checkedNum = 3;
                    console.log(checkedNum);
                }

            } else {
                //是选中吗？
                if (target.checked == true) {
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
                    }
                    console.log(checkedNum);
                }
            }
        }
    }
}

createCheckBox(region, regionList);
createCheckBox(product, productList);