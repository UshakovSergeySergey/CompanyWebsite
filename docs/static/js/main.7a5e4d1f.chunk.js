(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(59)},53:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),l=n.n(i),c=n(2),o=n(3),u=n(5),s=n(4),m=n(6),p=function e(){var t=this;Object(c.a)(this,e),this.getListOfSections=function(){var e=t.WebSiteSections.filter(function(e){return!e.IsHidden});return e.sort(function(e,t){return e.OrdinalNumber<t.OrdinalNumber?-1:t.OrdinalNumber<e.OrdinalNumber?1:0}),e},this.getListOfSocialMedia=function(){var e=t.LinksToSocialMedia.filter(function(e){return!e.IsHidden});return e.sort(function(e,t){return e.OrdinalNumber<t.OrdinalNumber?-1:t.OrdinalNumber<e.OrdinalNumber?1:0}),e},this.getListOfClientLogos=function(){var e=t.ClientsPage.ClientLogos.filter(function(e){return!e.IsHidden});return e.sort(function(e,t){return e.OrdinalNumber<t.OrdinalNumber?-1:t.OrdinalNumber<e.OrdinalNumber?1:0}),e},this.getListOfKeyEmployees=function(){var e=t.CompanyPage.KeyEmployees.filter(function(e){return!e.IsHidden});return e.sort(function(e,t){return e.OrdinalNumber<t.OrdinalNumber?-1:t.OrdinalNumber<e.OrdinalNumber?1:0}),e},this.sectionIsVisible=function(e){var n=t.WebSiteSections.find(function(t){return t.Link===e});return!!n&&!n.IsHidden},this.getCompanyPhoneNumber=function(){return t.CompanyPhoneNumber},this.getCompanyEmail=function(){return t.CompanyEmail},this.getCompanyLegalAddress=function(){return t.CompanyLegalAddress},this.getCompanyOfficeAddress=function(){return t.CompanyOfficeAddress},this.getCompanyMailCorrespondenceAddress=function(){return t.CompanyMailCorrespondenceAddress},this.getCompanyFaxNumber=function(){return t.CompanyFaxNumber},this.getCompanyWorkingHours=function(){return t.CompanyWorkingHours},this.CompanyPhoneNumber="",this.CompanyEmail="",this.CompanyLegalAddress="",this.CompanyOfficeAddress="",this.CompanyMailCorrespondenceAddress="",this.CompanyFaxNumber="",this.CompanyWorkingHours="",this.WebSiteSections=[],this.LinksToSocialMedia=[],this.ClientsPage={},this.CompanyPage={}},b=n(60),d=Object.freeze({Main:"/main",Company:"/company",Contacts:"/contacts",Portfolio:"/portfolio",Services:"/services",Clients:"/clients",News:"/news",NotFound:"/pageNotFound"}),h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).getLinksToSections=function(){var e=n.props.webSiteStructure,t=n.props.currentSection,a=e.getListOfSections().map(function(e){var a="";t===e.Link&&(a=" active active-menu-item");return r.a.createElement("li",{className:"nav-item"+a,key:e.OrdinalNumber},r.a.createElement(b.a,{className:"nav-link",to:"/CompanyWebsite"+e.Link,onClick:function(t){n.props.sectionChanged(e.Link)}},e.Name))});return r.a.createElement("ul",{className:"navbar-nav mr-auto"},a)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return r.a.createElement("div",{id:"header-block"},r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("span",{className:"navbar-brand"},e.getCompanyPhoneNumber()),r.a.createElement("span",{className:"navbar-brand"},e.getCompanyEmail())),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(b.a,{to:"/CompanyWebsite"+d.Main},r.a.createElement("img",{className:"navbar-brand",src:"logo.png",alt:"Company logo"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},this.getLinksToSections())))}}]),t}(r.a.Component),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).getLinksToSections=function(){var e=n.props.webSiteStructure,t=n.props.currentSection,a=e.getListOfSections().map(function(e){var a="";t===e.Link&&(a=" active active-menu-item");return r.a.createElement("li",{className:a,key:e.OrdinalNumber},r.a.createElement(b.a,{to:"/CompanyWebsite"+e.Link,onClick:function(t){n.props.sectionChanged(e.Link)}},e.Name))});return r.a.createElement("ul",null,a)},n.getLinksToSocialMedia=function(){var e=n.props.webSiteStructure.getListOfSocialMedia().map(function(e){return r.a.createElement("a",{key:e.OrdinalNumber,href:e.Link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"social-media-icon",src:"/CompanyWebsite"+e.Icon,alt:e.Link}))});return r.a.createElement(r.a.Fragment,null,e)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return r.a.createElement("div",{id:"footer-block"},r.a.createElement("p",null,"copyright"),r.a.createElement("p",null,e.getCompanyLegalAddress()),r.a.createElement("p",null,e.getCompanyEmail()),r.a.createElement("p",null,e.getCompanyPhoneNumber()),this.getLinksToSections(),this.getLinksToSocialMedia())}}]),t}(r.a.Component),f=n(62),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.webSiteStructure.sectionIsVisible(d.Main)?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"\u0413\u041b\u0410\u0412\u041d\u0410\u042f"))):r.a.createElement(f.a,{to:d.NotFound})}}]),t}(r.a.Component),g=function e(){Object(c.a)(this,e),this.OrdinalNumber=0,this.IsHidden=!1,this.Photo="",this.Name="",this.Position="",this.PhoneNumber="",this.Email=""},O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",null,r.a.createElement("div",{style:{float:"left"}},r.a.createElement("img",{style:{height:"128px",width:"128px"},src:"/CompanyWebsite"+e.Photo,alt:e.Name})),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"\u0424\u0418\u041e:")," ",e.Name),r.a.createElement("p",null,r.a.createElement("b",null,"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:")," ",e.Position),r.a.createElement("p",null,r.a.createElement("b",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:")," ",e.PhoneNumber),r.a.createElement("p",null,r.a.createElement("b",null,"\u041f\u043e\u0447\u0442\u0430:")," ",e.Email),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(r.a.Component),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).getKeyEmployees=function(){var e=n.props.webSiteStructure.getListOfKeyEmployees().map(function(e){return r.a.createElement(O,{key:e.OrdinalNumber,data:Object.assign(new g,e)})});return r.a.createElement("div",null,e)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return e.sectionIsVisible(d.Company)?r.a.createElement("div",null,r.a.createElement("h1",null,e.CompanyPage.Caption),r.a.createElement("p",null,e.CompanyPage.Text),this.getKeyEmployees()):r.a.createElement(f.a,{to:d.NotFound})}}]),t}(r.a.Component),v=n(25),S=n.n(v),j=function(e){var t=e.text;return r.a.createElement("div",{id:"map-office-label"},t)},N=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"500px",width:"100%"}},r.a.createElement(S.a,{defaultCenter:this.props.center,defaultZoom:this.props.zoom},r.a.createElement(j,{lat:55.871203,lng:37.658275,text:"\u041d\u0430\u0448 \u043e\u0444\u0438\u0441"})))}}]),t}(a.Component);N.defaultProps={center:{lat:55.871203,lng:37.658275},zoom:17};var w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return e.sectionIsVisible(d.Contacts)?r.a.createElement("div",null,r.a.createElement("h1",null,e.ContactsPage.Caption),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d:"),r.a.createElement("td",null,e.getCompanyPhoneNumber())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0424\u0430\u043a\u0441:"),r.a.createElement("td",null,e.getCompanyFaxNumber())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:"),r.a.createElement("td",null,e.getCompanyLegalAddress())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0410\u0434\u0440\u0435\u0441 \u043e\u0444\u0438\u0441\u0430:"),r.a.createElement("td",null,e.getCompanyOfficeAddress())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0430\u0434\u0440\u0435\u0441:"),r.a.createElement("td",null,e.getCompanyMailCorrespondenceAddress())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0412\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b:"),r.a.createElement("td",null,e.getCompanyWorkingHours())),r.a.createElement("tr",null,r.a.createElement("td",null,"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b:"),r.a.createElement("td",null,e.getCompanyEmail())))),r.a.createElement(N,null)):r.a.createElement(f.a,{to:d.NotFound})}}]),t}(r.a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.webSiteStructure.sectionIsVisible(d.Portfolio)?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"\u041f\u041e\u0420\u0422\u0424\u041e\u041b\u0418\u041e"))):r.a.createElement(f.a,{to:d.NotFound})}}]),t}(r.a.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.webSiteStructure.sectionIsVisible(d.Services)?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"\u0423\u0421\u041b\u0423\u0413\u0418"))):r.a.createElement(f.a,{to:d.NotFound})}}]),t}(r.a.Component),P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).getClientLogos=function(){var e=n.props.webSiteStructure.getListOfClientLogos().map(function(e){return r.a.createElement("img",{key:e.OrdinalNumber,className:"client-logo",src:"/CompanyWebsite"+e.Icon,alt:"missing text"})});return r.a.createElement("div",null,e)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return e.sectionIsVisible(d.Clients)?r.a.createElement("div",null,r.a.createElement("h1",null,e.ClientsPage.Caption),r.a.createElement("p",null,e.ClientsPage.Text),r.a.createElement("h2",null,"\u041d\u0430\u043c \u0434\u043e\u0432\u0435\u0440\u044f\u044e\u0442:"),this.getClientLogos()):r.a.createElement(f.a,{to:d.NotFound})}}]),t}(r.a.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.webSiteStructure.sectionIsVisible(d.News)?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"\u041d\u041e\u0412\u041e\u0421\u0422\u0418"))):r.a.createElement(f.a,{to:d.NotFound})}}]),t}(r.a.Component),A=n(64),x=n(63),I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"\u0421\u0422\u0420\u0410\u041d\u0418\u0426\u0410 \u041d\u0415 \u041d\u0410\u0419\u0414\u0415\u041d\u0410")))}}]),t}(r.a.Component),F=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webSiteStructure;return r.a.createElement("div",{id:"main-content"},r.a.createElement(A.a,null,r.a.createElement(x.a,{exact:!0,path:"/CompanyWebsite/",render:function(){return r.a.createElement(y,{webSiteStructure:e})}}),r.a.createElement(x.a,{path:"/CompanyWebsite"+d.Main,render:function(){return r.a.createElement(y,{webSiteStructure:e})}}),r.a.createElement(x.a,{path:"/CompanyWebsite"+d.Company,render:function(){return r.a.createElement(C,{webSiteStructure:e})}}),r.a.createElement(x.a,{path:"/CompanyWebsite"+d.Contacts,render:function(){return r.a.createElement(w,{webSiteStructure:e})}}),r.a.createElement(x.a,{path:"/CompanyWebsite"+d.Portfolio,render:function(){return r.a.createElement(k,{webSiteStructure:e})}}),r.a.createElement(x.a,{path:"/CompanyWebsite"+d.Services,render:function(){return r.a.createElement(L,{webSiteStructure:e})}}),r.a.createElement(x.a,{path:"/CompanyWebsite"+d.Clients,render:function(){return r.a.createElement(P,{webSiteStructure:e})}}),r.a.createElement(x.a,{path:"/CompanyWebsite"+d.News,render:function(){return r.a.createElement(W,{webSiteStructure:e})}}),r.a.createElement(x.a,{path:"/CompanyWebsite"+d.NotFound,render:function(){return r.a.createElement(I,{webSiteStructure:e})}}),r.a.createElement(x.a,{render:function(){return r.a.createElement(f.a,{to:"/CompanyWebsite"+d.NotFound})}})))}}]),t}(r.a.Component),M=(n(53),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={webSiteStructure:null,currentSection:d.Main},n.sectionChanged=function(e){n.setState({currentSection:e})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("data.json").then(function(e){return e.json()}).then(function(t){return e.setState({webSiteStructure:Object.assign(new p,t)})})}},{key:"render",value:function(){var e=this.state,t=e.webSiteStructure,n=e.currentSection;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"App"},t&&r.a.createElement(h,{webSiteStructure:t,currentSection:n,sectionChanged:this.sectionChanged}),t&&r.a.createElement(F,{webSiteStructure:t}),t&&r.a.createElement(E,{webSiteStructure:t,currentSection:n,sectionChanged:this.sectionChanged})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(61);n(55),n(57),n(24),n(58);l.a.render(r.a.createElement(T.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.7a5e4d1f.chunk.js.map