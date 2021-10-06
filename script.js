
   function mostrarLegenda()
   {
      var git = document.getElementById("open");
     var form1= document.getElementById("form1");
      
      if (form1.style.display == 'none') {
        form1.style.display = 'block';
    } else {
        form1.style.display = 'none';
    }
   }

  
   function cadastro(){
       var nome = document.getElementById('nome');
       var endereco = document.getElementById('endereco');

       var dados = JSON.parse(localStorage.getItem('dadosP'));

       if(dados == null){
           localStorage.setItem("dados, []");
           dados =[];
       } 
       var auxRegistro ={
           nome: nome.value,
           endereco: endereco.value
       }

       dados.push(auxRegistro);
       localStorage.setItem("dadosP", JSON.stringify(dados));
       alert('Registro incluido')
   }

   
   
