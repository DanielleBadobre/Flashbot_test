const express = require('express');
const connectDB = require('./config/connect');

const app = express();

connectDB();