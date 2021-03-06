
/* 
Declartion of search terms, made a constant and added objects
*/
const objects = [
    {name: 'pinks'},
    {name: 'subway'},
    {name: 'basilique'},
    {name: 'burritos'},
    {name: 'sobeys'},
    {name: 'mcdonalds'},
];

/* 
Gathers list from index.html 
*/
const list = document.getElementById('list');

/*
Here we make a function to retrive the name of each object, if none, no results

*/
function setList(objects){
    clearList();
    for (const object of objects){
        const item = document.createElement('li');
        item.classList.add('list-group-item')
        const text = document.createTextNode(object.name)
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0){
        setNoResults();
    }

}

/*
Empties list, removes first element
*/
function clearList() {

    while (list.firstChild) {

        list.removeChild(list.firstChild);

    }

}

/*
No results
*/
function setNoResults() {
    const item = document.createElement('li');
    const text = document.createTextNode("No results found")
    item.appendChild(text);
    list.appendChild(item);

}
/* 
Gets search from index.html
*/
const searchInput = document.getElementById('search');

/* 
Displays in order of most relavant to least
*/
function getRelevancy(value, searchTerm){

    if (value === searchTerm){
        return 2;
    } else if (value.startsWtih(searchTerm)){
        return 1;
    } else{
        return 0;
    }

}
/* 
Listens for input, and shows each by relevancy
*/
searchInput.addEventListener('input', (event) => {

    let value = event.target.value;

    if (value && value.trim().length > 0){
        value = value.trim().toLowerCase();
        setList(objects.filter(object =>{
            return object.name.includes(value)
        }).sort((objectA, objectB) =>{
            return getRelevancy(objectB.name,value) - getRelevancy(objectA.name,value);
        }));
    } else {
        clearList();
    }
});







/* 
shows dropdown checks classlist and toggles for show
*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/* 
filterfunction, here we for loop through the text and check to see what is typed
*/
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


/* 
Gets user location using google maps api
*/
$('#location-button2').click(function(){
        
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          console.log(position);
          $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
            console.log(data);
          })
          var img = new Image();
          img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
          $('#output').html(img);
        });
        
    }
});