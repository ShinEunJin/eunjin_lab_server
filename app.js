import express from 'express';
import cors from 'cors'

import { createContent } from './controllers/content'

const app = express();

app.use(cors({ origin: 'http://127.0.0.1:5500', credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('hi'));

app.post('/api/v1/content', createContent)
export default app