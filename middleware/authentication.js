const express = require("express");

function validateAuthentication(req, res, next) {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return res.status(401).send({
      error: 'Unauthorized',
      message: 'You are not authenticated.',
    });
  }
}

module.exports = validateAuthentication;
  