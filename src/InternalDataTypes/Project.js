let ContentType = Object.freeze({
    Video: 'Video',
    Photo: 'Photo'
});

class Project {
    constructor() {
        this.IsHidden = false;
        this.OrdinalNumber = 0;
        this.Path = '';
        this.ThumbnailImage = '';
        this.Name = '';
        this.Description = '';
        this.Tags = [];
        this.Date = new Date();
        this.Content = [];
    }
}

export { Project, ContentType };
