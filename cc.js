function sendMessage() {
    let userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return; // Don't send empty messages

    // Display the user's message
    displayMessage(userInput, 'user');

    // Clear input field
    document.getElementById('user-input').value = "";

    // Get AI response (this can be enhanced with more sophisticated AI)
    let botResponse = getBotResponse(userInput);

    // Display the bot's response
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 500);
}

function displayMessage(message, sender) {
    let chatBox = document.getElementById('chat-box');
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    messageDiv.classList.add(sender + '-message');
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
}

function getBotResponse(userInput) {
    const userMessage = userInput.toLowerCase();

    // Simple AI responses based on keywords
    if (userMessage.includes("hello") || userMessage.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (userMessage.includes("how are you")) {
        return "I'm doing great, thank you for asking!";
    } else if (userMessage.includes("your name")) {
        return "I am your friendly chatbot!";
    } else if (userMessage.includes("bye")) {
        return "Goodbye! Take care!";
    } else {
        return "Sorry, I didn't quite understand that. Can you try asking something else?";
    }
}
