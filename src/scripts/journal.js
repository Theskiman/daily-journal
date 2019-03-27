
let displayContainer = document.querySelector("#entryLog")

const journalEntry = {
    date: "",
    concepts: "",
    entry: "",
    mood: ""

}

entries = [{
    
    date: "3/27/2019",
    concepts: "Browsify",
    statement: "We were introduced to browsify it undermined some of the things we have alreay learned but overall I understood the basics of it.",
    mood: "Happy"
}
]

const makeJournalEntryComponent = (journalEntries) =>{
    for(i = 0; i < journalEntries.length; i++)
    journalHTML = `<div>Today, ${journalEntries[i]["date"]}, we covered the topic ${journalEntries[i]["concepts"]}. ${journalEntries[i]["statement"]} and I feel ${journalEntries[i]["mood"]}`
    
        displayContainer.innerHTML += journalHTML
    
}


makeJournalEntryComponent(entries)