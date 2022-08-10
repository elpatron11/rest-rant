require('dotenv').config();
const express= require('express')
const app= express();

app.get('/', function(req, res){

        res.send("HomePage")
})



app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.use('/places', require('./controllers/places'))
// app.get('/places/', function(req, res){

    
//             res.send("List of Places")

// })

// app.get('/places/new', function(req, res){

    
//             res.send('Form')

// })

// app.get('/places/:id', function(req, res){

//     res.send( req.params.id
//     )
// })


// app.get('/places/:id/edit', function(req, res){

//     res.send( `Edit ${req.params.id}`
//     )
// })


// app.post('/places/', function(req, res){

//     res.send( `Create new place`
//     )
// })

app.listen(process.env.PORT, function(){
    console.log("server runing")
})

