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

function setCookie(cookieName, cookieValue, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays*24*60*60*1000));
    let expires = date.toUTCString();
    document.cookie = `${cookieName}=${cookieValue}; expires=${expires}; path=/`
}

function deleteCookie(cookieName) {
    const date = new Date();
    date.setTime(date.getTime() + (24*60*60*1000));
    let expires = date.toUTCString();
    document.cookie = `${cookieName}=; expires=${expires}; path=/`
}

function getCookie(cookieName) {
    let name = `${cookieName}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    for(let i = 0; i <cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}