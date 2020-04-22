const electron = require('electron');
const path = require('path'); //for working with files
const axios = require('axios');

const createNode = (elem) => {
    return document.createElement(elem);
};

// append an element to parent
const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}

// List Element
const ul = document.querySelector('#users-container');

function getUserlist() {
    axios.get('https://api.github.com/users')
        .then( res => {
            const user = res.data;
            user.map((user) => {
                // create the elements
                let li = createNode('li'),
                    img = createNode('img'),
                    span = createNode('span');
                img.src = user.avatar_url;
                span.innerText = user.login;
                // append all elements
                appendNode(li, img);
                appendNode(li, span);
                appendNode(ul, li);
            });


            //price.innerHTML = `$ ${cryptos.toLocaleString('en')}` //replacing the h1 with the current BTC price
            console.log("Sashwat", user);

        })
}
getUserlist(); //calling the function to run it
setInterval(getUserlist, 10000); //then calling again every 30s