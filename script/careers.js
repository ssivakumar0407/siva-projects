function onSubmitForm() {
    var formDetails = {
        name: document.querySelector('.careers-form .cus-name').value,
        email: document.querySelector('.careers-form .cus-email').value,
        phone: document.querySelector('.careers-form .cus-phone').value,
        message: document.querySelector('.careers-form .cus-msg').value,
        file: selectedFile
    };
    var http = new XMLHttpRequest();
    http.open('POST', 'https://mail-service-peach.vercel.app/api/email/', true);
    http.setRequestHeader("Accept", "application/json");
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function () {
        if (this.readyState === this.DONE && this.status === 200) {
            // success response
        }
    };
    http.send(JSON.stringify(formDetails));
}

var selectedFile = [];

document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.querySelector('.careers-form .cus-atc');
    fileInput.onchange = () => {
        selectedFile = [];
        for (var a = 0; a < fileInput.files.length; a++) {
            var reader = new FileReader();
            reader.onload = (evt) => {
                selectedFile.push(evt.target.result);
            };
            reader.readAsText(fileInput.files[a]);
        }
    }
});