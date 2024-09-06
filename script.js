document.addEventListener('DOMContentLoaded', function() {
    console.log('The website is fully loaded.');

    const imageElement = document.getElementById('myImage');
    const image1 = 'image1.jpg';
    const image2 = 'image2.jpg';

    imageElement.addEventListener('click', function() {
        if (imageElement.src.includes(image1)) {
            imageElement.src = image2;
        } else {
            imageElement.src = image1;
        }
    });
});
