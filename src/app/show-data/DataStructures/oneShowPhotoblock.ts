

export class photo {
    constructor(obj?: any) { 
        this.photoNumber = obj.photoNumber;
        this.thumbnail = obj.thumbnail;
        this.fullsize = obj.fullsize;
        this.title = obj.title;
        this.width = obj.width;
        this.height = obj.height;
    }

    public photoNumber :number;
    public thumbnail :string;
    public fullsize :string;
    public title :string;
    public width :number;
    public height :number;
};

export class photoBlock {
    constructor (obj? :any) {
        this.photoblock = obj && obj.photoblock || 0;
        this.description = obj && obj.description || '';
        this.photographs = obj && obj.photographs || null;
    }

    public photoblock :number;
    public description :string;
    public photographs :photo[];
}