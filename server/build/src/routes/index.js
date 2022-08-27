"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortUrl_controller_1 = require("../controller/shortUrl.controller");
function routes(app) {
    app.get('/healthcheck', (req, res) => {
        return res.send('App is all gucci');
    });
    app.post('/api/url', shortUrl_controller_1.createShortUrl);
    app.get('/:shortId', shortUrl_controller_1.handleRedirect);
    app.get('/api/analytics', shortUrl_controller_1.getAnalytics);
}
exports.default = routes;
