var phoneBook = []

function addContact(userName, userNumber) {
    var contactObject = {
      contactName: userName,
      contactNumber: userNumber,
    };
  phoneBook.push(contactObject)
  alert("Contact added, phonebook updated")
}

function submitContact() {
    var userName = document.getElementById("userName").value;
    var userNumber = document.getElementById("userNumber").value;
    
    var contact = {
        name: userName,
        number: userNumber
    };

    if (userName === "" || userNumber === "") {
        alert("Both fields are required");
    } else {
        addContact(userName, userNumber);
    }
    phoneBook.push(contact)
    document.getElementById("userName").value = ""
    document.getElementById("userNumber").value = ""
}

function viewContacts() {
    console.log("phoneBook", phoneBook)
  }

  