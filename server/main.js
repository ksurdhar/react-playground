import express from 'express';
import frontend from './frontend';

const app = express();

// app.use('/api', api);
app.use(frontend);

const port = process.env.PORT || 8000,

app.listen(port, () => {
  console.log('Server started at port %d', port);
});
