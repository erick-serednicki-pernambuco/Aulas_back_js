const  request  = require("supertest");
const  app  = require("./app");



describe('GET/',() => {
    it('DEVE RESPONDER COM STATUS 200 se existir id', (done) => {
        request(app)
        .get('/1')
        .expect('Content-type',/json/)
        .expect(200, done);
    
   });
});


describe('GET/:id',() => {
  it('DEVE RESPONDER COM STATUS 200', (done) => {
      request(app)
      .get('/1')
      .expect('Content-type',/json/)
      .expect(200, done);
  
 });
 it('DEVE RESPONDER COM STATUS 200 se existir id', (done) => {
  request(app)
  .get('/9999999')
  .expect(404, done);

});
});
