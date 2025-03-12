const { sumRequestHandler } = require('./sum');
const { productRequestHandler } = require('./product');
const { diffRequestHandler } = require('./diff');
const { divideRequestHandler } = require('./divide');

const requestHandler = (req,res) =>{
  console.log(req.url,req.method);
  if(req.url === '/'){

    res.setHeader("Content-Type", 'text/html');
    res.write(`
      <html>
        <head><title> Calculator </title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
          <style>
                body{
                      height: 100%;
                      background-image: url("C:\Users\Saket\OneDrive\Desktop\projects\Calculator-node\calculator.jpeg");
                      background-color: #cccccc;
                    }
            a { text-decoration: none;
                color:white;
              }
            h1{
                text-align:center;  
              }
            div{
                  text-align:center;
                }
          </style>
        </head>
        <body>
          <h1>Welcome To Calculator</h1>
          </br></br></br>
          </br>
          <div>
            <button type="button" class="btn btn-success"><a href="/sum">Go To Sum</a></button></br></br></br>
            <button type="button" class="btn btn-success"><a href="/product">Go To Product</a></button></br></br></br>
            <button type="button" class="btn btn-success"><a href="/diff">Go To Difference</a></button></br></br></br>
            <button type="button" class="btn btn-success"><a href="/division">Go To Division</a></button></br></br></br>
          </br>
          </div>
          
        </body>
      <html>`
    );
    return res.end();
  }
  
  else if(req.url.toLowerCase() === '/sum'){
    res.setHeader("Content-Type", 'text/html');
    res.write(`<html>
    <head><title> Calculator </title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script></head>

    <body>
      <h1>Welcome To Calculator</h1>
      <br>
      <h2>Calculator</h2>
      <form action="/calculate-sum" method="POST">
        <input type="text" placeholder="First Num" name ="first" /> +
        <input type="text" placeholder="Second Num" name ="second" />
        <input type="submit" value="Sum">
      </form>
    </body>
    <html>
    `);
    return res.end();
  }else if(req.url.toLowerCase() === '/calculate-sum' && req.method === 'POST'){
    return sumRequestHandler(req, res);
    
  }
  else if(req.url.toLowerCase() === '/product'){
    res.setHeader("Content-Type", 'text/html');
    res.write(`<html>
    <head><title> Calculator </title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script></head>

    <body>
      <h1>Welcome To Calculator</h1>
      <br>
      <h2>Calculator</h2>
      <form action="/calculate-product" method="POST">
        <input type="text" placeholder="First Num" name ="first" />X
        <input type="text" placeholder="Second Num" name ="second" />
        <input type="submit" value="Product">
      </form>
    </body>
    <html>
    `);
    return res.end();
  }
  else if(req.url.toLowerCase() === '/calculate-product' && req.method === 'POST'){
    return productRequestHandler(req, res);
    
  }
  else if(req.url.toLowerCase() === '/diff'){
    res.setHeader("Content-Type", 'text/html');
    res.write(`<html>
    <head><title> Calculator </title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script></head>

    <body>
      <h1>Welcome To Calculator</h1>
      <br>
      <h2>Calculator</h2>
      <form action="/calculate-diff" method="POST">
        <input type="text" placeholder="First Num" name ="first" />-
        <input type="text" placeholder="Second Num" name ="second" />
        <input type="submit" value="Diff">
      </form>
    </body>
    <html>
    `);
    return res.end();
  }
  else if(req.url.toLowerCase() === '/calculate-diff' && req.method === 'POST'){
    return diffRequestHandler(req, res);
  }

  else if(req.url.toLowerCase() === '/division'){
    res.setHeader("Content-Type", 'text/html');
    res.write(`<html>
    <head><title> Calculator </title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script></head>

    <body>
      <h1>Welcome To Calculator</h1>
      <br>
      <h2>Calculator</h2>
      <form action="/calculate-division" method="POST">
        <input type="text" placeholder="First Num" name ="first" /> /
        <input type="text" placeholder="Second Num" name ="second" />
        <p>Note: First number is divided by Second</p>
        <input type="submit" value="Division">
      </form>
    </body>
    <html>
    `);
    return res.end();
  }
  else if(req.url.toLowerCase() === '/calculate-division' && req.method === 'POST'){
    return divideRequestHandler(req, res);
    
  }

  res.setHeader("Content-Type", 'text/html');
    res.write(`<html>
    <head><title> Calculator </title></head>

    <body><h1>Page Does Not Exists...</h1>
          <a href="/">Go To Home</a>
    </body>
    <html>
    `);
    return res.end();
}

exports.requestHandler = requestHandler;