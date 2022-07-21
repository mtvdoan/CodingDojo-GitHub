function logIn(loginbtn){
    if (loginbtn.innerText == "Sign Out"){
        
        loginbtn.innerText= "Login";
    }    
    else{
        loginbtn.innerText= "Sign Out";
    }    
}

function hide(defbutn){
    defbutn.remove();
}


function addlike(likes){
    likes.innerText="14 likes";
    
}
