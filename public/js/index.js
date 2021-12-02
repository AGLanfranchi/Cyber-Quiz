const questions = [
    {
        question: "You received an email from Microsoft explaining that your password it out of date, and you must set a new one.  The link within the email will guide you through it.  Your next step is?",
        optionA: "Follow the link and reset your password",
        optionB: "Ignore the email and delete it",
        optionC: "Reset your password manually",
        optionD: "Forwrad email on to friends/family",
        correctOption: "optionB"
    },

    {
        question: "Which of the following passwords is the most secure?",
        optionA: "123456",
        optionB: "Car789",
        optionC: "ILoveMySon",
        optionD: "WTh!5Z",
        correctOption: "optionD"
    },

    {
        question: "What is the weakest link in cybersecurity",
        optionA: "Weak passwords",
        optionB: "Humans",
        optionC: "Weak encryption",
        optionD: "Bad IT department",
        correctOption: "optionB"
    },

    {
        question: "What’s the best way to secure a weak password like “house123”?",
        optionA: "Add an uppercase letter and a special character, such as @",
        optionB: "Don’t reuse it anywhere else or share it with anyone",
        optionC: "Enable two-factor authentication",
        optionD: "Add more numbers",
        correctOption: "optionC"
    },

    {
        question: "When is it OK to reuse a password?",
        optionA: "When you are logging into social media accounts",
        optionB: "When it is too hard to remember a long password",
        optionC: "Never",
        optionD: "If your boss or employers tell you to",
        correctOption: "optionC" 
    },

    {
        question: "What should you do if you think your identity or accounts have been compromised?",
        optionA: "Monitor your email address and accounts for fraudulent activity",
        optionB: "Subscribe to a monitoring service such as Lifelock or WebWatcher.",
        optionC: "Respond to the warning email you have received.",
        optionD: "Nothing, banks have systems in place to deal with this",
        correctOption: "optionA"
    },

    {
        question: "Which of the following describes Ransomware?",
        optionA: "Software that tracks a persons movements then takes them hostage when alone",
        optionB: "Takes control of your computer or phone while you are using it",
        optionC: "Malicious software designed to block access to a computer system until a sum of money is paid",
        optionD: "Spys on you and gathers information",
        correctOption: "optionC"
    },

    {
        question: "The best defense against ransomware is being proactive when you___",
        optionA: "Purchase comprehensive cybersecurity insurance",
        optionB: "Back up your data regularly",
        optionC: "Regularly update all your devices and software with the latest security patches",
        optionD: "Change your password regularly",
        correctOption: "optionB"
    },

    {
        question: "What will freezing your credit not affect?",
        optionA: "Vulnerability to identity theft",
        optionB: "Your workload",
        optionC: "Need to monitor financial statements for fraud",
        optionD: "Your credit score",
        correctOption: "optionD"
    },

    {
        question: "Which of the following describes Phishing?",
        optionA: "Attacks pretending to be legitimate with the aim of tricking people into revealing passwords or bank details.",
        optionB: "Tracking your computer movements and 'Phising out' your actions",
        optionC: "A way of stealing your identity",
        optionD: "All above",
        correctOption: "optionA"
    },

    {
        question: "What is the best way to stop falling for phishing scams?",
        optionA: "Email filters that block suspicious attachments",
        optionB: "Pop-up blockers",
        optionC: "Cybersecurity awareness training",
        optionD: "Antivirus software",
        correctOption: "optionC"
    },

    {
        question: "Which one of these things is most effective for maintaining your digital privacy?",
        optionA: "Unsubscribing from all spam emails",
        optionB: "Covering your computer’s front-facing camera",
        optionC: "Not sharing personal information on social media",
        optionD: "Installing Antivirus",
        correctOption: "optionC"
    },


    {
        question: "Which one of the following describes spam?",
        optionA: "Sending unwanted bulk messages",
        optionB: "Putting unnecessary load on the network by making copiesof files",
        optionC: "Performing an unauthorised, usually malicious, action suchas erasing files",
        optionD: "Gathering information about a person or organisation withouttheir knowledge",
        correctOption: "optionA"
    },

    {
        question: "Which one of the following is the unsafe online activity?",
        optionA: "Using a screen name or nick name that cannot identify you",
        optionB: "Meeting someone you met online face-to-face",
        optionC: "Giving your home address to someone you met in a chatroom",
        optionD: "Keeping your social network profile private",
        correctOption: "optionC"
    },

    {
        question: "Which one of the following should you do to ensure that your USB the storage device is kept safe and secure?",
        optionA: "Use firewall software",
        optionB: "Do not access it using a Bluetooth device",
        optionC: "Only use it in private surroundings",
        optionD: "Never leave it unattended.",
        correctOption: "optionD"
    },

    {
        question: "Why it is important to update antivirus software regularly?",
        optionA: "To prevent the spread of malicious programs on the Internet.",
        optionB: "To protect your computer from unwanted bulk messages.",
        optionC: "To protect your computer from all known viruses",
        optionD: "To ensure the software identifies old viruses.",
        correctOption: "optionC"
    },

    {
        question: "Which one of the following statements about a password is TRUE?",
        optionA: "It should be changed regularly",
        optionB: "It cannot contain special character symbols",
        optionC: "It must be changed only if it is compromised",
        optionD: "Write it down somwhere incase you forget it",
        correctOption: "optionA"
    },

    {
        question: "Which one of the following describes how confidential information should be sent using an unsecured network?",
        optionA: "In an unsigned email",
        optionB: "In a compressed format",
        optionC: "In an encrypted format",
        optionD: "In an attachment",
        correctOption: "optionC"
    },

    {
        question: "Which one of the following describes why firewalls are used? ",
        optionA: "To detect and disable viruses already on a computer",
        optionB: "To enable easy downloading of data from web sites",
        optionC: "To prevent destruction of a computer in the event of a fire",
        optionD: "To prevent unauthorised access by incoming transmissions",
        correctOption: "optionD"
    },

    {
        question: "What is recommended  to prevent the risk of unathorised access to home Wi-Fi?",
        optionA: "Change the default login credentials for the home router",
        optionB: "Disconnect the computer from the network",
        optionC: "Adjust the Internet security settings",
        optionD: "Complain to the Internet Service Provider",
        correctOption: "optionA"
    },

    {
        question: "Which one of the following could lead to the spread of a malicious program?",
        optionA: "Using only software that has been checked for viruses",
        optionB: "Opening only virus-checked file attachments from knownsources",
        optionC: "Maintaining regularly updated anti-virus software",
        optionD: "Using a USB Flash Drive from an unknown source to exchange data",
        correctOption: "optionD"
    },

    {
        question: "Which one of the following describes a computer hacker?",
        optionA: "A skilled programmer who writes programs to train newemployees",
        optionB: "A skilled programmer who secretly invades computerswithout authorisation",
        optionC: "A skilled programmer who uses authorised access to exploitinformation available on a computer",
        optionD: "A skilled programmer who helps in the installation of newsoftware for an organisation",
        correctOption: "optionB"
    },

    {
        question: "Which one of the following is MOST likely to be a hoax?",
        optionA: "An email from a friend you have not seen recently",
        optionB: "An email asking you to go to a website for a free computerscan",
        optionC: "An email advertisement from a local shop you subscribe to",
        optionD: "An email with an attachment sent by a colleague using their personal email address",
        correctOption: "optionB"
    },


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    //app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}