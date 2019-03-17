const assert = require('assert');

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
    resources.click();
    docs=sidebar.$$("ul")[1];
    assert.equal(docs.$$("a")[0].getText(),"Documentation");
    help=docs.$$("li")[0];
    assert.equal(help.getText(),"Help");
    help.click();
    help_menu=$("div.jss126");
    assert.equal(help_menu.$$("a")[0].getText(),"Join the mailing list");
    assert.equal(help_menu.$$("a")[1].getText(),"Join us on slack");
    assert.equal(help_menu.$$("a")[2].getText(),"File an issue");
    });


});