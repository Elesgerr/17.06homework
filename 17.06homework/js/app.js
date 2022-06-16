window.oncontextmenu = function(){
    return false  
}

document.querySelector('#click').onclick = function(){
    
    if(document.querySelector('#list input').value.length == 0){
        alert("Bos Qalmasin")
    }

    else{
        document.querySelector('#values').innerHTML += `
            <div class="test">
                <span id="test1">
                    ${document.querySelector('#list input').value}
                </span>
                <button class="delete">
                    <span>Delete</span>
                </button>
            </div>
        `;
       
        var remove = document.querySelectorAll(".delete");
        for(var i=0; i<remove.length; i++){
            remove[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
    document.getElementById("input").value=""
}
