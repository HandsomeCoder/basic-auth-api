const express = require('express');
const serverless = require("serverless-http");

const logger = require('morgan');
const cors = require('cors')
const compression = require('compression');

const router = require('./routes');
router.get("/", (_, res) => res.json({ status: true }));

const app = express();

app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json({limit: '1mb'}));
app.use(cors())
app.use(logger('dev'));
app.use(compression());
app.use("/.netlify/functions/app", router);

export const handler = serverless(app);
