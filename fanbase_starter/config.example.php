<?php
// Copy to private/fan-db-config.php OUTSIDE the public web folder.
// Example: AMPPS/private/fan-db-config.php when the app is at
// AMPPS/www/homework/fanbase. See the student instructions for other layouts.
// Update the path in fans.php if your deployment uses a different layout.
// Edit the private copy with your database settings; keep credentials out of Git.
return [
    'host' => 'localhost',
    'user' => 'YOUR_DATABASE_USERNAME',
    'password' => 'YOUR_DATABASE_PASSWORD',
    'database' => 'YOUR_DATABASE_NAME',
    'port' => 3306,
];
