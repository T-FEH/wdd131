// Declare variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('#list');

// Add event listener to the Add Chapter button
button.addEventListener('click', function() {
    // Check if input is not blank
    if (input.value.trim() !== '') {
        // Create a li element that will hold each entry's chapter title and an associated delete button
        const li = document.createElement('li');
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);
        deleteButton.classList.add('delete-btn');
        
        // Populate the li element with the input value
        li.textContent = input.value;
        
        // Append the delete button to the li
        li.appendChild(deleteButton);
        
        // Append the li to the list
        list.appendChild(li);
        
        // Clear the input value
        input.value = '';
    } else {
        // If blank, focus back to input (could add alert if desired, but instructions say message or nothing)
        input.focus();
    }
    
    // Send focus to input regardless
    input.focus();
});

// Add event listener to the list for delete buttons (event delegation)
list.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        // Remove the li element
        e.target.parentElement.remove();
    }
});
