var express =   require('express');
var app     =   express();
var exphb   =   require('express-handlebars');
var Handlebars = require('handlebars');

var PORT    =   process.env.PORT || 3000;

var channel  = require("./data/channel.json");
// console.log(channel)

app.engine('handlebars', exphb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//Serving Static Files
app.use('/public', express.static('public'));
app.use('./css', express.static('public/css'));
app.use('./js', express.static('public/js'));


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

 Handlebars.registerHelper('nthIteration', function(index, i, options) {
    if (index === i) {
        return options.fn(this);
    }
    return options.inverse(this);
});


app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});