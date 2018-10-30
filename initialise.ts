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
    // <th id="message">
    //     Message
    // </th>
    let messageColumn = createColumn("message")
    addText(messageColumn, generateMessage())

    // <th id="label">
    //     Related or Unrelated
    // </th>
    let labelColumn = createColumn("label")
    addText(labelColumn, pickRandomFromList(["Related", "Unrelated"]))

    // <th id="tick">
    //     <input type="radio" name="verification" value="yes" onchange="checkInput(0)">Yes
    // </th>
<<<<<<< HEAD
    let tickColumn = document.createElement("th")
    tickColumn.setAttribute("id", "tick")
    let tickRadio = document.createElement("input")
    tickRadio.setAttribute("type", "radio")
    tickRadio.setAttribute("name", "verification" + number)
    tickRadio.setAttribute("value", "yes")
    tickRadio.setAttribute("onchange", "checkRowInput(" + number + ")")
    tickColumn.appendChild(tickRadio)
    let tickText = document.createTextNode("Yes")
    tickColumn.appendChild(tickText)
=======
    let tickColumn = createColumn("tick")
    addRadioButton(tickColumn, "yes", "verification")
    addText(tickColumn, "Yes")
>>>>>>> 3d59f2ff03e409c6078d74262114b2828bc14ddf

    // <th id="comment">
    //     <input type="radio" name="verification0" value="no" onchange="checkInput(0)"> No, because: 
    //     <input type="text" name="comment0" onchange="checkInput(0)">
    // </th>
<<<<<<< HEAD
    let commentColumn = document.createElement("th")
    commentColumn.setAttribute("id", "comment")
    let commentRadio = document.createElement("input")
    commentRadio.setAttribute("type", "radio")
    commentRadio.setAttribute("name", "verification" + number)
    commentRadio.setAttribute("value", "no")
    commentRadio.setAttribute("onchange", "checkRowInput(" + number + ")")
    commentColumn.appendChild(commentRadio)
    let commentText = document.createTextNode("No, because: ")
    commentColumn.appendChild(commentText)
    let commentInput = document.createElement("input")
    commentInput.setAttribute("type", "text")
    commentInput.setAttribute("name", "comment" + number)
    commentInput.setAttribute("onchange", "checkRowInput(" + number + ")")
    commentColumn.appendChild(commentInput)

    let row = document.createElement("tr")
    row.appendChild(messageColumn)
    row.appendChild(labelColumn)
    row.appendChild(tickColumn)
    row.appendChild(commentColumn)
=======
    let commentColumn = createColumn("comment")
    addRadioButton(commentColumn, "no", "verification")
    addText(commentColumn, "No, because: ")
    addInputField(commentColumn, "comment")
>>>>>>> 3d59f2ff03e409c6078d74262114b2828bc14ddf

    let table = document.getElementById("table")
    addRow(table, [messageColumn, labelColumn, tickColumn, commentColumn])
}


