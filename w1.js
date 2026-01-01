function sendmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("Email").value,
        input: document.getElementById("input").value,
    }
    const serviceID = "service_ynbt05q"
    const templateID = "template_mr9aggl"

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("input").value = "";
                console.log(res);
                alert("message sent")
            }
        )
        .catch((err) => console.log(err))
}


