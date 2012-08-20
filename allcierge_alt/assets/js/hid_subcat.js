// JS for categiroes

 switch(CatValue)
    {
        case "1": $("#subcategory1").show();
        break;
        case "2": $("#subcategory2").show(); 
        break;
    }
    
    
    $('#subcategory1, #subcategory2, #subcategory3, #subcategory4').hide().filter('#subcategory'+CatValue).show();