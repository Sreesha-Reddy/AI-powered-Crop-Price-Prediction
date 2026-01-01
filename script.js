function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    // Add user message to chatbox
    const chatboxBody = document.getElementById('chatbox-body');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('chat-message', 'user-message');
    userMessageDiv.textContent = userInput;
    chatboxBody.appendChild(userMessageDiv);

    // Clear input field
    document.getElementById('user-input').value = '';

    // Simulate a bot response
    setTimeout(() => {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('chat-message', 'bot-message');
        
        // Bot response based on user input
        if (userInput.toLowerCase().includes('hello')) {
            botMessageDiv.textContent = 'Hi there! How can I assist you today?';
        } else if (userInput.toLowerCase().includes('time')) {
            botMessageDiv.textContent = `Current time is ${new Date().toLocaleTimeString()}`;
        } else if (userInput.toLowerCase().includes('date')) {
            botMessageDiv.textContent = `Today's date is ${new Date().toLocaleDateString()}`;
        } else if (userInput.toLowerCase().includes('weather')) {
            botMessageDiv.textContent = 'I can\'t provide weather updates at the moment.';
        } else {
            botMessageDiv.textContent = 'Sorry, I did not understand that.';
        }
        
        chatboxBody.appendChild(botMessageDiv);

        // Scroll to the bottom
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }, 500);
}

// Debugging: Log to verify script loading and function execution
console.log('Script loaded');
