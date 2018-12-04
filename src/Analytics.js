let ActionTypes = Object.freeze({
    LinkClicked: 'Link click',
    Toggle: 'Toggled',
    Outbound: 'Outbound'
});

class Analytics {
    static pageChanged = (pagePath, pageTitle, pageUrl) => {
        let data = {};
        if(pagePath)    data['page_path'] = pagePath;
        if(pageTitle)   data['page_title'] = pageTitle;
        if(pageUrl)     data['page_location'] = pageUrl;

        const gtag = window.gtag;
        gtag('config', 'UA-130276012-1', data);
    };
    static fireEvent = (action, eventCategory, eventLabel, eventValue) => {
        let data = {};
        if(eventCategory)   data['event_category'] = eventCategory;
        if(eventLabel)      data['event_label'] = eventLabel;
        if(eventValue)      data['value'] = eventValue;

        const gtag = window.gtag;
        gtag('event', action, data);
    };
}

export { Analytics, ActionTypes };
