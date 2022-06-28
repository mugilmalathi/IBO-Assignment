const listOfProducts = [
    {
        productName: "TV",
        quantity: 10,
        description: "television",
    },
    {
        productName: "AC",
        quantity: 5,
        description: "air conditioner",
    },
    {
        productName: "TV",
        quantity: 10,
        description: "television",
    },
    {
        productName: "AC",
        quantity: 5,
        description: "air conditioner",
    },
    {
        productName: "FAN",
        quantity: 10,
        description: "Ceiling Fan",
    },
];


function uniqCount(listOfProducts) {
    const obj1 = {

    };

    listOfProducts.forEach((el) => {
        obj1[el.productName] = (obj1[el.productName] || 0) + 1;
    });
    console.log(obj1);
};
uniqCount(listOfProducts);

function uniqProducts(listOfProducts) {
    const obj2 = {

    };

    listOfProducts.forEach((el) => {
        if (obj2[el.productName] == null) {
            obj2[el.productName] = el;
        } else {
            obj2[el.productName].quantity += el.quantity;
        }
    });
    console.log(obj2);
};

uniqProducts(listOfProducts);