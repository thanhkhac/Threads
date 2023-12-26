window.addEventListener('load', updateImageSizeForSingleMedia);

function updateImageSizeForSingleMedia() {
    var singleMediaNodes = document.querySelectorAll('.threads__post__body__singlemedia');
    console.log(singleMediaNodes.length);
    for (var i = 0; i < singleMediaNodes.length; i++) {
        var img = singleMediaNodes[i].querySelector('img');
        if(img == null){
            img = singleMediaNodes[i].querySelector('video');
        }
        img.style.width = 'auto';
        img.style.height = '60vh';
        if (img.clientWidth > singleMediaNodes[i].clientWidth) {
            img.style.width = '100%';
            img.style.height = 'auto';
        } 
    }

}