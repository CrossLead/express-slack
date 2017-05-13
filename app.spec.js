/** UNIT TESTS FOR APP.JS */
require('mocha');
const request = require('supertest');

describe('loading express', ()=>{
  	let server;
	
	beforeEach(()=>{
  		delete require.cache[require.resolve('./bin/www')];
    	server = require('./bin/www');
	});
	
	afterEach((done)=>{
    	server.close(done);
    });
	
	it('responds to /', (done)=>{
		request(server)
    		.get('/')
    		.expect(200, done);
  	});

  	it('responds with 404 to non-routes', (done)=>{
    	request(server)
    		.get('/foo/bar')
    		.expect(404, done);
  	});

  	/* Test the Slack route */
  	it('responds correctly to a slack post', (done)=>{
  		request(server)
  			.post('/slack')
  			.send({ 
  				token: 'u3yVE3pr48uITzYudLdMgG30',
				team_id: 'T039BB39F',
				team_domain: 'crosslead',
				channel_id: 'D5AJTKUDB',
				channel_name: 'directmessage',
				user_id: 'U5ADVUXGT',
				user_name: 'gabriels',
				command: '/clp',
				text: 'example command text',
				response_url: 'https://hooks.slack.com/commands/T039BB39F/181053241776/o2Yfc8v7j1EsEva1Y4bAMlEr' 
			})
  			.expect(200, ()=>{
  				setTimeout(done, 1000);
  			});
  	})
});