var modal = document.getElementById("myModal2");
                    
var img = document.getElementById("head2");
var modalImg = document.getElementById("head_2");
var captionText = document.getElementById("caption2");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML= this.alt;
    captionText.style.fontSize= 20+"px";
}

var span = document.getElementsByClassName("close2")[0];     

span.onclick = function() { 
    modal.style.display = "none";
}


var modal = document.getElementById("myModal1");
                    
var img = document.getElementById("head1");
var modalImg = document.getElementById("head_1");
var captionText = document.getElementById("caption1");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML= this.alt;
    captionText.style.fontSize= 20+"px";
}

var span = document.getElementsByClassName("close1")[0];     

span.onclick = function() { 
    modal.style.display = "none";
}                        

var modal = document.getElementById("myModal4");
                    
var img = document.getElementById("head4");
var modalImg = document.getElementById("head_4");
var captionText = document.getElementById("caption4");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML= this.alt;
    captionText.style.fontSize= 20+"px";
}

var span = document.getElementsByClassName("close4")[0];     

span.onclick = function() { 
    modal.style.display = "none";
}

var modal = document.getElementById("myModal3");
                    
var img = document.getElementById("head3");
var modalImg = document.getElementById("head_3");
var captionText = document.getElementById("caption3");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML= this.alt;
    captionText.style.fontSize= 20+"px";
}

var span = document.getElementsByClassName("close3")[0];     

span.onclick = function() { 
    modal.style.display = "none";
}    