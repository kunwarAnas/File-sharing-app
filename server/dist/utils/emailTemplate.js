"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = void 0;
const template = (title, reciever, downloadLink) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f6f6f6;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #e0e0e0;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            padding: 10px 0;
            text-align: center;
        }
        .content {
            padding: 20px;
            line-height: 1.6;
        }
        .content h1 {
            color: #333333;
        }
        .content p {
            color: #555555;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            color: #999999;
            font-size: 12px;
        }
        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Welcome to Our Service</h1>
        </div>
        <div class="content">
            <h1>Hello, ${reciever}</h1>
            <p>Thank you for using our service.</p>
            <p>file Download link - ${downloadLink}</p>
            <p>Best regards,<br> The File Sharing App Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 File Sharing App. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

    
    `;
};
exports.template = template;
//# sourceMappingURL=emailTemplate.js.map