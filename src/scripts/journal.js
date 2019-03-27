let apiURL = "http://localhost:8088"
let displayContainer = document.querySelector("#entryLog")

const journalEntry = {
    date: "",
    concepts: "",
    entry: "",
    mood: ""

}

const makeJournalEntryComponent = (journalEntries) => {
    for (i = 0; i < journalEntries.length; i++)
        journalHTML = `<h1>${journalEntries[i]["concepts"]}</h1>
        <div>Today, ${journalEntries[i]["date"]}, ${journalEntries[i]["statement"]}</div> 
        <h3>I feel ${journalEntries[i]["mood"]}</h3>`

    displayContainer.innerHTML += journalHTML

}

let getEntries = () => {
    fetch("http://localhost:8088/entries")
        .then(entries => entries.json())
        .then(parsedEntries => {
            makeJournalEntryComponent(parsedEntries)
        })
}




getEntries()