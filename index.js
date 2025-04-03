document.getElementsByClassName("pantalla").addEventListener("blur", function() {
    if (this.value === "") this.value = "0";
});