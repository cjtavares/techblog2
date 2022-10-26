const loginFormHandler = async (event) => {
   
    event.preventDefault();
  

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ 
          username: email, 
          password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response.ok)
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);