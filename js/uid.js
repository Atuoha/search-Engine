class UI{
    constructor(){
        this.searched = document.getElementById('searched');
    }

    // SHOW PROFILE IN UI
    showSearched(data){
        for (const i = 0; i < data.items.length; i++) {
            const item = data.items[i];
        this.searched.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <p>Name: ${item.title}</p>
                <a href="${item.link}" target="_blank">${item.link}</a>
                <div clas="row">
                  <div class="col-md-3">
                     <img src="${item.link}" width="100" class="rounded-circle img-fluid mb-2">
                  </div>
                </div>

                <div class="col-md-9">
                  ${item.htmlSnippet}
                </div>

                <div>
                  // description
                </div>


            </div>
        `;
        }
    }

    

    // CLEAR PROFILE IN UI
    clearProfile(){
        this.profile.innerHTML = '';
    }

    
}