const form = document.getElementById('signupForm');
  const msg = document.getElementById('formMsg');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if(name === '' || email === ''){
      msg.style.color = 'red';
      msg.textContent = 'Please fill all the fields.';
      return;
    }

    msg.style.color = '#22c55e';
    msg.textContent = `Thank you, ${name}! Your account has been created successfully.`;

    form.reset();
  });