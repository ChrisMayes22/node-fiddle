console.log('Notes Running')
const fs = require('fs');

module.exports = {
    add: (title, body) => {
        const note = {title, body};
        let notes = []
        try{
            notes = JSON.parse(fs.readFileSync('./playground/notes.json'));
        } catch (e){

        }
        if(!notes[0]){
            notes.push(note);
            fs.writeFileSync('./playground/notes.json', JSON.stringify(notes));
        } else {
            notes.forEach(item => {
            if(item.title !== title){
                notes.push(note);
                fs.writeFileSync('./playground/notes.json', JSON.stringify(notes));
            } else {
                console.log('ERR: An item with that title already exists.')
            }
        })}
    },
    list: () => {
        console.log(`Listing all notes`);
        const data = JSON.parse(fs.readFileSync('./playground/notes.json'));
        data.forEach((item, i) => {
            console.log(`TITLE OF ITEM ${i +1}: ${item.title}`);
            console.log(`BODY OF ITEM ${i+1}: ${item.body}`);
        })
    },
    read: (title) => {
        console.log(`Reading note with title ${title}`);
        const data = JSON.parse(fs.readFileSync('./playground/notes.json'));
        const targetItem = data.find(item => item.title === title);
        if(targetItem){
            console.log(`BODY OF ITEM: ${targetItem.body}`)
        } else {
            console.log('ERROR: Title not found')
        }
    }, 
    delete: (title) => {
        console.log(`Removing note with title ${title}`);
        const data = JSON.parse(fs.readFileSync('./playground/notes.json'));
        const targetIndex = data.findIndex(item => item.title === title);
        if(targetIndex !== -1){
            console.log('DATA BEFORE SPLICE:', data)
            data.splice(targetIndex, 1);
            console.log('DATA AFTER SPLICE:', data)
            fs.writeFileSync('./playground/notes.json', JSON.stringify(data));
        } else {
            console.log('ERROR: Title not found');
        }
    }
}