let express = require('express');
let app = express();

app.get('/', (req, res) => {
    console.log('Information')
    res.send('Mr. Pitipong Piti 5835512033 CoE#14')
} );
app.get('/crash', (req , res) => {
    console.log('Crash!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(process.env.PORT,
    ()=>console.log('Server is running at', process.env.PORT));
