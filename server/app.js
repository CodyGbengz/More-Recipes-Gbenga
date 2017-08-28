import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';


const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
//app.use(routes);

app.listen(port, () => {
  console.log('live');
});
