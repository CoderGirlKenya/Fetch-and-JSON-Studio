
window.addEventListener("load", function(){
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        console.log(response);
    response.json().then(function(json){
      console.log(json);
    
      for(astronauts of json){
        const container = document.getElementById("container");
        container.innerHTML =
        
     };
    });    
  });
});

