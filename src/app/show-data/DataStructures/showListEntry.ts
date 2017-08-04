
export class showListEntry {
    constructor(obj: any) { 
        console.log ("In constructor"); 

        this.showNumber = parseInt(obj.showNumber);
        this.showDate = obj.showDate;
        this.showTitle = obj.showTitle;
        this.clubName = obj.clubName;
        this.role = obj.role;
    }

    public showNumber :number;
    public showDate :string;
    public showTitle :string;
    public clubName :string;
    public clubUrl :string;
    public role :string;
}