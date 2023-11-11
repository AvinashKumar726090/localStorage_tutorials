const formInput = document.getElementById("userInputForm");
formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    var nameIn = document.getElementById('name').value;
    var emailIn = document.getElementById('eamil').value;
    var phoneIn = document.getElementById('phoneNo').value;
    const data = {
        "Name": nameIn,
        "Email": emailIn,
        "PhoneNumber": phoneIn
    }
    const dataStore = JSON.stringify(data);
    console.log(dataStore);
    localStorage.setItem("name",dataStore);
    formInput.reset();

});

