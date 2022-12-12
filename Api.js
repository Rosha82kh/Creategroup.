
    let data = {
        email: "user",
        password: "user"
    };
function login(){
    fetch("https://localhost:8080/api/Auth/Login"), {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }.then(res => {
        console.log("Request complete! response:", res);
    });

}
