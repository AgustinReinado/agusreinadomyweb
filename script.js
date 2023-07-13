function validarCampos() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'hola' || password === 'chau') {
      alert('bienvenido');
      return false;
    }else if(username === '' || password === ''){
      alert('Porfavor ingrese un usuario y contraeña');
    }else{
      alert('Usuario no registrado.');
    }
    
    return true; 
  }
