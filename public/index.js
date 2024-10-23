const express = require('express');
const path = require('path');
const app = express();

// Middleware สำหรับการจัดการไฟล์ static (เช่น CSS)
app.use(express.static('static'));

// การตั้งค่า body parser สำหรับจัดการ request body (หากต้องใช้)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Web and PDF or images to Word</title>
            <link rel="stylesheet" href="/styles.css"> <!-- ปรับที่นี่ -->
            <script>
                function clearUrl() {
                    document.getElementById('url').value = '';
                }

                function clearPdf() {
                    document.getElementById('pdf').value = '';
                }

                function clearImages() {
                    document.getElementById('images').value = '';
                }
            </script>
        </head>
        <body>
            <h1>Data collection website</h1>
            <form method="post" enctype="multipart/form-data">
                <div class="head-text"><label for="url">วาง URL ของเว็บไซต์:</label></div>
                <input type="text" id="url" name="url" placeholder="ยังไม่ได้วาง Url" style="color: white;">
                <div class="buttonur-url"><button type="button" onclick="clearUrl()">ลบ URL</button></div> 

                <div class="head-text"><label for="pdf">วางไฟล์ PDF:</label></div>
                <input type="file" id="pdf" name="pdf" accept="application/pdf">
                <div class="button-pdf"><button type="button" onclick="clearPdf()">ลบ PDF</button></div> 

                <div class="head-text"><label for="images">วางไฟล์ รูปภาพ:</label></div>
                <input type="file" id="images" name="images" accept="image/*" multiple>
                <div class="button-imges"><button type="button" onclick="clearImages()">ลบรูปภาพ</button></div> 

                <div class="button-submit">
                    <button type="submit">Convert</button>
                </div>
            </form>
        </body>
        </html>
    `);
});

app.post('/', (req, res) => {
    // โค้ดในการจัดการการแปลงไฟล์ PDF และภาพที่อัพโหลด
    res.send('Processing the files...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
