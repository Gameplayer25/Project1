const express = require('express'); // Import Express framework
const path = require('path'); // Import path module for file paths
const app = express(); // Create an Express application
const port = 3000; // Set server port

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public folder

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); // Serve index.html
});

// Route for the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html')); // Serve about.html
});

// Route for the contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html')); // Serve contact.html
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const name = req.body.name; // Get name from form
    const email = req.body.email; // Get email from form
    const message = req.body.message; // Get message from form

    // Respond with HTML
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Message Received</title>
            <link rel="stylesheet" href="/style.css"> <!-- Link to CSS -->
        </head>
        <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li> <!-- Home link -->
                        <li><a href="/about">About</a></li> <!-- About link -->
                        <li><a href="/contact">Contact</a></li> <!-- Contact link -->
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Thank You, ${name}!</h1> <!-- Greeting with user's name -->
                <p>We received your message:</p>
                <blockquote>"${message}"</blockquote> <!-- Display user message -->
                <p>We'll respond to you at <strong>${email}</strong>.</p> <!-- Display user's email -->
                <p><a href="/">Go back to Home</a></p> <!-- Link to return home -->
            </main>
            <footer>
                <p>&copy; 2024 Ryan Hurley</p> <!-- Footer -->
            </footer>
        </body>
        </html>
    `);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); // Log server status
});
