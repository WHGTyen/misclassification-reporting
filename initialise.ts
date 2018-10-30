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

function addRadioButton(element: HTMLElement, value: string, name: string, onchange: string) {
    let radioButton = document.createElement("input")
    radioButton.setAttribute("type", "radio")
    radioButton.setAttribute("value", value)
    radioButton.setAttribute("name", name)
    radioButton.setAttribute("onchange", onchange)
    element.appendChild(radioButton)
}

function addInputField(element: HTMLElement, name: string, onchange: string) {
    let inputField = document.createElement("input")
    inputField.setAttribute("type", "text")
    inputField.setAttribute("name", name)
    inputField.setAttribute("onchange", onchange)
    element.appendChild(inputField)
}

for (let number = 0; number < numberOfMessages; number++) {
    // <th id="message0">
    //     Message
    // </th>
    let messageColumn = createColumn("message" + number)
    addText(messageColumn, generateMessage())

    // <th id="label0">
    //     Related or Unrelated
    // </th>
    let labelColumn = createColumn("label" + number)
    addText(labelColumn, pickRandomFromList(["Related", "Unrelated"]))

    // <th id="tick0">
    //     <input type="radio" name="verification" value="yes" onchange="checkInput(0)">Yes
    // </th>
    let tickColumn = createColumn("tick" + number)
    addRadioButton(tickColumn, "yes", "verification" + number, "checkRowInput(" + number + ")")
    addText(tickColumn, "Yes")

    // <th id="comment0">
    //     <input type="radio" name="verification0" value="no" onchange="checkInput(0)"> No, because: 
    //     <input type="text" name="comment0" onchange="checkInput(0)">
    // </th>
    let commentColumn = createColumn("comment" + number)
    addRadioButton(commentColumn, "no", "verification" + number, "checkRowInput(" + number + ")")
    addText(commentColumn, "No, because: ")
    addInputField(commentColumn, "comment" + number, "checkRowInput(" + number + ")")

    let table = document.getElementById("table")
    addRow(table, [messageColumn, labelColumn, tickColumn, commentColumn])
}

