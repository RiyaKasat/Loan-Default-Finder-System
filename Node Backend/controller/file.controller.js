const uploadFileMiddleware = require("../Middleware/upload");
const fs = require('fs');


const upload = async(req, res) =>
{
    try{
        await uploadFileMiddleware(req, res);
        
            if(req.file == undefined){
                return res.status(400).send({
                    message : "Please upload a file!"
                });

            }

            
            res.status(200).send({
                message: "Uploaded the file successfully" + req.file.originalname,
            });
        
    } 
    catch (err)
    {
        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
              message: "File size cannot be larger than 2MB!",
            });
          }

        res.status(500).send({
            message : `Could not upload file : ${req.file.originalname}. ${err}`,
        });
    }
};



const fs = require("fs");

const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/resources/static/assets/tmp/" + image.name,
        image.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};





const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/resource/static/assets/uploads/";
  
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      }
  
      let fileInfos = [];
  
      files.forEach((file) => {
        fileInfos.push({
          name: file,
          url:  file,
        });
      });
  
      res.status(200).send(fileInfos);
    });
  };
  
  const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/static/assets/uploads/";
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
  };
  
  module.exports = {
    upload,
    getListFiles,
    download,
  };