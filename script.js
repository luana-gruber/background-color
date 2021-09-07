

document.getElementById('button-style').addEventListener('click',function() {

    const color1 = document.getElementById("color1").value
    const color2 = document.getElementById("color2").value
    const degrees = document.getElementById("degrees").value
    const colorfont = document.getElementById("color-font").value
    const text = document.getElementById("text").value
    const size = document.getElementById("font-size").value

    if(degrees < 0 || degrees > 360 || degrees == ""){
        alert ("Campo inválido ou em branco")
    }else{

    const stylepage = {
        color1,
        color2,
        degrees,
        colorfont,
        text,
        size
    }

    const jsonObj = JSON.stringify(stylepage)

    localStorage.setItem('style', jsonObj)

    loadStorage();
}  
})

loadStorage();

function loadStorage(){
    const localParsed = JSON.parse(localStorage.getItem('style'))
    document.body.style.backgroundImage = `linear-gradient(${localParsed.degrees}deg, 
        ${localParsed.color1}, ${localParsed.color2})`;

    
    const divText = document.querySelector('.div-text');

    divText.innerHTML = `<p>${localParsed.text}</p>`;
    divText.style.fontSize = `${(localParsed.size + 'px')}`;
}

  document.getElementById('button-clean').addEventListener('click', function()  {
      
    localStorage.removeItem('style')
    
    document.body.style = ""
    document.location.reload(true);
  })
