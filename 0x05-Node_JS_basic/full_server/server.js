import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = process.env.PORT || 1245;

mapRoutes(app);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
}

export default app;
