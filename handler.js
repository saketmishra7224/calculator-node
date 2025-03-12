const express = require('express');
const path = require('path');
const { sumRequestHandler } = require('./sum');
const { productRequestHandler } = require('./product');
const { diffRequestHandler } = require('./diff');
const { divideRequestHandler } = require('./divide');

const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sum', (req, res) => {
    res.setHeader("Content-Type", 'text/html');
    res.write(`<html>
    <head><title> Calculator </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
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
            .calculator-container {
                background-color: rgba(255, 255, 255, 0.9);
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                text-align: center;
            }
            h1, h2 {
                color: #333;
                margin-bottom: 1.5rem;
            }
            form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: center;
            }
            input[type="text"] {
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                width: 200px;
                text-align: center;
            }
            input[type="submit"] {
                background-color: #198754;
                color: white;
                border: none;
                padding: 0.5rem 2rem;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            input[type="submit"]:hover {
                background-color: #146c43;
            }
            .operator {
                font-size: 24px;
                font-weight: bold;
                margin: 0 10px;
            }
            .input-group {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
        </style>
    </head>
    <body>
        <div class="calculator-container">
            <h1>Welcome To Calculator</h1>
            <h2>Sum Calculator</h2>
            <form action="/calculate-sum" method="POST">
                <div class="input-group">
                    <input type="text" placeholder="First Number" name="first" required />
                    <span class="operator">+</span>
                    <input type="text" placeholder="Second Number" name="second" required />
                </div>
                <input type="submit" value="Calculate Sum" class="btn btn-success">
            </form>
            <br>
            <a href="/" class="btn btn-primary">Back to Home</a>
        </div>
    </body>
    </html>`);
    res.end();
});

app.post('/calculate-sum', sumRequestHandler);
app.get('/product', (req, res) => {
    res.setHeader("Content-Type", 'text/html');
    res.write(`<html>
    <head><title> Calculator </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
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
            .calculator-container {
                background-color: rgba(255, 255, 255, 0.9);
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                text-align: center;
            }
            h1, h2 {
                color: #333;
                margin-bottom: 1.5rem;
            }
            form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: center;
            }
            input[type="text"] {
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                width: 200px;
                text-align: center;
            }
            input[type="submit"] {
                background-color: #198754;
                color: white;
                border: none;
                padding: 0.5rem 2rem;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            input[type="submit"]:hover {
                background-color: #146c43;
            }
            .operator {
                font-size: 24px;
                font-weight: bold;
                margin: 0 10px;
            }
            .input-group {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
        </style>
    </head>
    <body>
        <div class="calculator-container">
            <h1>Welcome To Calculator</h1>
            <h2>Product Calculator</h2>
            <form action="/calculate-product" method="POST">
                <div class="input-group">
                    <input type="text" placeholder="First Number" name="first" required />
                    <span class="operator">X</span>
                    <input type="text" placeholder="Second Number" name="second" required />
                </div>
                <input type="submit" value="Calculate Product" class="btn btn-success">
            </form>
            <br>
            <a href="/" class="btn btn-primary">Back to Home</a>
        </div>
    </body>
    </html>`);
    res.end();
});

app.post('/calculate-product', productRequestHandler);
app.get('/diff', (req, res) => {
    res.setHeader("Content-Type", 'text/html');
    res.write(`<html>
    <head><title> Calculator </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
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
            .calculator-container {
                background-color: rgba(255, 255, 255, 0.9);
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                text-align: center;
            }
            h1, h2 {
                color: #333;
                margin-bottom: 1.5rem;
            }
            form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: center;
            }
            input[type="text"] {
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                width: 200px;
                text-align: center;
            }
            input[type="submit"] {
                background-color: #198754;
                color: white;
                border: none;
                padding: 0.5rem 2rem;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            input[type="submit"]:hover {
                background-color: #146c43;
            }
            .operator {
                font-size: 24px;
                font-weight: bold;
                margin: 0 10px;
            }
            .input-group {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
        </style>
    </head>
    <body>
        <div class="calculator-container">
            <h1>Welcome To Calculator</h1>
            <h2>Difference Calculator</h2>
            <form action="/calculate-diff" method="POST">
                <div class="input-group">
                    <input type="text" placeholder="First Number" name="first" required />
                    <span class="operator">-</span>
                    <input type="text" placeholder="Second Number" name="second" required />
                </div>
                <input type="submit" value="Calculate Difference" class="btn btn-success">
            </form>
            <br>
            <a href="/" class="btn btn-primary">Back to Home</a>
        </div>
    </body>
    </html>`);
    res.end();
});

app.post('/calculate-diff', diffRequestHandler);
app.get('/division', (req, res) => {
    res.setHeader("Content-Type", 'text/html');
    res.write(`<html>
    <head><title> Calculator </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
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
            .calculator-container {
                background-color: rgba(255, 255, 255, 0.9);
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                text-align: center;
            }
            h1, h2 {
                color: #333;
                margin-bottom: 1.5rem;
            }
            form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: center;
            }
            input[type="text"] {
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                width: 200px;
                text-align: center;
            }
            input[type="submit"] {
                background-color: #198754;
                color: white;
                border: none;
                padding: 0.5rem 2rem;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            input[type="submit"]:hover {
                background-color: #146c43;
            }
            .operator {
                font-size: 24px;
                font-weight: bold;
                margin: 0 10px;
            }
            .input-group {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
            .note {
                color: #666;
                font-size: 0.9rem;
                margin-top: 0.5rem;
            }
        </style>
    </head>
    <body>
        <div class="calculator-container">
            <h1>Welcome To Calculator</h1>
            <h2>Division Calculator</h2>
            <form action="/calculate-division" method="POST">
                <div class="input-group">
                    <input type="text" placeholder="First Number" name="first" required />
                    <span class="operator">/</span>
                    <input type="text" placeholder="Second Number" name="second" required />
                </div>
                <p class="note">Note: First number is divided by Second</p>
                <input type="submit" value="Calculate Division" class="btn btn-success">
            </form>
            <br>
            <a href="/" class="btn btn-primary">Back to Home</a>
        </div>
    </body>
    </html>`);
    res.end();
});

app.post('/calculate-division', divideRequestHandler);

// Handle 404
app.use((req, res) => {
    res.status(404).send(`
    <html>
        <head><title> Calculator </title></head>
        <body>
            <h1>Page Does Not Exist...</h1>
            <a href="/">Go To Home</a>
        </body>
    </html>`);
});

module.exports = app;