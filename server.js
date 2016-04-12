var express =   require('express');
var app     =   express();
var exphb   =   require('express-handlebars');
var PORT    =   process.env.PORT || 3000;

var channel  = require("./channel.json");
// console.log(channel)

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
    channelData: channel
  });
});



//Serving Static Files
app.use('/public', express.static('public'));
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});