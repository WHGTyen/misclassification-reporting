class Row {
    message: string;
    inferredLabel: string;
    correctlyClassified: boolean;
    comment: string;

    constructor(message: string, inferredLabel: string) {
        this.message = message
        this.inferredLabel = inferredLabel
    }

    addHumanCheck(correctlyClassified: boolean, comment?: string) : void {
        this.correctlyClassified = correctlyClassified
        this.comment = comment
    }
}

function pickRandomLetter() : string {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let letterIndex = Math.floor(Math.random() * alphabet.length)

    return alphabet[letterIndex]
}

function generateWord(minWordLength = 2, maxWordLength = 10) : string {
    let word = ""
    let wordLength = Math.floor(Math.random() * (maxWordLength - minWordLength)) + minWordLength
    
    for (let number = 0; number < wordLength; number++) {
        let randomLetter = pickRandomLetter()
        word = word.concat(randomLetter)
    }

    return word
}

function generateMessage(minWordCount = 3, maxWordCount = 20) : string {
    let message = []
    let messageLength = Math.floor(Math.random() * (maxWordCount - minWordCount)) + minWordCount

    for (let number = 0; number < messageLength; number++) {
        let randomWord = generateWord()
        message.push(randomWord)
    }
    
    return message.join(" ")
}

function pickRandomFromList(possibleItems: any[]) : any {
    let itemIndex = Math.floor(Math.random() * possibleItems.length)

    return possibleItems[itemIndex]
}
