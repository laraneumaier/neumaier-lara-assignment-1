// Ajax Request
fetch('data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
    var Container = document.getElementById("personen");
    var randomnumber = (Math.floor(Math.random() * 9))+1; // random number von 0-9
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[randomnumber].firstName + ' ' + data[randomnumber].lastName + " " + "Email: " + data[randomnumber].email;
    Container.appendChild(div);
    
}