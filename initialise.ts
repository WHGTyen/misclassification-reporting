const numberOfMessages = 100

for (let number = 0; number < numberOfMessages; number++) {
    // <th id="message">
    //     Message
    // </th>
    let messageColumn = document.createElement("th")
    messageColumn.setAttribute("id", "message")
    let messageText = document.createTextNode(generateMessage())
    messageColumn.appendChild(messageText)

    // <th id="label">
    //     Related or Unrelated
    // </th>
    let labelColumn = document.createElement("th")
    labelColumn.setAttribute("id", "label")
    let labelText = document.createTextNode(pickRandomLabel(["Related", "Unrelated"]))
    labelColumn.appendChild(labelText)

    // <th id="tick">
    //     <input type="radio" name="verification0" value="yes">Yes
    // </th>
    let tickColumn = document.createElement("th")
    tickColumn.setAttribute("id", "tick")
    let tickRadio = document.createElement("input")
    tickRadio.setAttribute("type", "radio")
    tickRadio.setAttribute("name", "verification" + number)
    tickRadio.setAttribute("value", "yes")
    tickColumn.appendChild(tickRadio)
    let tickText = document.createTextNode("Yes")
    tickColumn.appendChild(tickText)

    // <th id="comment">
    //     <input type="radio" name="verification0" value="no"> No, because: 
    //     <input type="text" name="comment0">
    // </th>
    let commentColumn = document.createElement("th")
    commentColumn.setAttribute("id", "comment")
    let commentRadio = document.createElement("input")
    commentRadio.setAttribute("type", "radio")
    commentRadio.setAttribute("name", "verification" + number)
    commentRadio.setAttribute("value", "no")
    commentColumn.appendChild(commentRadio)
    let commentText = document.createTextNode("No, because: ")
    commentColumn.appendChild(commentText)
    let commentInput = document.createElement("input")
    commentInput.setAttribute("type", "text")
    commentInput.setAttribute("name", "comment" + number)
    commentColumn.appendChild(commentInput)

    let row = document.createElement("tr")
    row.appendChild(messageColumn)
    row.appendChild(labelColumn)
    row.appendChild(tickColumn)
    row.appendChild(commentColumn)

    let table = document.getElementById("table")
    table.appendChild(row)
}


