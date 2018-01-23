import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.dev';
import router from './routes';


const {
  user, recipe, review, favorite, vote
} = router;
const port = process.env.PORT || 8081;
const app = express();

const DIST_DIR = path.join(__dirname, '../public');
const HTML_FILE = path.join(DIST_DIR, 'index.html');





// api documentation
app.get('/api/docs', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'docs/index.html'));
});

app.use('/api/docs-assets', express.static(path.resolve(__dirname, '..', 'docs')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/static', express.static(path.resolve(__dirname, '../public')));

// API routes
app.use(user);
app.use(recipe);
app.use(review);
app.use(favorite);
app.use(vote);

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true
  }));

  app.use(webpackHotMiddleware(compiler, {
    reload: true
  }));
  
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});
}

/**
 * Serves view for production after files has been bundled in production environment
 */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(DIST_DIR));
  app.get('*', (req, res) => res.sendFile(HTML_FILE));
}

app.listen(port, () => winston.info('We up!'));

export default app;
