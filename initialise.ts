const numberOfMessages = 100

function addRow(table: HTMLElement, columns: HTMLElement[]) {
    let row = document.createElement("tr")
    for (let column of columns) {
        row.appendChild(column)
    }
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

function addRadioButton(element: HTMLElement, text: string, name: string) {
    let radioButton = document.createElement("input")
    radioButton.setAttribute("type", "radio")
    radioButton.setAttribute("value", text)
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
    // <th id="message">
    //     Message
    // </th>
    let messageColumn = createColumn("message")
    addText(messageColumn, generateMessage())

    // <th id="label">
    //     Related or Unrelated
    // </th>
    let labelColumn = createColumn("label")
    addText(labelColumn, pickRandomLabel(["Related", "Unrelated"]))

    // <th id="tick">
    //     <input type="radio" name="verification" value="yes">Yes
    // </th>
    let tickColumn = createColumn("tick")
    addRadioButton(tickColumn, "yes", "verification")
    addText(tickColumn, "Yes")

    // <th id="comment">
    //     <input type="radio" name="verification" value="no">No, because: <input type="text" name="comment">
    // </th>
    let commentColumn = createColumn("comment")
    addRadioButton(commentColumn, "no", "verification")
    addText(commentColumn, "No, because: ")
    addInputField(commentColumn, "comment")

    let table = document.getElementById("table")
    addRow(table, [messageColumn, labelColumn, tickColumn, commentColumn])
}


