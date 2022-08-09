const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = ['Buy food', 'Cook food', 'Eat food'];

const workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const day = date.getDate();

    res.render('list', { listTitle: day, newListItems: items });
});

app.post('/', (req, res) => {
    const item = req.body.newItem;

    if (req.body.list === 'Work') {
        if (item !== '') {
            workItems.push(item);
        }
        res.redirect('/work');
    } else {
        if (item !== '') {
            items.push(item);
        }
        res.redirect('/');
    }
});

app.get('/work', (req, res) => {
    res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
