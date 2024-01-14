// Get references to HTML elements
let imgBox = document.getElementById("imgBox");  // Container for the QR code image
let qrImage = document.getElementById("qrImage");  // Image element to display the QR code
let qrText = document.getElementById("qrText");    // Input field for the QR code text

// Function to generate QR code
function generateQR() {
  // Check if the input field has some text
  if (qrText.value.length > 0) {
    // Construct the QR code image URL using the QR Server API and the input text
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;

    // Show the container for the QR code image
    imgBox.classList.add("showImg");

    // Log a message to the console indicating successful QR code generation
    console.log("QR code generated successfully");
  } else {
    // If the input field is empty, add an "error" class to indicate an issue
    qrText.classList.add("error");

    // Remove the "error" class after a delay of 1000 milliseconds (1 second)
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);

    // Log a message to the console indicating an error
    console.log("Error: Input field is empty");
  }
}
