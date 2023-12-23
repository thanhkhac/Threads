window.addEventListener('load', updateImageSize);

function updateImageSize() {
    // Lấy ra phần tử có id là mediaContainer
    var mediaContainer = document.getElementById('mediaContainer');
    // Lấy ra phần tử con đầu tiên là img
    var img = mediaContainer.querySelector('img');
    if (img.clientWidth > mediaContainer.clientWidth) {
        img.style.width = '100%';
        img.style.height = 'auto';
    }
}