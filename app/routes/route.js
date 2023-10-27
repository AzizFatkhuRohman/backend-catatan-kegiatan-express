import express from "express";
import { allActivity, findActivity, postActivity, updateActivity } from "../controllers/activityController.js";
import { allNote, deletePermanentNote, findNote, postNote, updateNote } from "../controllers/noteController.js";
const route = express.Router()

//Activity Route
route.post('/activity',postActivity)
route.put('/activity/:id',updateActivity)
route.get('/activity',allActivity)
route.get('/activity/:id',findActivity)
//Note route
route.get('/note',allNote)
route.get('/note/:id',findNote)
route.post('/note',postNote)
route.put('/note/:id',updateNote)
route.delete('/note/delete/:id',deletePermanentNote)
export default route
