//config
let conf = require('./config');

//express
const express = require('express');
const path = require('path');
let app = express();
app.use(express.static('app'));//sets root in to the app folder
const glob = require('glob');//for global searching in root dir

app.set('view engine', 'ejs');//sets view engine
app.set('views', path.join(__dirname, '/app/view/'));//sets view folder


//index
app.get('/', function(req, res){
    res.render('index',{
        app_name : conf.app_name,
        app_desc : conf.app_desc
        }
    );
});

//main app dj page
app.get('/dj', function(req, res){

    //searches for music
    glob(__dirname + '**/music/*.{mp3,wav}', {}, (err, files)=>{
    console.log(files)
    console.log("mp3 directory is: " + __dirname + "/music")
  
    
    res.render('dj',{
        app_name : conf.app_name,
        app_desc : conf.app_desc,
        music_item : files
    })
})
})


//port and url
app.listen(conf.app_port);
console.log(conf.app_name + ' listening to: http://' + conf.app_url + ':' + conf.app_port);