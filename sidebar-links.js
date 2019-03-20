const assert = require('assert');
const fetch = require('node-fetch');

describe('broken link test', function() {
    it('should check the page for broken links', async function () {
            browser.url('http://127.0.0.1:8000');
            const sidebar= $(".jss91.jss92.jss4");
            const menu = sidebar.$$("ul")[0];
            const resources = menu.$$("li")[0];
            resources.click();
            const sub_menu=$("div.jss126");
            if(sub_menu.isExisting()){
            const sub_menu_list=sub_menu.$$("li");
            for(let i of sub_menu_list){
            i.click();
            f();
            i.click();
            }
        }
            resources.click(); 
    });
});


async function f(){
    const sub_menu=$("div.jss126");
    links=sub_menu.$$('a');
    urls=links.map(link => link.getAttribute('href'));
    requests=urls.map(url => fetch(url));
    responses=await Promise.all(requests);
    statuscode = responses.map(response=> response.status);
    statuscode.forEach(status => {
        assert(status<400);
    });

}
