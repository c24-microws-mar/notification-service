'use strict';

function registerRoutes(app) {
  app.post('/order-notification', (req, res) => {
    res.status(501).send({
      success: false,
      message: 'method is not yet implemented'
    });
  });
}

module.exports = {
  registerRoutes: registerRoutes
};
