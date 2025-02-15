function readInput(event) {
    event.preventDefault();

    // Create a JavaScript object and convert it to JSON
    let formData = {
        name: document.getElementById("Name").value.trim(),
        email: document.getElementById("email").value.trim()
    };

    fetch("http://127.0.0.1:5000/api/users/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // ✅ Specify JSON content type
        },
        body: JSON.stringify(formData)  // ✅ Convert to JSON
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("output").innerText = "Server Response: " + JSON.stringify(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
