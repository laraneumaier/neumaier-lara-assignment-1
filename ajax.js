// Ajax Request
fetch('data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err); // Fehler abfangen
});

function appendData(data) {
    let Container = document.getElementById("personen");
    let randomnumber = (Math.floor(Math.random() * 9)); // random number von 0-9
    let div = document.createElement("div");
    div.innerHTML = data[randomnumber].firstName + " " + data[randomnumber].lastName + "</br>" + "Email: " + data[randomnumber].email;
    Container.appendChild(div);  // heftet div Element an Container
}
