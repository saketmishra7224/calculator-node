const productRequestHandler = (req, res) => {
  console.log("In Product Request Handler", req.url);
  const first = Number(req.body.first);
  const second = Number(req.body.second);
  const result = first * second;
  
  res.write(`
    <html>
      <head>
          <title>Product Result</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
          <style>
              body {
                  height: 100vh;
                  background-image: url("/calculator.jpeg");
                  background-color: #cccccc;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
              }
              .result-container {
                  background-color: rgba(255, 255, 255, 0.9);
                  padding: 2rem;
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                  text-align: center;
              }
              h1 {
                  color: #333;
                  margin-bottom: 1.5rem;
              }
          </style>
      </head>
      <body>
          <div class="result-container">
              <h1>Welcome To Calculator</h1>
              <h1>Product Result: ${result}</h1>
              <br>
              <a href="/product" class="btn btn-primary">Calculate Another Product</a>
              <a href="/" class="btn btn-secondary">Back to Home</a>
          </div>
      </body>
    </html>`
  );
  return res.end();
}

exports.productRequestHandler = productRequestHandler;