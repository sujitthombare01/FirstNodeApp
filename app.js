var express = require('express');
var app = express();





var user ={'sujit':'Sujit Thombare','kedar':'Kedar Lachake','sachin':'Sachin Dhage'};
app.set('view engine', 'ejs');

app.get('/',function(req,res,next){        
        

res.render('index');
});

 app.get('/:user',function(req,res){ 

          if(user[req.params.user.toLowerCase()])
          {
            res.render('user',{user:user[req.params.user.toLowerCase()]});
          }
           else
              res.render('error',{error:'Hello '+req.params.user+' , Your are not a valid user..!!'});
    });

app.get('*',function(req,res){        
 res.render('error');
   });


app.listen('3000', function(){
  console.log('Server Started ..!!!');
});