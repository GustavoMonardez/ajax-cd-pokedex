$(document).ready(function(){
    for(var i=1; i <= 151;++i){
        var src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ i +".png"
        $(".images").append("<img src='"+ src + "' id='"+i+"'>");
    }
    $(".images").on("click","img",function(){
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