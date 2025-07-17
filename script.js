function changeCase(text){
    if(text=='upperCase'){
        const text=document.getElementById("text");
        text.textContent=text.textContent.toUpperCase();
    }
    else if(text=='lowerCase'){
        const text=document.getElementById("text");
        text.textContent=text.textContent.toLowerCase();
    }
}

function changeColor(color){
    if(color=='orange'){
        document.getElementById("text").style.color='orange';
    }
    else if(color=='blue'){
        document.getElementById("text").style.color='blue';
    }
    else if(color=='green'){
        document.getElementById("text").style.color="green";
    }
}

function changeStyle(text){
    if(text=='bold'){
        document.getElementById("text").style.fontSize="900";
        document.getElementById("text").style.fontStyle="normal";
        document.getElementById("text").style.textDecoration="none";

    }
    else if(text=='italic'){
        document.getElementById("text").style.fontStyle="italic";
        document.getElementById("text").style.fontSize="none";
        document.getElementById("text").style.textDecoration="none";
    }
    else if(text=='underline'){
        document.getElementById("text").style.textDecoration='underline';
        document.getElementById("text").style.fontStyle="normal";
    }
}