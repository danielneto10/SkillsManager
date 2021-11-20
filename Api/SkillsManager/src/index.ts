import * as express from 'express';
import { initDatabase } from '../src/database/database';
import { router } from './routes/router';

const app = express();
app.use(express.json());
initDatabase();
router(app);

app.listen(3000);
