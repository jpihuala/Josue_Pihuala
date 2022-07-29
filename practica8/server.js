const express = require('express')
const{ Router } = express

const app = express()
const router = Router()

app.use(express.json())



router.get('/', (req, res)=>{
    res.json({
        ok: true,
        mensaje:'todo bien, get'
    })
})

router.post('/', (req, res)=>{
    res.json({
        ok: true,
        mensaje:'todo bien, post'
    })
})

router.post('/:id', (req, res)=>{
    const {id} = req.params
    res.json({
        ok: true,
        mensaje:'todo bien, post'
    })
})

app.use('/api', router)


const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log('el server')
})