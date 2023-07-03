function onSubmitForm() {
    var formDetails = {
        name: document.querySelector('.careers-form .cus-name').value,
        email: document.querySelector('.careers-form .cus-email').value,
        phone: document.querySelector('.careers-form .cus-phone').value,
        message: document.querySelector('.careers-form .cus-msg').value,
        file: selectedFile
    };
    var http = new XMLHttpRequest();
    http.open('POST', 'https://vercel.com/ssivakumar0407/mail-service/api/email/', 'true');
    http.setRequestHeader("Accept", "application/json");
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function (evt) {
        if (this.readyState === this.DONE && this.status === 200) {
            alert(JSON.parse(evt.target.response).message);
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
            var fileDetails = {
                name: fileInput.files[a].name,
                type: fileInput.files[a].type,
            };
            var reader = new FileReader();
            reader.onload = (evt) => {
                fileDetails.contentString = evt.target.result;
                selectedFile.push(fileDetails);
            };
            reader.readAsDataURL(fileInput.files[a]);
        }
    }
});