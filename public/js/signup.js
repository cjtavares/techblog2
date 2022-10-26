const signinFormHandler = async (event) => {
   
    event.preventDefault();
  

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ 
          username: email, 
          password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create user');
      }
    
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signinFormHandler);