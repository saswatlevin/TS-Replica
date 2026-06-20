const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const IMAGE_DESTINATION_PATH = 'C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\data\\images';

// Configuring Multer's disk storage engine
const imageDiskStorage = multer.diskStorage({
  // function that tells Multer which folder to save the file in
  destination: (req, file, cb) => cb(null, IMAGE_DESTINATION_PATH),

  filename: (req, file, cb) => {
  	// Generates a unique file name
    const unique_file_name = `${Date.now()}-${crypto.randomBytes(8).toString('hex')}`;
    
    cb(null, unique_file_name + path.extname(file.originalname).toLowerCase());
  }
});

// Multer middleware with storage and config rules
const upload = multer({
  storage: imageDiskStorage,                                   
  limits: { fileSize: 5 * 1024 * 1024 },     // Max file size

  // Reject invalid file before saving it.
  fileFilter: (req, file, cb) => {
    
    const allowed_file_extensions = /\.(jpe?g|png|webp)$/i;

    // cb(error, shouldAccept) — null error, boolean second arg decides accept/reject
    // test() returns true/false depending on whether the filename matches the allowed pattern
    cb(null, allowed_file_extensions.test(path.extname(file.originalname)));
  }
});

module.exports = {
  upload, 
  IMAGE_DESTINATION_PATH
};