const assert = require('assert');
const fetch = require('node-fetch');
    describe('broken link test', function() {
    it('should check the page for broken links', async function () {
        browser.url('http://127.0.0.1:8000');
        browser.pause(5000);
        const overview=$("div.page-content");
        //overview.$("div.jss25.jss28.jss287.jss288").$$("div")[0].click();
        browser.pause(3000);
        const tables=overview.$$("div[role=button]");
            for(let table of tables){
                console.log("here?");
                table.click();
                browser.pause(3000);
                expanded_table=table.$$("table");
                if(expanded_table.length>0){
                    for(let trows of expanded_table){
                        links=trows.$$("a");
                        if(links.length>0){
                            urls=links.map(link => link.getAttribute('href'));
                            requests=urls.map(link => fetch(link));
                            responses=await Promise.all(requests);
                            statuscode = responses.map(response=> response.status);
                            statuscode.forEach(status => {
                                assert(status<400);
                            });
                        console.log("should be here?");

                        }
                    }
                }
                table.click();
        }
    });
});
