# Blog-Spot
A blog Posting App

## Technologies
---
[![made-with-javascript](https://img.shields.io/badge/Made%20with-MySQL-1f425f.svg)](https://www.javascript.com)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![made-with-node.js](https://img.shields.io/badge/Made%20with-Node.js-1f425f.svg)](https://www.javascript.com)
[![made-with-express.js](https://img.shields.io/badge/Made%20with-Express.js-1f425f.svg)](http://expressjs.com/)
[![made-with-handle.js](https://img.shields.io/badge/Made%20with-Handle.js-1f425f.svg)](https://handlebarsjs.com/)

## Description
A blog posting app that allows users to create an account, login, and post blogs. Users can also comment on other users posts. Users can also edit and delete their own posts and comments.
---

## Features
---

Descripiton of code snippet below
```
router.post with auth is a middleware function that checks if the user is logged in. If the user is logged in, the user can create a post. If the user is not logged in, the user will be redirected to the login page.
```

router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});
```
## Deployment Link
---
[Blog-Spot](https://blogspot123-a0dddad8d899.herokuapp.com/)


## Table of contents
---
- [Installation](#installation)
- [Sources](#sources)
- [Credits](#credits)
- [License](#license)

---

## Installation
---

Below is the following installing steps to install and run this app.

1. Clone this repo. First cd into the folder where you would like to save this project. Then enter the command below.

```sh
git clone https://github.com/kaleikautakaoka/Blog-Spot.git
```
run npm install
```
3. Run this command below to seed the data base. You will find this configuration in the package.json file provided in the repo.

```sh
npm run seed
```

4. Start the server by running the code below. This is convienent as it will be using nodemon.

```sh
npm run watch
```

5. Test routes via insomnia
```
Insomnia: https://insomnia.rest/download

PORT: http://localhost:3001
```
## Sources
---
- [sequelize](https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/)
- [nodesource](https://nodesource.com/)
- [medium](https://medium.com/the-javascript-dojo/sequelize-project-setup-4a6a566c6cfa)
- [sebhastian](https://sebhastian.com/mysql-failed-to-open-file-error-2/)
- [stackoverflow](https://stackoverflow.com/questions/14684063/mysql-source-error-2)
- [digitalocean](https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql)
- [turing](https://www.turing.com/kb/mysql-connection-with-node-js-using-sequelize-and-express)
- [eslint](https://www.npmjs.com/package/eslint-plugin-prettier)

## Credits
---
DU Bootcamp Cirruculm
Tutor: Andres Long,
TA: Rob Johnson

## License
---
MIT

