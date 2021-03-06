let isValid = new Array<boolean>(numberOfMessages).fill(false)

function checkRowInput(messageIndex: number) : void {
    let rowElements = document.getElementsByName("verification" + messageIndex)
    let yesButton = rowElements[0] as HTMLInputElement
    let noButton = rowElements[1] as HTMLInputElement
    let comment = document.getElementsByName("comment" + messageIndex)[0] as HTMLInputElement
    
    if ( yesButton.checked || (noButton.checked && comment.value.length > 0) ) {
        isValid[messageIndex] = true
    } else {
        isValid[messageIndex] = false
    }
    updateSendButton()
}

function updateSendButton() : void {
    let formIsValid = true
    for (let bool of isValid) {
        if (bool == false) {
            formIsValid = false
        }
    }

    let sendButton = document.getElementById("send")
    if (formIsValid) {
        sendButton.setAttribute("type", "submit")
    } else {
        sendButton.setAttribute("type", "hidden")
    }
}
