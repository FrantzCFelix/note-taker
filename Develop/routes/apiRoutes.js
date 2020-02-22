const dbData = require('../db/db.json');
const path = require('path');
const fs = require('fs');



module.exports = app => {
    // API Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get('/api/notes', (req, res) => {
        let savedNotes = JSON.parse(fs.readFileSync((path.join(__dirname, '../db/db.json')),'UTF-8',err => {
            if (err) throw err;
        }));
        console.log(savedNotes);
         res.json(savedNotes);
          
    });

    app.post('/api/notes', (req,res) => {
        const { title, text } = req.body;
        const newNote = { title, text, id: Math.floor((Math.random().toFixed(4))*100)};
        dbData.push(newNote);
        updateDb(dbData);    
       // console.log(newNote);
        res.json(newNote);        
        
    });

    // app.delete('/api/notes/:id', (req,res) => {

    //     //console.log( 'xx' + req.params.id);
    //     //res.json(req.body.id);
    //     // Create a new array and filter it so that note.id !== deletedId. DeletedId is the captured Id from req.params.id
    //     let tempArr = dbData.filter(note => {
    //         console.log(note.id);
    //          return note.id !== req.params.id
        
    //     });

    //     console.log(tempArr);
        
    // });



    function updateDb(dbData){
        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(dbData), err => {
            if (err) throw err;
        })
    }

};

  
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
  
    // app.post('/api/tables', (req, res) => {
    //   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    //   // It will do this by sending out the value "true" have a table
    //   // req.body is available since we're using the body parsing middleware
    //   if (tableData.length < 5) {
    //     tableData.push(req.body);
    //     res.json(true);
    //   } else {
    //     waitListData.push(req.body);
    //     res.json(false);
    //   }
    // });
  
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don't worry about it!
  
//     app.post('/api/clear', (req, res) => {
//       // Empty out the arrays of data
//       tableData.length = 0;
//       waitListData.length = 0;
  
//       res.json({ ok: true });
//     });
  
  