const request = require('supertest');
const app = require("../app.js");

request(app)
.get("/api/customparams")
.send()
.set('Accept', 'application/json')
.expect(200, { data: "content " + "customparams" })
.end((error, request) => {});