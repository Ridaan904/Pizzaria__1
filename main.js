menu_list_array = [ "Veg Margherita Pizza",
"Pizza",
"Paneer Pizza",
"Pepperoni Pizza",
"Mix Tandoori Pizza",
"Mexican GreenWave Pizza",
"Deluxe Veggies Pizza"];

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
	var item = document.getElementById("add_suggestion").value;
    menu_list_array.push(item);
}

