// Imports
import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

/* code-annotations-areid:
  Load environment variable (prod vs dev vs test, etc)
*/
// App Imports
import { NODE_ENV } from '../config/env'

// Load express modules
export default function (server) {
  console.info('SETUP - Loading modules...')

  /* code-annotations-areid:
    Allows for cross origin requests to load resources
  */
  // Enable CORS
  server.use(cors())

  /* code-annotations-areid:
    Loads body parser module which is middelware for parsing content before it reaches handlers (WTF?)
  */
  // Request body parser
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  /* code-annotations-areid:
    Loads cookie parser module which parses cookies as JSON
  */
  // Request body cookie parser
  server.use(cookieParser())


  /* code-annotations-areid:
    Determines default folder for files?
  */
  // Static files folder
  server.use(express.static(path.join(__dirname, '..', '..', 'public')))

  /* code-annotations-areid:
    Loads morgan, a middleware for logging
  */
  // HTTP logger
  if(NODE_ENV === 'development') {
    server.use(morgan('tiny'))
  }
}
