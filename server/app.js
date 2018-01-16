import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import router from './routes';


const {
  user, recipe, review, favorite, vote
} = router;
const port = process.env.PORT || 8081;
const app = express();
// console.log(process.env);
// if (process.env.NODE_ENV === 'development') {
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true
}));

//   app.use(webpackHotMiddleware(compiler, {
//     reload: true
//   }));
// }


// api documentation
app.get('/api/docs', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build/index.html'));
});

app.use('/api/docs-assets', express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/client/public')));
app.use('/static', express.static(path.resolve(__dirname, '../client/build')));

// API routes
app.use(user);
app.use(recipe);
app.use(review);
app.use(favorite);
app.use(vote);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

app.listen(port, () => winston.info('We up!'));

export default app;
