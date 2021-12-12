const http = require('http')
const url = require('url');
const server = http.createServer((req,res)=>{
    if(req.method==='GET'){
        const objQuery = url.parse(req.url,true).query;
        let params = new url.URLSearchParams(objQuery);
        if(params.has('name')&&params.has('year')){
            let dob_yr = params.get('year');
            let months = params.get('months');
            let date = params.get('date');
            let name = params.get('name');
            let age = 2021-dob_yr;
          res.writeHead(200,{"Content-Type":"text/html"});
          res.write("Hello " + name);
          res.write("Your age is " + age);
          res.end();
          }
        }
        })
        server.listen(8090, () => {
          console.log("server started");
      });