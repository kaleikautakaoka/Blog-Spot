const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();

const port = process.env.PORT || 3001;

const sess = {
    secret: 'AnythingSecret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
  };

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//turn on routes
app.use(routes);

//connect to sequelize and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}!`));
}
);

