var multer = require("multer");

// var storage = multer.diskStorage({
//     destination: function (req,file,cb) {
//         console.log(file);
//         cb(null,'./uploads')
//     },
//     filename: (req,file,cb)=>{
//         cb(null,file.fieldname + ".jpg");
//     }
// })

var upload = multer ({storage:multer.memoryStorage()});

module.exports = upload;

