function onSubmitForm() {
    var formDetails = {
        name: document.querySelector('.careers-form .cus-name').value,
        email: document.querySelector('.careers-form .cus-email').value,
        phone: document.querySelector('.careers-form .cus-phone').value,
        message: document.querySelector('.careers-form .cus-msg').value,
        file: document.querySelector('.careers-form .cus-atc').value
    };
    var http = new XMLHttpRequest();
    http.open('POST', 'https://mail-service-c63p3wpkl-ssivakumar0407.vercel.app/api/email/', true);
    http.onreadystatechange = function () {
        if (this.readyState === this.DONE && this.status === 200) {
            // success response
        }
    };
    http.send(JSON.stringify(formDetails));
}
