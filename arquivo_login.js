var tipo = document.getElementById('senha')


document.getElementById('fechado').addEventListener('click', () => {
 
 

    
    tipo.type == 'password' ? tipo.type = 'text' : tipo.type = 'password';
    
    document.getElementById('fechado').style.display = 'none';
    document.getElementById('aberto').style.display = 'inline-block';
  
}

)

document.getElementById('aberto').addEventListener('click', () => {
  
  
    
    tipo.type == 'text' ? tipo.type = 'password' : tipo.type = 'text';
   
    
    document.getElementById('aberto').style.display = 'none';
    document.getElementById('fechado').style.display = 'inline-block';
  
})