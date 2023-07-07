function validarCampos() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === '' || password === '') {
      alert('Por favor, completa todos los campos.');
      return false;
    }
    
    return true; 
  }

