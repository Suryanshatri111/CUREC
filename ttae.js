// Function to open the booking form and pre-fill doctor details
function openBookingForm(doctorName, specialty) {
    document.getElementById('doctor-name').innerText = doctorName;
    document.getElementById('booking-form').style.display = 'block';
}

// Function to close the booking form
function closeBookingForm() {
    document.getElementById('booking-form').style.display = 'none';
}

// Function to handle form submission
function submitAppointment(event) {
    event.preventDefault();  // Prevent form from reloading the page

    let patientName = document.getElementById('patient-name').value;
    let appointmentDate = document.getElementById('appointment-date').value;
    let appointmentTime = document.getElementById('appointment-time').value;
    
    alert(`Appointment Confirmed!\nPatient Name: ${patientName}\nDate: ${appointmentDate}\nTime: ${appointmentTime}`);
    
    // Reset the form and close the booking form
    document.getElementById('appointment-form').reset();
    closeBookingForm();
}
