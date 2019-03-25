const assert = require('assert');
    describe('table check', function() {
    it('should check the page for proper table structure', async function () {
        browser.url('http://127.0.0.1:8000/deployments');
        browser.waitUntil(() => {
            return $('table').isExisting();
          }, 10000, 'expected table to exist');
        headers=["Namespace", "Deployment","Meshed", "Success Rate", "RPS", "P50 Latency", 
        "P95 Latency", "P99 Latency", "TLS", "Grafana"];
        const resources=$("table");
        const thead=resources.$$("thead");
        j=0;
        for(let item of thead){
            assert.equal(item.$$("th")[j].getText(),headers[j]);
            j++;
        }
    });
});
