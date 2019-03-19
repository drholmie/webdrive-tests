const assert = require('assert');
const fetch = require('node-fetch');
describe('linkerd dashboard', () => {
    it('should have the right title', () => {
        browser.url('http://127.0.0.1:8000');
        const sidebar= $(".jss91.jss92.jss4");
        const menu = sidebar.$$("ul")[0];
        //console.log(title)
        assert.equal(menu.$$("a")[0].getText(), 'Overview');
        assert.equal(menu.$$("a")[1].getText(), 'Tap');
        assert.equal(menu.$$("a")[2].getText(), 'Top');
        assert.equal(menu.$$("a")[3].getText(), 'Top Routes');
        assert.equal(menu.$$("a")[4].getText(), 'Service Mesh');
        const resources = menu.$$("li")[0];
        assert.equal(resources.getText(), 'Resources');
        resources.click();
        const sub_menu=$("div.jss126");
        //console.log(sub_menu.getHTML());
        //const psub_menu=$("");
        if(sub_menu.isExisting()){
        assert.equal(sub_menu.$$("li")[0].getText(), 'Authorities');
        assert.equal(sub_menu.$$("li")[1].getText(), 'Deployments');
        assert.equal(sub_menu.$$("li")[2].getText(), 'Daemon Sets');
        assert.equal(sub_menu.$$("li")[3].getText(), 'Namespaces');
        assert.equal(sub_menu.$$("li")[4].getText(), 'Pods');
        assert.equal(sub_menu.$$("li")[5].getText(), 'Replication Controllers');
        assert.equal(sub_menu.$$("li")[6].getText(), 'Stateful Sets');
        sub_menu.$$("li").forEach((item)=>{
            //console.log(item.getHTML())
             item.click();
             item_sub_menu=sub_menu.$("div.jss162.jss163");
             //item_sub_menu.$$('div').waitForExist(5000);
             //console.log(item_sub_menu.getHTML())
             ind=item_sub_menu.$$('div')[0].getText().search("All*");
             assert.notEqual(-1,ind);
             //assert.equal(true, item_sub_menu.$$('div')[0].getText().match('All*'));
             item.click();
        });
    }
       
}
    )});

describe('broken link test', function() {
    it('should check the page for broken links', async function () {
            browser.url('http://127.0.0.1:8000');
            const sidebar= $(".jss91.jss92.jss4");
            const menu = sidebar.$$("ul")[0];
            const resources = menu.$$("li")[0];
            resources.click();
            const sub_menu=$("div.jss126");
            if(sub_menu.isExisting()){
            console.log("hello");
            //const sub_div=menu.$$("div.jss162.jss163")[0];
            const sub_menu_list=sub_menu.$$("li");
            //console.log(typeof(sub_menu_list));
            for(let i of sub_menu_list){
            //li1=i;
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

