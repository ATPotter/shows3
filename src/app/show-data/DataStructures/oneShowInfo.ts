
export class oneShowInfo {

    constructor(obj?: any) { 

        this.showNumber = obj && parseInt(obj.showNumber) || 0;
        this.showDate = obj && obj.showDate || '';
        this.showTitle = obj && obj.showTitle || '';
        this.clubName = obj && obj.clubName || '';
        this.role = obj && obj.role || '';
    }

    public showNumber :number;
    public showDate :string;
    public showTitle :string;
    public clubName :string;
    public clubUrl :string;
    public role :string;
}