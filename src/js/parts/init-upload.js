const uploadFile = document.querySelector('.upload__field');
const uploadText = document.querySelector('.upload__text');

let loader = function(e) {
    let file = e.target.files;
    uploadText.innerHTML = file[0].name;
    uploadText.classList.add('active');
}

uploadFile.addEventListener('change', loader);