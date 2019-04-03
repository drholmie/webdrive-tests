const assert = require('assert');
describe('linkerd servicemesh', () => {
    it('should have the right tables', () => {
        browser.url("http://127.0.0.1:8000/servicemesh");
        browser.pause(5000);
       tables=$$("table");
       tab1_header=["Deployment", "Pods","Pod Status"];
       tab2_header=["Namespace","Meshed pods","Meshed Status"];
       tab3_header=["Name","Value"];
       tab_rows=["Grafana","Prometheus","Proxy API","Public API","Tap","Web UI"];
       tables.forEach(item =>{
            headers=item.$("thead").$$("th").map(th => th.getText());
            if(headers[0]=="Deployment"){
                trows=item.$("tbody").$$("tr").map(tr=>tr.$$("td")[0].getText());
                assert(trows.join(''),tab_rows.join(''));
            }
            assert(headers.join('')==tab1_header.join('')||headers.join('')==tab2_header.join('')||
            headers.join('')==tab3_header.join(''));

       });
    }
    )});
