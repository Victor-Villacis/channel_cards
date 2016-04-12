var express =   require('express');
var http    =   require('http');
var app     =   express();
var exphb   =   require('express-handlebars');
var PORT    =   process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

var jsonObj = require("./channel.json");

app.engine('handlebars', exphb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('./css', express.static('public/css'));



//Time Stamp
function formatDate() {
var d = new Date(),
    minutes = d.toString()
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[d.getDay()]+', '+months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();
}

app.get('/', function(req, res) {
    res.render('index', {
    msg:formatDate(),
  });
});



//used to serve static files in the public folder and can be accesed by labeling the name of the file in the url bar after /public
app.use('/public', express.static('public'));
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});