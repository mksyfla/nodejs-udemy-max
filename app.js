const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('63d9da16767ae6045ae5565d')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => {
      console.log(err)
    });
});
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.notFoundError);

mongoose.connect('mongodb://localhost:27017/shop?retryWrites=true')
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Kasyfil',
          email: 'kasyfil@gmail.com',
          cart: {
            items: [],
          },
        });
        user.save();
      }
    })
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });