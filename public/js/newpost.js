const newPostFormHandler = async (event) => {
   
    event.preventDefault();
  

    const title = document.querySelector('#post_title');
    const content = document.querySelector('#post_content');
  
    
      const response = await fetch('/api/users/newpost', {
        method: 'POST',
        body: JSON.stringify({ 
            post_title: title.value,
            body: content.value,
           }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    
  };
  
  document
    .querySelector('.new-post')
    .addEventListener('submit', newPostFormHandler);