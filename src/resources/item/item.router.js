import { Router } from 'express'

const router = Router()

router
  .route('/')
  .get((req, res)=> res.send("get"))
  .post((req, res)=> res.send("post"))
  .put((req, res)=> res.send("put"))
  .delete((req, res)=> res.send("delete"))

router
  .route('/:id')
  .get((req, res)=> res.send(req.params.id))
  .post((req, res)=> res.send("post item"))
  .put((req, res)=> res.send("put item"))
  .delete((req, res)=> res.send("delete item"))

export default router

