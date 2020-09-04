class Search{
    constructor(){
        this.key = "AIzaSyDrONmsbMjq52LN3yA1keyZ5EKRoEa3iz4"
        this.cx = "004076080844892058106:cfph5pf0k1c"
    }

    async getSearch(input){
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${this.key}&cx=${this.cx}&q=${input}`);

        const result = await response.json();

        return result;
    }
}


