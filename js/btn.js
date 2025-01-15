document.addEventListener('DOMContentLoaded', function() {
    const floatingButton = document.getElementById('floatingButton');
    const optionList = document.getElementById('optionList');
    let isListVisible = false;

    floatingButton.addEventListener('click', function() {
        if (isListVisible) {
            optionList.style.display = 'none';
            isListVisible = false;
        } else {
            optionList.style.display = 'block';
            isListVisible = true;
        }
    });

    // Cerrar la lista si se hace clic fuera de ella
    document.addEventListener('click', function(event) {
        if (!floatingButton.contains(event.target) && !optionList.contains(event.target)) {
            optionList.style.display = 'none';
            isListVisible = false;
        }
    });
});

