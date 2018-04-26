$(document).ready(function(){
    for(var i=1; i <= 5;++i){
        var src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ i +".png"
        $(".images").append("<img src='"+ src + "' id='"+i+"'>");
        //console.log(" start i is:" + i);
        //var src = "https://pokeapi.co/api/v2/pokemon/"+i+"/";
       /*  $.get(src,function(res){
            $(".images").append("<img src='" + res.sprites.front_default + "' id='"+i+"'>");
            console.log("i is:" + i);
        });
        console.log("end i is:" + i); */
    }
    $(".images").on("click","img",function(){
        //console.log($(this).attr("id"));
        var src = "https://pokeapi.co/api/v2/pokemon/"+ $(this).attr("id") + "/";
        $.get(src,function(res){
            var html_string = "";
            var name = res.name;
            var src = res.sprites.front_default;
            var types = "<h3>Types<h3/>";    
            html_string += "<h1>"+name+"</h1>"+"<img src='"+src+"'>"+types;
            html_string += "<ul>";
            for(var i = 0; i < res.types.length; i++) {
                var list_item = "<li>"+res.types[i].type.name+"</li>";
                html_string+= list_item;
            }
            html_string += "</ul>"; 
            var weight = "<h3>Weight</h3><p>"+res.weight+"</p>";
            html_string += weight;
            var height = "<h3>Height<h3/><p>"+res.height+"</p>";
            html_string += height;
            $(".pokedex").html(html_string);
        });
    });    
});

/* console.log("name: "+res.name); 
console.log("image: "+res.sprites.front_default);
for(var i = 0; i < res.types.length; i++) {
    console.log("types: "+res.types[i].type.name);
}            
console.log("weight: "+res.weight);
console.log("height: "+res.height); */


/* <h1></h1>
<img src="" alt="">
<h3></h3>
<ul>
    <li></li>
</ul>
<h3></h3>
<p></p>
<h3></h3>
<p></p> */