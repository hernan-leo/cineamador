/**Script que carrega junto com a pagina atraves do eventlistener "onload"
 da Home page */

function principal(){

    
    var obj    = document.getElementById('body');
    var navobj = document.getElementById('navcolor');
    var h1obj  = document.getElementById('h1');
    var pobj   = document.getElementById('p');
    var lista  = document.getElementById('postslist');
    
    
/*Verifica se existe um SessionStorage e se não existir o mesmo é criado*/

    if(!sessionStorage.getItem('chave')){

    sessionStorage.setItem('chave','claro');
    document.getElementById        ("switch").src                                = "img/desligado.png";
                                    control                                      = sessionStorage.getItem('chave');
                                    obj.className                                = 'light';
                                    navobj.className                             = 'navbar navbar-expand-lg navbar-light sticky-top bg-light';
                                    h1obj.className                              = 'h1-light';
                                    pobj.className                               = 'p-light';
    document.getElementById        ("rodape").style.backgroundColor              = ('#CCCCCC');
                                    lista.className                              = 'card text-md-left text-sm-center bg-light mb-3';
    
    
    

   /*chama metodo que precisa de loop para alterar o dom*/
    lightcard();

    } else if (sessionStorage.getItem('chave') == 'claro'){

        sessionStorage.setItem('chave','claro');
        document.getElementById        ("switch").src                                = "img/desligado.png";
                                        control                                      = sessionStorage.getItem('chave');
                                        obj.className                                = 'light';
                                        navobj.className                             = 'navbar navbar-expand-lg navbar-light sticky-top bg-light';
                                        h1obj.className                              = 'h1-light';
                                        pobj.className                               = 'p-light';
        document.getElementById        ("rodape").style.backgroundColor              = ('#CCCCCC');
                                        lista.className                              = 'card text-md-left text-sm-center bg-light mb-3';
       
        
        
    
        /*chama metodo que precisa de loop para alterar o dom do tema claro*/
        lightcard();


    } else {

        document.getElementById("switch").src = "img/ligado.png";
        sessionStorage.setItem('chave', 'escuro');
                                control                         = sessionStorage.getItem('chave');
                                obj.className                   = 'dark';
                                navobj.className                = 'navbar navbar-expand-lg sticky-top bg-dark navbar-dark';
                                h1obj.className                 = 'h1-dark';
                                pobj.className                  = 'p-dark';
        document.getElementById("rodape").style.backgroundColor = ('#242526');
                                lista.className                 = 'card text-md-left text-sm-center bg-dark mb-3';
        
        
        
     /*chama metodo que precisa de loop para alterar o dom do tema escuro*/
        darkcard();
    }

    

}
/*metodo que altera para o tema claro dos cards,botoes.menu e da lista*/
function lightcard(){
    var card, botao, dropmenu, dropItem, lista, i, u, z, y, g, v;
    card     = document.getElementsByClassName('card');
    botao    = document.getElementsByClassName('btn btn-dark');
    lista    = document.getElementsByClassName('list-group-item list-group-item-dark');
    dropmenu = document.getElementsByClassName('dropdown-menu');
    dropItem = document.getElementsByClassName('dropdown-item');
   
   
    for(i = 0; i < card.length; i++){
        card[i].style.backgroundColor = "#FFFFFF";
        for(u = 0; u < botao.length; u++){
            botao[u].className = ('btn btn-light');
        }
        for(z = 0; z < lista.length; z++){
            lista[z].className = ('list-group-item list-group-item-light')
        }
        for(y = 0; y < dropmenu.length; y++){
            dropmenu[y].style.backgroundColor = "#F8F9FA";

        }
        for(g =0; g < dropItem.length; g++){
            dropItem[g].style.color = "#000000";

        }
             
      
        
    }
}

/*metodo que altera para o tema escuro dos cards,botoes.menu e da lista*/
function darkcard(){
    var card, botao,lista, dropmenu,dropItem, i, u, z, y,g;
    card     = document.getElementsByClassName('card');
    botao    = document.getElementsByClassName('btn btn-light');
    lista    = document.getElementsByClassName('list-group-item list-group-item-light');
    dropmenu = document.getElementsByClassName('dropdown-menu');
    dropItem = document.getElementsByClassName("dropdown-item");

    for(i = 0; i < card.length; i++){
        card[i].style.backgroundColor = '#242526' ;
        for(u = 0; u < botao.length; u++){
            botao[u].className = ('btn btn-dark');
        }
        for(z = 0; z < lista.length; z++){
            lista[z].className = ('list-group-item list-group-item-dark')
        }
        for(y = 0; y < dropmenu.length; y++){
            dropmenu[y].style.backgroundColor = "#343A40";

        }
        for(g =0; g < dropItem.length; g++){
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
    var lista  = document.getElementById('postslist');
    var dropdown = document.getElementById('dropmenu');
   
   
    

    

    if(control == 'escuro'){
        
    document.getElementById("switch").src = "img/desligado.png";
    sessionStorage.setItem('chave', 'claro');
                            control                         = sessionStorage.getItem('chave');
                            obj.className                   = 'light';
                            navobj.className                = 'navbar navbar-expand-lg navbar-light sticky-top bg-light';
                            h1obj.className                 = 'h1-light';
                            pobj.className                  = 'p-light';
    document.getElementById("rodape").style.backgroundColor = ('#CCCCCC');
                            lista.className                 = 'card text-md-left text-sm-center bg-light mb-3';
                            dropdown.className              = 'dropdown-menu dropdown-menu-light';
    
    

   
    lightcard();
    

   
    } else if(control == 'claro'){
        
        document.getElementById("switch").src = "img/ligado.png";
        sessionStorage.setItem('chave', 'escuro');
                                control                         = sessionStorage.getItem('chave');
                                obj.className                   = 'dark';
                                navobj.className                = 'navbar navbar-expand-lg sticky-top bg-dark navbar-dark';
                                h1obj.className                 = 'h1-dark';
                                pobj.className                  = 'p-dark';
        document.getElementById("rodape").style.backgroundColor = ('#242526');
                                lista.className                 = 'card text-md-left text-sm-center bg-dark mb-3';
        
        
        
    
        darkcard();
    }
        

}

