// Function to handle sidebar collapse and expand by clicking the hamburger menu icon

function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('collapsed');
  document.querySelector('body').classList.toggle('collapsed')
}

document.querySelector('.hamburger-menu').addEventListener('click', toggleSidebar);