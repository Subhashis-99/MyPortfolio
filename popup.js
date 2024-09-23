function toggleModal() {
    const modal = document.getElementById("aboutMeModal");
    const contentWrapper = document.getElementById("contentWrapper");
    
    modal.classList.toggle("show");
    
    if (modal.classList.contains("show")) {
      contentWrapper.classList.add("blurred"); // Blur only the background content
    } else {
      contentWrapper.classList.remove("blurred"); // Remove the blur when closing modal
    }
}
  

// dark and light mode
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Add event listeners to both sun and moon icons
sunIcon.addEventListener('click', toggleTheme);
moonIcon.addEventListener('click', toggleTheme);

function toggleTheme() {
  // Toggle the dark mode class on the document
  document.documentElement.classList.toggle('dark');
  
  // Toggle the visibility of sun and moon icons
  sunIcon.classList.toggle('hidden');
  moonIcon.classList.toggle('hidden');
}





