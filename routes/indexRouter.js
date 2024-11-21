const { Router } = require('express')
const indexRouter = Router()

const messages = [
    {
      text: "Hi there!",
      user: "Shamo",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles Xavier",
      added: new Date()
    }
];

const currentMessage = [
    {
        text: '',
        user: '',
        added: ''
    }
]

indexRouter.get('/', (req,res) => {
    res.render('index', { messages: messages });
})

indexRouter.get('/current', (req,res) => {
    res.render('current', { message: currentMessage });
})

indexRouter.post('/new', (req, res) => {
    const messageText = req.body.messageText
    const messageName = req.body.messageName
    messages.push({ text: messageText, user: messageName, added: new Date() })
    res.redirect('/')
})

indexRouter.post('/current', (req, res) => {
    const test = req.form.test
    currentMessage.push({ text: test })
    console.log(currentMessage)
})

module.exports = indexRouter