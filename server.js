var express =   require('express');
var http    =   require('http');
var app     =   express();
var exphb   =   require('express-handlebars');
var PORT    =   process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));



// var usersFilePath = path.join(__dirname, 'users.min.json');

// apiRouter.get('/users', function(req, res){
//     var readable = fs.createReadStream(usersFilePath);
//     readable.pipe(res);
// });

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
    res.setHeader('channel.json', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
  });
});


app.get('/home', function(req, res) {
  res.send("This is the home page");
});

//when you go to /hello it renders hello, notice there is no slash as this pertains to the file hello.handlebars
app.get('/about', function(req, res) {
  res.render('about', {msg:"HELLO WORLD I AM ABOUT"} )
});

//When you go to /another it redirects you to the '/' which is the index
//or you can state an external website or even a .handblebars page, or even a preveious path with res.send
app.get('/another', function(req, res){
  res.redirect('/?msg=another one');
});

app.get('/another', function(req, res){
  res.redirect('/?msg=another one');
});

//used to serve static files in the public folder and can be accesed by labeling the name of the file in the url bar after /public
app.use('/public', express.static('public'));
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});