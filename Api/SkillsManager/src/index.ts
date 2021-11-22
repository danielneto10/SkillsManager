import './config/dotenv';
import * as express from 'express';
import corsApp from './config/cors';
import { initDatabase } from '../src/database/database';
import { router } from './routes/router';

const app = express();
app.use(express.json());
app.use(corsApp);
initDatabase();
router(app);

app.listen(process.env.PORT);
