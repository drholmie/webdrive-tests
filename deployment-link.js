const assert = require('assert');
const fetch = require('node-fetch');
    describe('broken link test', function() {
    it('should check the page for broken links', async function () {
        browser.url('http://127.0.0.1:8000/deployments');
        browser.waitUntil(() => {
            return $('table').isExisting();
          }, 10000, 'expected table to exist');
        const resources=$("table");
        links=resources.$$("a");
        urls=links.map(link => link.getAttribute('href'));
        requests=urls.map(url => fetch(url));
        responses=await Promise.all(requests);
        statuscode = responses.map(response=> response.status);
        statuscode.forEach(status => {
            assert(status<400);
        });

    });
});
