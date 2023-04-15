describe('GET request with response status check', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/get',
      failOnStatusCode: false
    };
  
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
      })
    })

    it('test if the duration of the request does not exceed 1000 miliseconds', () => {
        cy.request(request).then(response => {
          assert.isTrue(response.duration <= 1000)
        })
      })
})

describe('DELETE request with response status check', () => {
    const request = {
      method: 'DELETE',
      url: 'https://httpbin.org/delete',
      failOnStatusCode: false
    };
  
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
      })
    })

    it('test if the duration of the request does not exceed 1000 miliseconds', () => {
        cy.request(request).then(response => {
          assert.isTrue(response.duration <= 1000)
        })
      })
  })

describe('POST request with response status check', () => {
    const request = {
      method: 'POST',
      url: 'https://httpbin.org/post',
      failOnStatusCode: false
    };
  
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
      })
    })

    it('test if the duration of the request does not exceed 1000 miliseconds', () => {
        cy.request(request).then(response => {
          assert.isTrue(response.duration <= 1000)
        })
      })
  })

  describe('GET request simulation of an image in jpeg format', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/image/jpeg',
      headers: {
        "accept": "image/jpeg",
      },
      failOnStatusCode: false
    };
  
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
      })
    })

    it('test that header set correctly', () => {
        cy.request(request).then(response => {
          assert.equal("image/jpeg", response.requestHeaders["accept"]);
        })
    })

    it('test if the duration of the request does not exceed 1000 miliseconds', () => {
        cy.request(request).then(response => {
          assert.isTrue(response.duration <= 1000)
        })
      })
  })

  describe('GET request with negative scenario when url is wrong', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/ge',
      failOnStatusCode: false
    };
  
    it('response code should be 404', () => {
      cy.request(request).then(response => {
        assert.equal(404, response.status);
      })
    })
  })

  describe('GET request with negative scenario when method used is wrong', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/post',
      failOnStatusCode: false
    };
  
    it('response code should be 405', () => {
      cy.request(request).then(response => {
        assert.equal(405, response.status);
      })
    })
  })

  describe('GET request simulation with query response check', () => {
    const request = {
      url: 'https://httpbin.org/get',
      qs: {
        "query": "Movie title"
      },
      failOnStatusCode: false
    };
  
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal("Movie title", response.body.args.query);
      })
    })
  })


  describe('POST request simulation with body response check', () => {
    const bodyData = {
      message: "message content",
      title: "title"
    };
  
    const request = {
      method: 'POST',
      url: 'https://httpbin.org/post',
      body: bodyData,
      failOnStatusCode: false
    };

    it('test check response status', () => {
        cy.request(request).then(response => {
          assert.equal(200, response.status);
        })
      })
  
    it('test response content', () => {
      cy.request(request).then(response => {
        assert.notStrictEqual(bodyData, response.body.data);
      })
    })

    it('test if the duration of the request does not exceed 1000 miliseconds', () => {
        cy.request(request).then(response => {
          assert.isTrue(response.duration <= 1000)
        })
      })

      it('Show the response', () => {
        cy.request(request).then(response => {
          cy.log('Response was: ' + JSON.stringify(response.body))
        })
      })
  })

  describe('GET request simulation with custom headers', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      failOnStatusCode: false
    };
  
    it('test check response status', () => {
        cy.request(request).then(response => {
          assert.equal(200, response.status);
        })
      })

    it('test that header set correctly', () => {
        cy.request(request).then(response => {
          assert.equal("application/json;charset=utf-8", response.requestHeaders["Content-Type"]);
        })
    })

    it('test if the duration of the request does not exceed 1000 miliseconds', () => {
        cy.request(request).then(response => {
          assert.isTrue(response.duration <= 1000)
        })
      })
  })

  describe('GET request simulation from diffrent web browser', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/get',
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0'
      },
      failOnStatusCode: false
    };

    it('test check response status', () => {
        cy.request(request).then(response => {
          assert.equal(200, response.status);
        })
      })
  
    it('test if the user-agent is set correctly', () => {
      cy.request(request).then(response => {
        assert.equal("Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0", response.requestHeaders['user-agent']);
      })
    })

    it('test if the duration of the request does not exceed 1000 miliseconds', () => {
        cy.request(request).then(response => {
          assert.isTrue(response.duration <= 1000)
        })
      })

    it('Show the response', () => {
        cy.request(request).then(response => {
          cy.log('Response was: ' + JSON.stringify(response.body))
        })
      })
  })