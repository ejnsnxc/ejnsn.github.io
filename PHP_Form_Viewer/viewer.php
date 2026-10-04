<?php

$method = $_SERVER['REQUEST_METHOD'];
$data = ($method === 'POST') ? $_POST : $_GET;


function e($value) {
    return htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Received</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <h1>Order Received</h1>
    <p>This data was sent using <strong><?php echo e($method); ?></strong>.</p>

    <?php if (empty($data)): ?>
        <p>No form data was submitted.</p>
    <?php else: ?>
        <table class="results">
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
            <?php foreach ($data as $key => $value): ?>
                <tr>
                    <td><?php echo e($key); ?></td>
                    <td>
                    <?php if (is_array($value)): ?>
                        <ul>
                        <?php foreach ($value as $item): ?>
                            <li><?php echo e($item); ?></li>
                        <?php endforeach; ?>
                        </ul>
                    <?php else: ?>
                        <?php echo e($value); ?>
                    <?php endif; ?>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>

    <p><a href="pizza.html">&larr; Back to the order form</a></p>
</body>
</html>