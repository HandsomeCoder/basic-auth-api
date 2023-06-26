const express = require('express');
const serverless = require("serverless-http");

const logger = require('morgan');
const cors = require('cors')
const compression = require('compression');

const api = express();
api.use(express.json({limit: '1mb'}));
api.use(cors())
api.use(logger('dev'));
api.use(compression());

const router = require('./routes');
router.get("/", (_, res) => res.json({ status: true }));
api.use("/.netlify/functions/api", router);

export const handler = serverless(api);
