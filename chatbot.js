function handleButtonClick(option) {
    console.log("Button clicked:", option);
    const messages = document.getElementById("chatbot-messages");

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = option;
    messages.appendChild(userMessage);
    scrollToBottom();

    const typingBubble = document.createElement("div");
    typingBubble.classList.add("message", "bot-message", "typing");

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("typing-dots");

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("div");
        dot.classList.add("typing-dot");
        dotsContainer.appendChild(dot);
    }

    typingBubble.appendChild(dotsContainer);
    messages.appendChild(typingBubble);
    scrollToBottom();

    setTimeout(() => {
        messages.removeChild(typingBubble);

        let botMessage = "";
        

// Handle weather request
if (option === "🌦️Current Conditions") {
    const apiKey = "edb1145d41fca6184a60f131bfce361f";
    const city = "Savannah,US"; // Add ,US for country code

    // Display the introductory message first
    const introMessage = document.createElement("div");
    introMessage.classList.add("message", "bot-message");
    introMessage.innerHTML = `Let's take a look and see what the current conditions are at <strong>Whispering Pines</strong>...🌲`;
    messages.appendChild(introMessage);
    scrollToBottom();

    // After the intro message finishes, fetch the weather data
    setTimeout(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const feelsLike = data.main.feels_like;
            const humidity = data.main.humidity; // Get humidity
            const windSpeed = data.wind.speed; // Get wind speed

            // Capitalize each word in the weather description
            const conditions = data.weather[0].description
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            // Weather condition to emoji mapping
            let weatherIcon = "🌤️"; // Default icon
            if (conditions.includes("clear")) {
                weatherIcon = "☀️";
            } else if (conditions.includes("rain")) {
                weatherIcon = "🌧️";
            } else if (conditions.includes("cloud")) {
                weatherIcon = "☁️";
            } else if (conditions.includes("snow")) {
                weatherIcon = "❄️";
            } else if (conditions.includes("thunderstorm")) {
                weatherIcon = "⛈️";
            }

            // Display the weather message after the delay
            const botResponse = document.createElement("div");
            botResponse.classList.add("message", "bot-message");
            botResponse.innerHTML = `
                ${weatherIcon} The current weather at Whispering Pines is:<br>
                <strong>Temperature:</strong> ${temperature}°F<br>
                <strong>Conditions:</strong> ${conditions}<br>
                <strong>Feels Like:</strong> ${feelsLike}°F<br>
                <strong>Humidity:</strong> ${humidity}%<br>
                <strong>Wind Speed:</strong> ${windSpeed} MPH
            `;
            messages.appendChild(botResponse);
            scrollToBottom();
        })
        .catch(error => {
            // Handle errors, like network issues or if the weather data can't be fetched
            const errorMessage = document.createElement("div");
            errorMessage.classList.add("message", "bot-message");
            errorMessage.innerHTML = `⚠️ Oops! There was an error fetching the weather data. Please refer to your preferred weather source.`;
            messages.appendChild(errorMessage);
            scrollToBottom();
        });
    }, 1000); // Delay for 1 second before fetching and displaying the weather

    return; // Stop processing further
}

        switch (option) {
            case "Option 1️⃣":
                const botResponse = document.createElement("div");
                botResponse.classList.add("message", "bot-message");
                botResponse.innerHTML = "<strong>Awesome!</strong> 👏 You're now interacting with our live demo chatbot. I'll show you some of the helpful features I can offer your business — from answering customer questions to pulling data from your site and more. Feel free to explore!";
                messages.appendChild(botResponse);
                scrollToBottom();
                return;

            case "Course Info⛳":
                botMessage = "You’ve selected '<strong>Course Info</strong>' Let me give you the lay of the land ⛳️. Whether you’re curious about <strong>tee times</strong>, <strong>course layout</strong>, or our <strong>legendary 18th hole</strong>, I’ve got the details lined up like a perfect fairway shot!";
                break;
            case "🏌️Course Layout":
                botMessage = 'Featuring a beautifully designed <a href="course.html" target="_blank" style="color: #355E3B; font-weight: bold; text-decoration: underline;">18-hole course</a> among scenic pine groves.🌲<br><strong>Front 9:</strong> A strategic mix of par 3s and 4s.<br><strong>Back 9:</strong> More challenging with elevation changes, & water hazards.';
                break;
            case "🕐Tee Times & Hours":
                botMessage = `Our tee times are available every day, from <strong>6:50 AM to 6:00 PM</strong>, giving you plenty of opportunities to enjoy our 18-hole championship course.👍🏼`;
                break;
            case "📜History":
                botMessage = 'Founded in 1963 by the visionary golf enthusiast <strong>Harold “Hal” Whitmore</strong>, Whispering Pines was carved out of 200 acres of rolling Southern woodland. <a href="history.html" target="_blank" style="color: #355E3B; font-weight: bold; text-decoration: underline;">Read more</a>...';
                break;                
            case "Clubhouse🏌️":
                botMessage = 'Our clubhouse offers a <strong>full-service bar</strong>, a cozy <strong>dining area</strong>, and a <strong>pro shop</strong> with everything you need for your game. Would you like to know more about our menu, or event calendar?📅';
                break;                  
            case "Pine View Grill🌲":
                botMessage = "Where <strong>great food and scenic views meet.</strong> Whether you're looking to unwind after a round or enjoy a casual meal with friends, we’ve got something for everyone. <a href='menu.html' target='_blank' style='color: #355E3B; font-weight: bold; text-decoration: underline;'>View the menu here!</a>";
                break;             
            case "Club Events🏌️":
                botMessage = "From <strong>golf tournaments</strong> to <strong>social gatherings</strong>, there's always something happening at Whispering Pines. Join us for some fun on and <a href='event.html' target='_blank' style='color: #355E3B; font-weight: bold; text-decoration: underline;'>off the course</a>!🎉";
                break;                               
            case "Resort🏨":
                botMessage = `Featuring <strong>60 beautifully appointed rooms</strong> designed for comfort and relaxation, our resort offers the perfect blend of <strong>nature, elegance, and serenity.</strong> <a href="resort.html" target="_blank" style='color: #355E3B; font-weight: bold; text-decoration: underline;'>See more</a>...🌿`;
                break;                
            case "Contact📞":
                botMessage = "Have questions or need assistance? We’re here to help! Reach us at <strong>(555) 123-4567</strong> or visit us at <strong>789 Pinecone Ridge Road, Evergreen Hills, CO 00000</strong>. We look forward to hearing from you! 🌲📞";
                break;                
            default:
                botMessage = "I'm not sure how to respond to that. Please choose a valid option.";
                break;
        }

        const botResponse = document.createElement("div");
        botResponse.classList.add("message", "bot-message");
        botResponse.innerHTML = botMessage;
        messages.appendChild(botResponse);
        scrollToBottom();

        if (option === "Course Info⛳") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");
                buttonContainer.appendChild(createButton("🏌️Course Layout"));
                buttonContainer.appendChild(createButton("🕐Tee Times & Hours"));
                buttonContainer.appendChild(createButton("🌦️Current Conditions"));
                buttonContainer.appendChild(createButton("📜History"));
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

        if (option === "Clubhouse🏌️") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");
                buttonContainer.appendChild(createButton("Pine View Grill🌲"));
                buttonContainer.appendChild(createButton("Club Events🏌️"));
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

        if (option === "💬24/7 Support") {
            setTimeout(() => {
                const buttonContainer = document.createElement("div");
                buttonContainer.classList.add("button-container");
                buttonContainer.appendChild(createButton("👋 Instant Support"));
                buttonContainer.appendChild(createButton("👤 Workload"));
                messages.appendChild(buttonContainer);
                scrollToBottom();
            }, 1000);
        }

    }, 1000);
}

