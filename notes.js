console.log('Notes Running')
const fs = require('fs');

function fetchNotes(){
    try{
        const notes = JSON.parse(fs.readFileSync('./data/notes.json'));
        return notes;
    } catch (e){
        return [];
    }
}

function fetchCache(){
    try{
        const cache = JSON.parse(fs.readFileSync('./data/cache.json')); 
        return cache;
    } catch (e){
        return {};
    }
}

function queryTitle(title){
    const cache = fetchCache();
        if(cache[title] || cache[title] === 0){
            return cache
        } else {
            return false
        }
}

function catchError(condition, errCode){
    if(!condition){
        console.log(errCode)
        return true;
    } else {
        return false;
    }
}

function Crud(){
    this.add = (title, body) => {
        const cache = fetchCache();
        if(catchError(!cache[title], 'ERR: An item with that title already exists.')){
            return null;
        }
        const note = {title, body}, notes = fetchNotes();
        notes.push(note);
        fs.writeFileSync('./data/notes.json', JSON.stringify(notes));
        cache[title] = title;
        fs.writeFileSync('./data/cache.json', JSON.stringify(cache));         
        return notes;
    };
    this.read = (title) => {
        console.log(`Reading note with title ${title}`);
        if(catchError(queryTitle(title), 'ERR: Title not found')){
            return null;
        }
        const body = fetchNotes().find(item => item.title === title).body;
        console.log(`Body of item: ${body}`)
        return body;
    };
    this.remove = (title) => {
        console.log(`Removing note with title ${title}`);
        const cache = queryTitle(title);
        if(catchError(cache, 'ERR: Title not found')){
            return null;
        }
        const data = fetchNotes(), targetIndex = data.findIndex(item => item.title === title);
        console.log('Removing item:', data[targetIndex]);
        data.splice(targetIndex, 1);
        fs.writeFileSync('./data/notes.json', JSON.stringify(data));
        cache[title] = null;
        fs.writeFileSync('./data/cache.json', JSON.stringify(cache));  
        return data;
    };
    this.update = (title, payload) => {
        console.log(`Updating body of note with title ${title}`);
        if(catchError(queryTitle(title), 'ERR: Title not found')){
            return null;
        }
        const notes = fetchNotes();
        const target = notes.find(item => item.title === title);
        target.body = payload;
        console.log(`New Body: ${target.body}`);
        fs.writeFileSync('./data/notes.json', JSON.stringify(notes));
        return target;
    };
    this.list = () => {
        console.log(`Listing all notes`);
        const data = fetchNotes();
        if(catchError(data, 'ERR: No data found in database')){
            return null;
        }
        data.forEach((item, i) => {
            console.log(`TITLE OF ITEM ${i +1}: ${item.title}`);
            console.log(`BODY OF ITEM ${i+1}: ${item.body}`);
        })
    };
}

commandHandler = new Crud;

module.exports = commandHandler;
    
    
