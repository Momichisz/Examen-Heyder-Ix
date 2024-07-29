document.addEventListener('DOMContentLoaded', () => {
    const ul = document.getElementById('main');
    const addButton = document.getElementById('add');
    let contador = 3;
    addButton.addEventListener('click', () => {
        const li = document.createElement('li');
        li.className = 'element';
        li.textContent = `Nuevo ítem ${contador++}`;
        
        const removeButton = document.createElement('button');
        removeButton.className = 'remove';
        removeButton.textContent = 'Eliminar';
        
        removeButton.addEventListener('click', () => {
            ul.removeChild(li);
        });

        li.appendChild(removeButton);
        ul.appendChild(li);
    });

    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', (e) => {
            const li = e.target.parentElement;
            ul.removeChild(li);
        });
    });
});
