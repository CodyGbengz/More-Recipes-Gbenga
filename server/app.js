import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import router from './routes/index';

const {
  user, recipe, review, favorite, vote
} = router;
const port = process.env.PORT || 8081;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(user);
app.use(recipe);
app.use(review);
app.use(favorite);
app.use(vote);

app.listen(port, () => winston.info('We up!'));

export default app;
