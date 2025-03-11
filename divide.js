const divideRequestHandler = (req, res) =>{
  console.log("In Sum Request Handler", req.url);
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  });
  req.on('end', ()=>{
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) / Number(bodyObj.second);
    res.write(`
      <html>
        <head><title> Divide </title></head>
        <body>
          <h1>Welcome To Calculator</h1>
          <br>
          <h1>Division Result:${result}</h1>
          
        </body>
      <html>`
    );
  })
}

exports.divideRequestHandler = divideRequestHandler;