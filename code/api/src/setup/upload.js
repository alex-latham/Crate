/* code-annotations-areid:
  Loads path which is used for working with files & directory paths
  Loads multer which is used for multipart/form data

  Code below basically determining where to store uploaded files, how to name those files,
  and how to handle errors in file uploads
*/
// Imports
import path from 'path'
import multer from 'multer'

// App Imports
import serverConfig from '../config/server.json'

// File upload configurations and route
export default function (server) {
  console.info('SETUP - Upload...')

  // Set destination
  const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'public', 'images', 'uploads'),

    filename: function (request, file, callback) {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  const upload = multer({
    storage: storage
  }).single('file')

  // Upload route
  server.post(serverConfig.upload.endpoint, (request, response) => {
    upload(request, response, function (error) {
      if (!error) {
        response.json({
          success: true,
          file: request.file.filename
        })
      } else {
        response.json({
          success: false,
          file: null
        })
      }
    })
  })
}
