var opt;

function select() {

opt = document.getElementById("select").value;
document.getElementById("loading").innerHTML = "You selected : " + opt + "<br> Waiting for response";

userInfo();
}

const URL = `https://dummyjson.com/users`;

let userInfo = async () => {
    let response = await fetch(URL);
    console.log(response);

    let data = await response.json();
    setTimeout(() => {
        document.write("<br> User Name is : "+ data.users[opt].firstName + " " + data.users[opt].lastName);
    }, 5000);

}
