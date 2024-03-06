const addProduct = () =>{
    const names = document.getElementById('name');
    const quantity = document.getElementById('quantity');
    const product = names.value;
    const productValue = quantity.value;
    names.value = '';
    quantity.value = '';
    displayProduct(product,productValue);
    saveProduct(product,productValue)
}

const displayProduct = (product,productValue) =>{
    const ul = document.getElementById('container');
    const li = document.createElement('li');
    li.innerHTML = `${product}: ${productValue}`
    ul.appendChild(li)
}

const getStoreShoppingCard = () =>{
    const storeCard = localStorage.getItem('card');
    let card = {};
    if(storeCard){
        card = JSON.parse(storeCard)
    }
    return card
}

const saveProduct = (product,quantity) =>{
    const card = getStoreShoppingCard();
    card[product] = quantity;
    const cardStringify = JSON.stringify(card);
    localStorage.setItem('card',cardStringify)
}

const showDisplay = () =>{
    const saveCard = getStoreShoppingCard();
    for(const product in saveCard){
        const quantity = saveCard[product]
        displayProduct(product,quantity)
    }
}
showDisplay()