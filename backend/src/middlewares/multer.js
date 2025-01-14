const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(__dirname, '../temp-uploads'));
  },

  filename: function (req, files, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, files.fieldname + '-' + uniqueSuffix+'.png');
  },
});

const upload = multer({ storage: storage });

module.exports = upload;