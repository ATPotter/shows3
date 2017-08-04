
export class oneShowHtml  {
    constructor(obj?: any) { 

        this.top = obj && obj.top || '';
        this.bottom = obj && obj.bottom || '';
    }

    public top :string;
    public bottom :string;
}