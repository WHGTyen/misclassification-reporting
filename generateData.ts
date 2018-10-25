class Row {
    message: string;
    inferredLabel: string;
    correctlyClassified: boolean;
    comment: string;

    constructor(message: string, inferredLabel: string) {
        this.message = message
        this.inferredLabel = inferredLabel
    }

    addHumanCheck(correctlyClassified: boolean, comment?: string) {
        this.correctlyClassified = correctlyClassified
        this.comment = comment
    }
}

function pickRandomLetter() {
    let letterIndex = Math.floor(Math.random() * 26)

    return "abcdefghijklmnopqrstuvwxyz".charAt(letterIndex)
}

function generateWord(maxWordLength = 10) {
    let word = ""
    let wordLength = Math.floor(Math.random() * maxWordLength)
    
    for (let number = 0; number < wordLength; number++) {
        let randomLetter = pickRandomLetter()
        word = word.concat(randomLetter)
    }

    return word
}

function generateMessage(minMessageLength = 3, maxMessageLength = 20) {
    let message = []
    let messageLength = Math.floor(Math.random() * (maxMessageLength - minMessageLength)) + minMessageLength

    for (let number = 0; number < messageLength; number++) {
        let randomWord = generateWord()
        message.push(randomWord)
    }
    
    return message.join(" ")
}

function pickRandomLabel(possibleLabels: string[]) {
    let labelIndex = Math.floor(Math.random() * possibleLabels.length)

    return possibleLabels[labelIndex]
}

function generateDataset(numberOfMessages: number, possibleLabels: string[]) {
    for (let messageIndex = 0; messageIndex < messageIndex; messageIndex++) {
        
    }
}

