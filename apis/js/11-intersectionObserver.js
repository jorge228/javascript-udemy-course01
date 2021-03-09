const images = document.getElementById('images');
let init = 1;

const getImages = (num) => {
    init++;
    axios(`https://picsum.photos/v2/list?page=${num}&limit=5`)
        .then(res => {
            const fragment = document.createDocumentFragment();
            res.data.forEach(element => {
                const newImage = document.createElement('IMG');
                newImage.src = element.download_url;
                fragment.appendChild(newImage);
            });
            images.appendChild(fragment);
            setObserver();
        });
}

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            getImages(init);
        } else {
            //quitar animación
        }
    });
}

const setObserver = () => {
    const options = {
        threshold: 0.5
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(images.lastElementChild);
}

getImages(this.init);