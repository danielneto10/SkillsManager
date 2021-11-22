import * as cors from 'cors';

const configCors = {
  origin: 'http://localhost:4200',
};

const corsApp = cors(configCors);

export default corsApp;
