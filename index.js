let myhttp = require("http");

let myserver = myhttp.createServer(

  function( myrequest, myresponse ){
    console.log ( myrequest.url );
    let mytext;
    if ( myrequest.url === "/hey") {
      mytext = "Well, this is strange.... bye";
    }
    else {
      mytext = "um Hi? Do I know you?";
    };


    myresponse.writeHead( 200, {"Content": "text/plain"});

    myresponse.end( mytext + "\n");
  }
  
);

myserver.listen(8080, "0.0.0.0");

console.log("Server had starated");