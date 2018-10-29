function getData(): string {
    let rowList: Row[] = []

    for (let rowIndex = 0; rowIndex < numberOfMessages; rowIndex++) {
        let message = document.getElementById("message" + rowIndex).innerText
        let inferredLabel = document.getElementById("label" + rowIndex).innerText
        let formElements = document.getElementsByName("verification" + rowIndex)
        let isCorrect = getSelectedValue(formElements)
        
        let commentElement = document.getElementsByName("comment" + rowIndex)[0] as HTMLInputElement
        let comment = commentElement.value

        let row = new Row(message, inferredLabel)
        row.addHumanCheck(isCorrect, comment)
        rowList.push(row)
    }
    return JSON.stringify(rowList, null, 4)
}

function getSelectedValue(buttons: NodeListOf<HTMLElement>): boolean {
    let selectedValue: string = undefined
    let numberOfSelectedOptions: number = 0

    for (let button of buttons) {
        let convertedElement: HTMLInputElement = button as HTMLInputElement
        if (convertedElement.checked) {
            selectedValue = convertedElement.value
            numberOfSelectedOptions = numberOfSelectedOptions++
        }
    }

    console.assert(selectedValue == null, "No option selected")
    console.assert(numberOfSelectedOptions == 1, "More than one option selected")
    console.assert(selectedValue == "yes" || selectedValue == "no", "%{selectedValue} undefined radio button value")
    
    if (selectedValue == "yes") {
        return true
    } else {
        return false
    }
}

function postData(): void {
    let request = new XMLHttpRequest()
    request.open("POST", "http://localhost:8080/post_data")
    request.setRequestHeader("Content-Type", "application/json")
    request.send(getData())
}

