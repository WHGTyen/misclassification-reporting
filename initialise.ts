const numberOfMessages = 100

function addRow(table: HTMLElement, columns: HTMLElement[]) {
    let row = document.createElement("tr")
    for (let column of columns) {
        row.appendChild(column)
    }

    table.appendChild(row)
}

function createColumn(id: string): HTMLElement {
    let column = document.createElement("th")
    column.setAttribute("id", id)
    return column
}

function addText(element: HTMLElement, text: string) {
    let textNode = document.createTextNode(text)
    element.appendChild(textNode)
}

function addRadioButton(element: HTMLElement, value: string, name: string) {
    let radioButton = document.createElement("input")
    radioButton.setAttribute("type", "radio")
    radioButton.setAttribute("value", value)
    radioButton.setAttribute("name", name)
    element.appendChild(radioButton)
}

function addInputField(element: HTMLElement, name: string) {
    let inputField = document.createElement("input")
    inputField.setAttribute("type", "text")
    inputField.setAttribute("name", name)
    element.appendChild(inputField)
}

for (let number = 0; number < numberOfMessages; number++) {
    // <th id="message_0">
    //     Message
    // </th>
    let messageColumn = createColumn("message_" + number)
    addText(messageColumn, generateMessage())

    // <th id="label_0">
    //     Related or Unrelated
    // </th>
    let labelColumn = createColumn("label_" + number)
    addText(labelColumn, pickRandomFromList(["Related", "Unrelated"]))

    // <th id="tick_0">
    //     <input type="radio" name="verification_0" value="yes">Yes
    // </th>
    let tickColumn = createColumn("tick_" + )
    addRadioButton(tickColumn, "yes", "verification_" + number)
    addText(tickColumn, "Yes")

    // <th id="comment_0">
    //     <input type="radio" name="verification_0" value="no"> No, because:
    //     <input type="text" name="comment_0">
    // </th>
    let commentColumn = createColumn("comment_" + number)
    addRadioButton(commentColumn, "no", "verification_" + number)
    addText(commentColumn, "No, because: ")
    addInputField(commentColumn, "comment_" + number)

    let table = document.getElementById("table")
    addRow(table, [messageColumn, labelColumn, tickColumn, commentColumn])
}


