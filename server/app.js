import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import path from 'path';
import router from './routes';


const {
  user, recipe, review, favorite, vote
} = router;
const port = process.env.PORT || 8081;
const app = express();

// api documentation
app.get('/api/docs', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build/index.html'));
});

app.use('/api/docs-assets', express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(user);
app.use(recipe);
app.use(review);
app.use(favorite);
app.use(vote);

app.listen(port, () => winston.info('We up!'));

export default app;
