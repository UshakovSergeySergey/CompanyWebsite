(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(53)},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),c=n.n(i),l=n(2),o=n(3),s=n(5),u=n(4),m=n(6),p=function e(){var t=this;Object(l.a)(this,e),this.getCompanyName=function(){return"\u041e\u041e\u041e \xab\u041d\u0430\u0448\u0430 \u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\xbb"},this.getCompanyYearsOfExistence=function(){return"2018"},this.getListOfSections=function(){var e=t.WebSiteSections.filter(function(e){return!e.IsHidden});return e.sort(function(e,t){return e.OrdinalNumber<t.OrdinalNumber?-1:t.OrdinalNumber<e.OrdinalNumber?1:0}),e},this.getListOfSocialMedia=function(){var e=t.LinksToSocialMedia.filter(function(e){return!e.IsHidden});return e.sort(function(e,t){return e.OrdinalNumber<t.OrdinalNumber?-1:t.OrdinalNumber<e.OrdinalNumber?1:0}),e},this.getListOfClientLogos=function(){var e=t.ClientsPage.ClientLogos.filter(function(e){return!e.IsHidden});return e.sort(function(e,t){return e.OrdinalNumber<t.OrdinalNumber?-1:t.OrdinalNumber<e.OrdinalNumber?1:0}),e},this.getListOfKeyEmployees=function(){var e=t.CompanyPage.KeyEmployees.filter(function(e){return!e.IsHidden});return e.sort(function(e,t){return e.OrdinalNumber<t.OrdinalNumber?-1:t.OrdinalNumber<e.OrdinalNumber?1:0}),e},this.sectionIsVisible=function(e){var n=t.WebSiteSections.find(function(t){return t.Link===e});return!!n&&!n.IsHidden},this.getCompanyPhoneNumber=function(){return t.CompanyPhoneNumber},this.getCompanyEmail=function(){return t.CompanyEmail},this.getCompanyLegalAddress=function(){return t.CompanyLegalAddress},this.getCompanyOfficeAddress=function(){return t.CompanyOfficeAddress},this.getCompanyMailCorrespondenceAddress=function(){return t.CompanyMailCorrespondenceAddress},this.getCompanyFaxNumber=function(){return t.CompanyFaxNumber},this.getCompanyWorkingHours=function(){return t.CompanyWorkingHours},this.CompanyPhoneNumber="",this.CompanyEmail="",this.CompanyLegalAddress="",this.CompanyOfficeAddress="",this.CompanyMailCorrespondenceAddress="",this.CompanyFaxNumber="",this.CompanyWorkingHours="",this.WebSiteSections=[],this.LinksToSocialMedia=[],this.MainPage={},this.CompanyPage={},this.ContactsPage={},this.PortfolioPage={},this.ServicesPage={},this.ClientsPage={},this.NewsPage={},this.NotFoundPage={}},d=n(54),b=Object.freeze({Main:"/main",Company:"/company",Contacts:"/contacts",Portfolio:"/portfolio",Services:"/services",Clients:"/clients",News:"/news",NotFound:"/pageNotFound"}),h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={navigationBar:null,sticky:null},n.handleScroll=function(){var e=n.state,t=e.navigationBar,a=e.sticky;window.pageYOffset>=a?t.classList.add("sticky"):t.classList.remove("sticky")},n.getLinksToSections=function(){var e=n.props.webSiteStructure,t=n.props.currentSection,a=e.getListOfSections().map(function(e){var a=t===e.Link?"active":"";return r.a.createElement("li",{className:a,key:e.OrdinalNumber},r.a.createElement(d.a,{to:"/CompanyWebsite"+e.Link,onClick:function(t){n.props.sectionChanged(e.Link)}},e.Name))});return r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},a)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll);var e=document.getElementById("header-navigation-bar"),t=e.offsetTop;this.setState({navigationBar:e,sticky:t})}},{key:"render",value:function(){var e=this.props.webSiteStructure;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar-default"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-8"},r.a.createElement(d.a,{to:"/CompanyWebsite"+b.Main},r.a.createElement("img",{className:"navbar-brand",style:{height:"128px",width:"128px"},src:"logo.svg",alt:e.getCompanyName()}))),r.a.createElement("div",{className:"col-xs-4"},r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"tel:"+e.getCompanyPhoneNumber()},e.getCompanyPhoneNumber())),r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"mailto:"+e.getCompanyEmail()},e.getCompanyEmail()))))),r.a.createElement("nav",{id:"header-navigation-bar",className:"navbar navbar-inverse",style:{zIndex:99}},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#header-navbar"},r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement(d.a,{className:"navbar-brand",to:"/CompanyWebsite"+b.Main},e.getCompanyName())),r.a.createElement("div",{className:"collapse navbar-collapse",id:"header-navbar"},this.getLinksToSections()))))}}]),t}(r.a.Component),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).getLinksToSections=function(){var e=n.props.webSiteStructure,t=n.props.currentSection,a=e.getListOfSections().map(function(e){var a="";t===e.Link&&(a=" active");return r.a.createElement("li",{className:"footer-nav-element"+a,key:e.OrdinalNumber},r.a.createElement(d.a,{className:"footer-nav-element-selected",to:"/CompanyWebsite"+e.Link,onClick:function(t){n.props.sectionChanged(e.Link)}},e.Name))});return r.a.createElement("ul",{className:"nav navbar-nav"},a)},n.getLinksToSocialMedia=function(){for(var e=n.props.webSiteStructure.getListOfSocialMedia().map(function(e){return r.a.createElement("a",{key:e.OrdinalNumber,href:e.Link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"social-media-icon",src:"/CompanyWebsite"+e.Icon,alt:e.Link}))}),t=[],a=0,i=e.length;a<i;a+=5)t.push(e.slice(a,a+5));var c=t.map(function(e,t){return r.a.createElement("div",{className:"row",key:t},e)});return r.a.createElement(r.a.Fragment,null,c)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return r.a.createElement("div",{id:"footer-block"},r.a.createElement("div",{style:{color:"#9d9d9d"}},r.a.createElement("div",{className:"row",style:{paddingTop:"30px"}},r.a.createElement("div",{className:"col-xs-6",style:{lineHeight:1.8}},r.a.createElement("div",{className:"row"},e.getCompanyName()),r.a.createElement("div",{className:"row"},e.getCompanyLegalAddress()),r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"mailto:"+e.getCompanyEmail()},e.getCompanyEmail())),r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"tel:"+e.getCompanyPhoneNumber()},e.getCompanyPhoneNumber())),r.a.createElement("div",{className:"row"},this.getLinksToSocialMedia())),r.a.createElement("div",{className:"col-xs-3"}),r.a.createElement("div",{className:"col-xs-3"},r.a.createElement("div",{className:"navbar navbar-inverse navbar-stacked",style:{borderColor:"transparent"}},this.getLinksToSections()))),r.a.createElement("div",{className:"row",style:{lineHeight:3.8,textAlign:"center"}},"\xa9 ",e.getCompanyYearsOfExistence()," ",e.getCompanyName())))}}]),t}(r.a.Component),f=n(56),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return e.sectionIsVisible(b.Main)?r.a.createElement("div",null,r.a.createElement("h1",null,e.MainPage.Caption)):r.a.createElement(f.a,{to:b.NotFound})}}]),t}(r.a.Component),y=function e(){Object(l.a)(this,e),this.OrdinalNumber=0,this.IsHidden=!1,this.Photo="",this.Name="",this.Position="",this.PhoneNumber="",this.Email=""},g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",null,r.a.createElement("div",{style:{float:"left"}},r.a.createElement("img",{style:{height:"128px",width:"128px"},src:"/CompanyWebsite"+e.Photo,alt:e.Name})),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"\u0424\u0418\u041e:")," ",e.Name),r.a.createElement("p",null,r.a.createElement("b",null,"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:")," ",e.Position),r.a.createElement("p",null,r.a.createElement("b",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:")," ",e.PhoneNumber),r.a.createElement("p",null,r.a.createElement("b",null,"\u041f\u043e\u0447\u0442\u0430:")," ",e.Email),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(r.a.Component),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).getKeyEmployees=function(){var e=n.props.webSiteStructure.getListOfKeyEmployees().map(function(e){return r.a.createElement(g,{key:e.OrdinalNumber,data:Object.assign(new y,e)})});return r.a.createElement("div",null,e)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return e.sectionIsVisible(b.Company)?r.a.createElement("div",null,r.a.createElement("h1",null,e.CompanyPage.Caption),r.a.createElement("p",null,e.CompanyPage.Text),this.getKeyEmployees()):r.a.createElement(f.a,{to:b.NotFound})}}]),t}(r.a.Component),O=n(23),N=n.n(O),S=function(e){var t=e.text;return r.a.createElement("div",{id:"map-office-label"},t)},j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"500px",width:"100%"}},r.a.createElement(N.a,{defaultCenter:this.props.center,defaultZoom:this.props.zoom},r.a.createElement(S,{lat:55.871203,lng:37.658275,text:"\u041d\u0430\u0448 \u043e\u0444\u0438\u0441"})))}}]),t}(a.Component);j.defaultProps={center:{lat:55.871203,lng:37.658275},zoom:17};var w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return e.sectionIsVisible(b.Contacts)?r.a.createElement("div",null,r.a.createElement("h1",null,e.ContactsPage.Caption),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d:"),r.a.createElement("td",null,e.getCompanyPhoneNumber())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0424\u0430\u043a\u0441:"),r.a.createElement("td",null,e.getCompanyFaxNumber())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:"),r.a.createElement("td",null,e.getCompanyLegalAddress())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0410\u0434\u0440\u0435\u0441 \u043e\u0444\u0438\u0441\u0430:"),r.a.createElement("td",null,e.getCompanyOfficeAddress())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0430\u0434\u0440\u0435\u0441:"),r.a.createElement("td",null,e.getCompanyMailCorrespondenceAddress())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b:"),r.a.createElement("td",null,e.getCompanyWorkingHours())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b:"),r.a.createElement("td",null,e.getCompanyEmail())))),r.a.createElement(j,null)):r.a.createElement(f.a,{to:b.NotFound})}}]),t}(r.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return e.sectionIsVisible(b.Portfolio)?r.a.createElement("div",null,r.a.createElement("h1",null,e.PortfolioPage.Caption)):r.a.createElement(f.a,{to:b.NotFound})}}]),t}(r.a.Component),P=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return e.sectionIsVisible(b.Services)?r.a.createElement("div",null,r.a.createElement("h1",null,e.ServicesPage.Caption)):r.a.createElement(f.a,{to:b.NotFound})}}]),t}(r.a.Component),L=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).getClientLogos=function(){var e=n.props.webSiteStructure.getListOfClientLogos().map(function(e){return r.a.createElement("img",{key:e.OrdinalNumber,className:"client-logo",src:"/CompanyWebsite"+e.Icon,alt:"missing text"})});return r.a.createElement("div",null,e)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return e.sectionIsVisible(b.Clients)?r.a.createElement("div",null,r.a.createElement("h1",null,e.ClientsPage.Caption),r.a.createElement("p",null,e.ClientsPage.Text),r.a.createElement("h2",null,"\u041d\u0430\u043c \u0434\u043e\u0432\u0435\u0440\u044f\u044e\u0442:"),this.getClientLogos()):r.a.createElement(f.a,{to:b.NotFound})}}]),t}(r.a.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return e.sectionIsVisible(b.News)?r.a.createElement("div",null,r.a.createElement("h1",null,e.NewsPage.Caption)):r.a.createElement(f.a,{to:b.NotFound})}}]),t}(r.a.Component),W=n(58),A=n(57),M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return r.a.createElement("div",null,r.a.createElement("h1",null,e.NotFoundPage.Caption))}}]),t}(r.a.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return r.a.createElement("div",{className:"container-fluid main-content"},r.a.createElement(W.a,null,r.a.createElement(A.a,{exact:!0,path:"/CompanyWebsite/",render:function(){return r.a.createElement(v,{webSiteStructure:e})}}),r.a.createElement(A.a,{path:"/CompanyWebsite"+b.Main,render:function(){return r.a.createElement(v,{webSiteStructure:e})}}),r.a.createElement(A.a,{path:"/CompanyWebsite"+b.Company,render:function(){return r.a.createElement(C,{webSiteStructure:e})}}),r.a.createElement(A.a,{path:"/CompanyWebsite"+b.Contacts,render:function(){return r.a.createElement(w,{webSiteStructure:e})}}),r.a.createElement(A.a,{path:"/CompanyWebsite"+b.Portfolio,render:function(){return r.a.createElement(k,{webSiteStructure:e})}}),r.a.createElement(A.a,{path:"/CompanyWebsite"+b.Services,render:function(){return r.a.createElement(P,{webSiteStructure:e})}}),r.a.createElement(A.a,{path:"/CompanyWebsite"+b.Clients,render:function(){return r.a.createElement(L,{webSiteStructure:e})}}),r.a.createElement(A.a,{path:"/CompanyWebsite"+b.News,render:function(){return r.a.createElement(x,{webSiteStructure:e})}}),r.a.createElement(A.a,{path:"/CompanyWebsite"+b.NotFound,render:function(){return r.a.createElement(M,{webSiteStructure:e})}}),r.a.createElement(A.a,{render:function(){return r.a.createElement(f.a,{to:"/CompanyWebsite"+b.NotFound})}})))}}]),t}(r.a.Component),I=(n(51),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={webSiteStructure:null,currentSection:b.Main},n.sectionChanged=function(e){n.setState({currentSection:e})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data.json").then(function(e){return e.json()}).then(function(t){return e.setState({webSiteStructure:Object.assign(new p,t)})})}},{key:"render",value:function(){var e=this.state,t=e.webSiteStructure,n=e.currentSection;return r.a.createElement("div",{className:"container-fluid",style:{padding:"0px"}},r.a.createElement("div",{className:"App"},t&&r.a.createElement(h,{webSiteStructure:t,currentSection:n,sectionChanged:this.sectionChanged}),t&&r.a.createElement(F,{webSiteStructure:t}),t&&r.a.createElement(E,{webSiteStructure:t,currentSection:n,sectionChanged:this.sectionChanged})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(55);c.a.render(r.a.createElement(H.a,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.42f742b2.chunk.js.map