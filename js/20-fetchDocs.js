/*
    Fetch API
        blob(): Binary Long OBject
        Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla

        URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/

const buttonImg = document.getElementById('button-img');
const buttonPDF = document.getElementById('button-pdf');

buttonImg.addEventListener('click', () => {
    fetch('images/dog.jpg')
        .then(res => res.blob())
        .then(img => {
            document.getElementById('img').src = URL.createObjectURL(img);
        })
});

buttonPDF.addEventListener('click', () => {
    alert('Pula sobre descargar');
    fetch('pdf/demo.pdf')
        .then(res => res.blob())
        .then(pdf => {
            document.getElementById('pdf').href = URL.createObjectURL(pdf);
        });
});