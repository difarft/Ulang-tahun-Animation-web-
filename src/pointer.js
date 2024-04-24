const kado = document.getElementById('kado');
const nama = document.getElementById('nameIn');


document.querySelector('.kado-img').addEventListener('click' , function () {
    console.log("tekan");

    kado.style.display = 'none';

    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
})

function main(){
    console.log("masuk");
    console.log(nama);
}


