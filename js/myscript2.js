/**Script que carrega junto com a pagina atraves do eventlistener "onload"
 da Home page */

function posts(){

    var obj    = document.getElementById('body');
    var navobj = document.getElementById('navcolor');
    var h1obj  = document.getElementById('h1');
    var pobj   = document.getElementById('p');

    /*Verifica se existe um SessionStorage e se não existir o mesmo é criado*/

    if(!sessionStorage.getItem('chave')){

        sessionStorage.setItem('chave','claro');
        document.getElementById("switch").src                   = "img/desligado.png";
                                control                         = sessionStorage.getItem('chave');
                                obj.className                   = 'light';
                                navobj.className                = 'navbar navbar-expand-lg navbar-light sticky-top bg-light';
                                h1obj.className                 = 'h1-light';
                                pobj.className                  = 'p-light';
        document.getElementById("rodape").style.backgroundColor = ('#CCCCCC');
        
        
        
    
       /*chama metodo que precisa de loop para alterar o dom*/
        lightpost();
    
        } else if (sessionStorage.getItem('chave') == 'claro'){
    
            sessionStorage.setItem('chave','claro');
            document.getElementById("switch").src                   = "img/desligado.png";
                                    control                         = sessionStorage.getItem('chave');
                                    obj.className                   = 'light';
                                    navobj.className                = 'navbar navbar-expand-lg navbar-light sticky-top bg-light';
                                    h1obj.className                 = 'h1-light';
                                    pobj.className                  = 'p-light';
            document.getElementById("rodape").style.backgroundColor = ('#CCCCCC');
           
            
            
        
           /*chama metodo que precisa de loop para alterar o dom do tema claro*/
            lightpost();
    
    
        } else {
    
            document.getElementById("switch").src = "img/ligado.png";
            sessionStorage.setItem('chave', 'escuro');
                                    control                         = sessionStorage.getItem('chave');
                                    obj.className                   = 'dark';
                                    navobj.className                = 'navbar navbar-expand-lg sticky-top bg-dark navbar-dark';
                                    h1obj.className                 = 'h1-dark';
                                    pobj.className                  = 'p-dark';
            document.getElementById("rodape").style.backgroundColor = ('#242526');
          
            
            
            
        /*chama metodo que precisa de loop para alterar o dom do tema escuro*/
            darkpost();
        }

}

/*metodo que altera para o tema claro botoes e menu*/
function lightpost(){
    var botao, dropmenu, dropItem,  u, y,g;
    
    botao    = document.getElementsByClassName('btn btn-dark');
    dropmenu = document.getElementsByClassName('dropdown-menu');
    dropItem = document.getElementsByClassName("dropdown-item");
    
   for(y = 0; y < dropmenu.length; y++){
    dropmenu[y].style.backgroundColor = "#F8F9FA";
   
        for(u = 0; u < botao.length; u++){
            botao[u].className = ('btn btn-light');
        }
        for(g = 0; g < dropItem.length; g++){
            dropItem[g].style.color = "#000000";

        }
        

        }
    }
      
        
    

/*metodo que altera para o tema escuro dos botoes, menu*/
function darkpost(){
    var botao, dropmenu, dropItem,  u, y,g;
    
    botao    = document.getElementsByClassName('btn btn-dark');
    dropmenu = document.getElementsByClassName('dropdown-menu');
    dropItem = document.getElementsByClassName("dropdown-item");
    
    for(y = 0; y < dropmenu.length; y++){

        dropmenu[y].style.backgroundColor = "#343A40";
   
        for(u = 0; u < botao.length; u++){
            botao[u].className = ('btn btn-light');
        }
        for(g = 0; g < dropItem.length; g++){
            dropItem[g].style.color = "#E4E6EB";

        }
        

    }
    }
/* metodo do botão que muda os temas*/
function ligadesliga(){
    
    var control = sessionStorage.getItem('chave');

    var obj    = document.getElementById('body');
    var navobj = document.getElementById('navcolor');
    var h1obj  = document.getElementById('h1');
    var pobj   = document.getElementById('p');
   
    

    

    if(control == 'escuro'){
        
    document.getElementById("switch").src = "img/desligado.png";
    sessionStorage.setItem('chave', 'claro');
                            control                         = sessionStorage.getItem('chave');
                            obj.className                   = 'light';
                            navobj.className                = 'navbar navbar-expand-lg navbar-light sticky-top bg-light';
                            h1obj.className                 = 'h1-light';
                            pobj.className                  = 'p-light';
    document.getElementById("rodape").style.backgroundColor = ('#CCCCCC');
   
    

   
    lightpost();
    

   
    } else if(control == 'claro'){
        
        document.getElementById("switch").src = "img/ligado.png";
        sessionStorage.setItem('chave', 'escuro');
                            control                         = sessionStorage.getItem('chave');
                            obj.className                   = 'dark';
                            navobj.className                = 'navbar navbar-expand-lg sticky-top bg-dark navbar-dark';
                            h1obj.className                 = 'h1-dark';
                            pobj.className                  = 'p-dark';
    document.getElementById("rodape").style.backgroundColor = ('#242526');
      
        
        
    
        darkpost();
        
        

    }
}

