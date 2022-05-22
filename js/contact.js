// VARIABLES
const regex = /^([a-zA-z0-9\._]+)@([a-zA-Z0-9]+)\.([a-z])+(.[a-z]+)?$/;
// SELECTORS
const User__Name = document.querySelector('[selector= "Name"]');
const User__Mail = document.querySelector('[selector= "Email"]');
const User__Message = document.querySelector('[selector= "Message"]');
// const Send__Btn = document.querySelector('[selector= "Send__Btn"]');
const Message__Box = document.querySelector('[selector= "Message__Box"]');
const Message__Content = document.querySelector(
  '[selector= "Message__Content"]'
);

// FUNCTIONS
function validateForm() {
  // EMPTY FIELD
  if (
    User__Name.value == '' ||
    User__Mail.value == '' ||
    User__Message.value == ''
  ) {
    displayMessage('Input field is empty');
    return;
  }
  // NAME WITH LESS THAN 3 LETTERS
  if (User__Name.value.length < 3) {
    displayMessage('Name should contain minimum 3 letters');
    return;
  }
  if (!regex.test(User__Mail.value)) {
    displayMessage('Invalid Mail ID');
    return;
  }
  sendMail();
}

function displayMessage(message) {
  Message__Box.classList.add('show');
  Message__Content.textContent = message;
  setTimeout(() => {
    Message__Content.textContent = message;
    Message__Box.classList.remove('show');
  }, 4000);
}
// 2d9c75e5-9242-4837-91c0-0d648ca1207c
// maharishi.rk27@gmail.com

// Mailbox name not allowed. The server response was: Envelope FROM 'maharishi.rk27@gmail.com' email address not allowed.
function sendMail() {
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'kendairishikesh5@gmail.com',
    Password: '279CA486BFF5B486BFD4673B9678D9E764FE',
    SecureToken: '2d9c75e5-9242-4837-91c0-0d648ca1207c',
    From: User__Mail.value,
    To: User__Mail.value,
    Subject: 'Working',
    Body: User__Message,
  })
    .then((message) => {
      alert(message);
      displayMessage('Mail sent successfully');
    })
    .catch((error) => {
      alert(error);
    });
}
