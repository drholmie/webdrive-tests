const assert = require('assert');
describe('linkerd dashboard', () => {
    it('should have the right title', () => {
        browser.url('http://127.0.0.1:8000');
        browser.pause(3000);
        const overview=$("div.main-content").$("div.page-content").$("div.jss170").$("div.jss284");
        overview.$("div.jss25.jss28.jss287.jss288").$$("div")[0].click();
        headers=["Deployment","Meshed", "Success Rate", "RPS", "P50 Latency", 
        "P95 Latency", "P99 Latency", "TLS", "Grafana"];
        overview.$$("div.jss25.jss28.jss287").forEach( item=> {
            item.click();
            browser.pause(3000);
            expanded_table=item.$$("table");
             if(expanded_table.lenght>0){
            for(let header of expanded_table){
                theaders=header.$("thead").$$("th");
                title=theader[0].getText();
                j=0;
                assert(title=="Deployment" || title=="Daemon Set" || title=="Authority" || title=="Pod");
                theaders.shift();
                for(let head in theaders){
                    assert.equal(head.getText(), headers[j]);
                    j++;
                }
            }
            item.click();
            }
        });
}
    )});
