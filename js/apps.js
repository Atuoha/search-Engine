const search = new Search();  // CREATING OBJECT 
const ui = new UI();

// obtaining ui elements
document.getElementById('search').addEventListener('keyup',function(e){
    const input = e.target.value
    obtain_searched(input);
})

//Obtain Searched function
function obtain_searched(input){
    search.getSearch(input)
    .then(data =>{
        console.log(data)
         ui.showSearched(data)   // displaying
    })
    .catch(err => console.log(err))
} 