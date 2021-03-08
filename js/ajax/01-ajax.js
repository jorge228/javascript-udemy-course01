/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const button = document.getElementById('button');

button.addEventListener('click', () => {
    let xhr;
    // para saber si funciona en versiones antiguas explorer
    // en consola escribir: 'XMLHttpRequest' in window
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => {

        console.log(typeof data.target.response);

        const dataJSON = JSON.parse(data.target.response);

        const list = document.getElementById('list');

        for (const userInfo of dataJSON) {
            const listItem = document.createElement('LI');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            list.appendChild(listItem);
        }

    });

    xhr.send();
    
});