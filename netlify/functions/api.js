import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = require('./routes');
router.get("", (_, res) => res.json({ status: true }));
api.use("/.netlify/functions/api/", router);

export const handler = serverless(api);
