const assert = require('assert');
const fetch = require('node-fetch');

describe('broken link test', function() {
    it('should check the page for broken links', async function () {
            browser.url('http://127.0.0.1:8000');
            const sidebar= $$("[role=menu]");
            const menu = sidebar[0];
            const resources = menu.$$("li")[0];
            resources.click();
            const sub_menu=resources.$(function(){return this.nextSibling});
            if(sub_menu.isExisting()){
            console.log("hello");
            //const sub_div=menu.$$("div.jss162.jss163")[0];
            const sub_menu_list=sub_menu.$$("li");
            //console.log(typeof(sub_menu_list));
            for(let i of sub_menu_list){
            //li1=i;
            i.click();
            f(resources);
            i.click();
            }
        }
            resources.click(); 
    });
});


async function f(resources){
    const sub_menu=resources.$(function(){return this.nextSibling});
    links=sub_menu.$$('a');
    //console.log("2");
    urls=links.map(link => link.getAttribute('href'));
    requests=urls.map(url => fetch(url));
    responses=await Promise.all(requests);
    statuscode = responses.map(response=> response.status);
    statuscode.forEach(status => {
       // console.log("here");
        assert(status<400);
    });

}
