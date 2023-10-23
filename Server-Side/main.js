const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors({ origin: 'http://localhost:5173' }))

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
