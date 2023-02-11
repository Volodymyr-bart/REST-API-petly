const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

dotenv.config();

const newsRouter = require('./routes/api/news');
const noticesRouter = require('./routes/api/notices');
const servicesSidebarRouter = require('./routes/api/services-sidebar');
const authRouter = require('./routes/api/auth');
const usersRouter = require('./routes/api/users');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
// app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.use('/api/news', newsRouter);
app.use('/api/notices', noticesRouter);
app.use('/api/services-sidebar', servicesSidebarRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(err.code).send(err.message);
  }
  res.status(500).json({ message: err.message });
});

module.exports = app;