function displayBotMessage(message) {
    const messages = document.getElementById("chatbot-messages");
    const botResponse = document.createElement("div");
    botResponse.classList.add("message", "bot-message");
    botResponse.innerHTML = message;
    messages.appendChild(botResponse);
    scrollToBottom();
}

function createButton(label, url = null) {
    let button;

    if (url) {
        button = document.createElement("a");
        button.href = url;
        button.target = "_blank";
        button.classList.add("chatbot-btn", "chatbot-link-btn");
    } else {
        button = document.createElement("button");
        button.classList.add("chatbot-btn");
        button.onclick = () => handleButtonClick(label);
    }

    button.textContent = label;
    return button;
}

function greetUser() {
    const messages = document.getElementById("chatbot-messages");

    // First greeting message
    const greetingMessage1 = document.createElement("div");
    greetingMessage1.classList.add("message", "bot-message");
    greetingMessage1.innerHTML = "Welcome to <strong>Whispering Pines</strong>! 🌲 Whether you’re looking for the latest <strong>course conditions</strong>, <strong>course info</strong>, or <strong>club details</strong>, I’m here to help! 🏌️‍♀️";
    messages.appendChild(greetingMessage1);

    scrollToBottom();
}

window.onload = greetUser;

function scrollToBottom() {
    const chatBody = document.querySelector(".chat-body");
    if (chatBody) {
        chatBody.scrollTo({
            top: chatBody.scrollHeight,
            behavior: "smooth"
        });
    }
}
