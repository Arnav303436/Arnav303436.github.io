document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('person-modal');
    const modalName = document.getElementById('modal-name');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.querySelector('.close-button');
    const persons = document.querySelectorAll('.person');

    persons.forEach(person => {
        person.addEventListener('click', function(event) {
            event.preventDefault();
            
            const name = this.textContent;
            const description = this.getAttribute('data-description');
            
            modalName.textContent = name;
            modalDescription.textContent = description;
            
            modal.style.display = 'block';
        });
    });

    function closeModal() {
        modal.style.display = 'none';
    }

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});
