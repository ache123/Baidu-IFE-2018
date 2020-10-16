//MDN数组学习

var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99'.split(':')];
products.push('Socks:5.99'.split(':'));
products.push('T-shirt:14.99'.split(':'));
products.push('Trousers:31.9'.split(':'));
products.push('Shoes:23.99'.split(':'));

for (var i = 0; i < products.length; i++) { // number 2


    //不能用name命名，因为window全局作用域中有name属性
    var commodity = new Array();
    var price = new Array();
    for (var [a, b] of products) {
        commodity.push(a);
        price.push(b);
    }
    price = price.map(Number);

    total += price[i];

    itemText = `${commodity[i]} -$ ${price[i]} `;

    var listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);