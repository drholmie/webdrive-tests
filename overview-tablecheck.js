const assert = require('assert');
describe('linkerd overview', () => {
    it('should have correct tables', () => {
        browser.url('http://127.0.0.1:8000');
        browser.pause(3000);
        const overview=$("div.page-content");
        headers=["Deployment","Meshed", "Success Rate", "RPS", "P50 Latency", 
        "P95 Latency", "P99 Latency", "TLS", "Grafana"];
        list=overview.$$("div[role=button]");
        list.forEach( item=> {
            item.scrollIntoView();
            item.click();
            browser.pause(3000);
            if(item.$("table").isExisting()){
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
        }
        });
}
    )});
