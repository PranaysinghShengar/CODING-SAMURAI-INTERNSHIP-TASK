 // Simple reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('visible');
      })
    }, {threshold: 0.08});
    reveals.forEach(r=>io.observe(r));

    // Modal behaviour for projects
    const projects = document.querySelectorAll('.project');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalTech = document.getElementById('modalTech');
    const closeModal = document.getElementById('closeModal');

    projects.forEach(p=>{
      p.addEventListener('click', ()=>{
        modalTitle.textContent = p.dataset.title;
        modalDesc.textContent = p.dataset.desc;
        modalTech.textContent = p.dataset.tech;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden','false');
      })
    })
    closeModal.addEventListener('click', ()=>{ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); });
    modal.addEventListener('click', e=>{ if(e.target === modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); } });

    // Contact form - simple front-end response
    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      const fmsg = document.getElementById('formMsg');
      if(!name||!email||!msg){ fmsg.textContent='Please fill all fields.'; return; }
      fmsg.textContent = 'Thanks, '+name+" — I'll get back to you soon!";
      this.reset();
    });

    // Tiny interactive tilt on mouse for projects
    document.querySelectorAll('.project').forEach(card=>{
      card.addEventListener('mousemove', e=>{
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${ -y*6 }deg) rotateY(${ x*6 }deg)`;
      });
      card.addEventListener('mouseleave', ()=>{ card.style.transform=''; });
    });