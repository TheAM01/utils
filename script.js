function element(name, className, attributes, innerText) {

    const element = document.createElement(name);
    element.setAttribute("class", className);

    if (attributes) {

        Object.keys(attributes).forEach(attr => {
            element.setAttribute(attr, attributes[attr]);
        })
    }

    if (!!innerText) element.innerText = innerText;

    return element;

}

function appendChildren(element, children) {

    children.forEach(c => {
        element.appendChild(c);
    });

}

function buildDate() {

    const today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    if (date < 10) date = '0' + date;
    if (month < 10) month = '0' + month;

    const formatted = `${year}-${month}-${date}`;

    return formatted;

}