const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
require('dotenv').config();
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//set up handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//set up sessions
const sess = {
    secret: process.env.SECRET,
    cookie: {
        //expires after 10 minutes
        expires: 10 * 60 * 1000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//use sessions
app.use(session(sess));

//use 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//use routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

//connect to sequelize and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}!`));
}
);

