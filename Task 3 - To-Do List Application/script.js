 let tasks = [];

    function addTask() {
      const input = document.getElementById('taskInput');
      const text = input.value.trim();
      if (text === '') return;

      tasks.push({ text, completed: false });
      input.value = '';
      renderTasks();
    }

    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }

    function editTask(index) {
      const newText = prompt('Edit task:', tasks[index].text);
      if (newText !== null && newText.trim() !== '') {
        tasks[index].text = newText.trim();
        renderTasks();
      }
    }

    

    function removeWithAnimation(element, index) {
      element.classList.add('fade-out');
      setTimeout(() => {
        tasks.splice(index, 1);
        renderTasks();
      }, 300);
    }

    function renderTasks() {
      const list = document.getElementById('taskList');
      list.innerHTML = '';

      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('fade-in');
        if (task.completed) li.classList.add('completed');

        const span = document.createElement('span');
        span.textContent = task.text;
        span.onclick = () => toggleTask(index);

        const actions = document.createElement('div');
        actions.className = 'actions';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editTask(index);

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'delete';
        delBtn.onclick = () => removeWithAnimation(li, index);

        actions.append(editBtn, delBtn);
        li.append(span, actions);
        list.appendChild(li);
      });
    }