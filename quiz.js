// Define quiz questions and possible results
     const questions = [
        { question: "How do you prefer to spend your free time?", options: ["Exploring new cities", "Relaxing on a beach", "Hiking in nature", "Immersing in cultural experiences"] },
        { question: "What type of climate do you enjoy the most?", options: ["Warm and sunny", "Tropical and humid", "Cool and breezy", "Mild and varied"] },
        { question: "What's your ideal accommodation for a vacation?", options: ["Trendy boutique hotel", "Cozy beachfront cottage", "Mountain cabin or lodge", "Charming bed and breakfast"] },
        {question: "How adventurous are you when it comes to trying new activities?", options: ["Very adventurous - I love trying new things!", "Moderately adventurous - I'll try some things but prefer relaxation.", "Slightly adventurous - I like sticking to what I know.", "Not adventurous at all - I prefer a calm and predictable experience."] },
        {question: "What's your ideal vacation length?", options: ["A few days", "A week", "Two weeks", "A month or more"] },
        {question:"What type of scenery do you prefer?", options: ["Cityscape", "Beach", "Mountains", "Historic town"]},
        {question:"What's your favorite type of food?", options: ["Sushi", "Seafood", "Fondue", "Pasta"]},  
        {question:"What's your favorite type of music?", options: ["Pop", "Reggae", "Classical", "Jazz"]},
        {question:"What's your favorite type of movie?", options: ["Action", "Romance", "Documentary", "Comedy"]},
        {question:"How important is it for you to experience local cuisine during your vacation?", options: ["Very important - I love trying new foods!", "Moderately important - I enjoy local flavors but have my limits.", "Slightly important - I prefer familiar foods.", "Not important at all - I stick to what I know."]},
    ];

    const results = [
        "You should visit a vibrant city! Perhaps Paris or Amsterdam.",
        "A tropical beach paradise awaits you! Consider Menorca or the Marbella.",
        "Nature is calling! Explore the mountains and forests in places like Switzerland or Canada.",
        "You'll love the charm of historic towns! Check out places like Milan or Brussels."
    ];

    // Initialize variables
    let currentQuestion = 0;
    let userAnswers = [];

    // Function to display the next question
    function nextQuestion(answer) {
        userAnswers.push(answer);

        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
        } else {
            displayResult();
        }
    }

    // Function to display the current question
    function displayQuestion() {
        const questionContainer = document.getElementById("questionContainer");
        const questionText = document.getElementById("question-text");
        const optionA = document.getElementById("optionA");
        const optionB = document.getElementById("optionB");
        const optionC = document.getElementById("optionC");
        const optionD = document.getElementById("optionD");

        const currentQ = questions[currentQuestion];
        questionText.textContent = currentQ.question;
        optionA.textContent = currentQ.options[0];
        optionB.textContent = currentQ.options[1];
        optionC.textContent = currentQ.options[2];
        optionD.textContent = currentQ.options[3];

        // Reset result container visibility
        document.getElementById("result-container").style.display = "none";
    }

    // Function to display the result
    function displayResult() {
        const resultContainer = document.getElementById("result-container");
        const resultText = document.getElementById("result-text");

        // Calculate the most frequent answer
        const mostFrequentAnswer = mode(userAnswers);
        const resultIndex = ["A", "B", "C", "D"].indexOf(mostFrequentAnswer);

        resultText.textContent = results[resultIndex];
        resultContainer.style.display = "block";

        // Hide the question container
        document.getElementById("questionContainer").style.display = "none";
    }


    // Function to find the mode of an array
    function mode(array) {
        if (array.length === 0) return null;
        let modeMap = {};
        let maxCount = 1;
        let modeValue = array[0];

        for (let i = 0; i < array.length; i++) {
            let el = array[i];

            if (modeMap[el] === null) modeMap[el] = 1;
            else modeMap[el]++;

            if (modeMap[el] > maxCount) {
                maxCount = modeMap[el];
                modeValue = el;
            }
        }

        return modeValue;
    }

    // Initial display
    displayQuestion();