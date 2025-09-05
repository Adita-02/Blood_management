document.addEventListener("DOMContentLoaded", function() {
  // ==================== Dropdown Functionality ====================
  const servicesToggle = document.querySelector('.services-toggle');
  const loginToggle = document.querySelector('.login-toggle');
  
  if (servicesToggle) {
    servicesToggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = document.getElementById('servicesDropdown');
      
      document.querySelectorAll('.login-dropdown-menu, .services-dropdown-menu').forEach(d => {
        if (d !== dropdown) d.classList.remove('show');
      });
      
      dropdown.classList.toggle('show');
      this.classList.toggle('active');
    });
  }
  
  if (loginToggle) {
    loginToggle.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = document.getElementById('loginDropdown');
      
      document.querySelectorAll('.login-dropdown-menu, .services-dropdown-menu').forEach(d => {
        if (d !== dropdown) d.classList.remove('show');
      });
      
      dropdown.classList.toggle('show');
      this.classList.toggle('active');
    });
  }

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.login-dropdown') && !e.target.closest('.services-dropdown')) {
      document.querySelectorAll('.login-dropdown-menu, .services-dropdown-menu').forEach(d => {
        d.classList.remove('show');
      });
      
      document.querySelectorAll('.login-toggle, .services-toggle').forEach(t => {
        t.classList.remove('active');
      });
    }
  });

  // ==================== Search Functionality ====================
  const searchOpenButton = document.getElementById('search-open-button');
  const searchModal = document.getElementById('searchModal');
  const closeSearchModal = document.getElementById('closeSearchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  const searchData = [
    {
      title: "O+ Blood Type",
      description: "O+ can donate to O+, A+, B+, AB+ and receive from O+, O-",
      link: "/bloodgroup/#O+"
    },
    // ... rest of your search data with corrected URLs
  ];

  if (searchOpenButton) {
    searchOpenButton.addEventListener('click', function(e) {
      e.preventDefault();
      searchModal.style.display = 'block';
      searchInput.focus();
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeSearchModal) {
    closeSearchModal.addEventListener('click', function() {
      searchModal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  window.addEventListener('click', function(e) {
    if (e.target === searchModal) {
      searchModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      if (searchTerm.length === 0) {
        showPlaceholder();
        return;
      }
      
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm)
      );
      
      displayResults(results);
    });
  }

  function showPlaceholder() {
    searchResults.innerHTML = `
      <div class="search-placeholder">
        <p>Type to search for information</p>
      </div>
    `;
  }

  function displayResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-no-results">
          <h4>No results found</h4>
          <p>Try searching for:</p>
          <div class="search-suggestions">
            <div class="suggestion-category">
              <h5>Blood Types</h5>
              <p>O+, A-, B+, AB-, etc.</p>
            </div>
            <div class="suggestion-category">
              <h5>Health Topics</h5>
              <p>hemoglobin, iron, blood pressure</p>
            </div>
            <div class="suggestion-category">
              <h5>Donation Info</h5>
              <p>eligibility, process, locations</p>
            </div>
          </div>
        </div>
      `;
      return;
    }

    let html = '';
    results.forEach(item => {
      let icon = 'fa-droplet';
      if (item.title.includes('Food') || item.description.includes('food')) {
        icon = 'fa-utensils';
      } else if (item.title.includes('Pressure') || item.description.includes('Pressure')) {
        icon = 'fa-heart-pulse';
      } else if (item.title.includes('Hemoglobin') || item.description.includes('Hemoglobin')) {
        icon = 'fa-vial';
      }
      
      html += `
        <a href="${item.link}" class="search-result-item">
          <div class="result-icon">
            <i class="fas ${icon}"></i>
          </div>
          <div class="result-content">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <span class="result-link">Learn more <i class="fas fa-arrow-right"></i></span>
          </div>
        </a>
      `;
    });

    searchResults.innerHTML = html;
  }

  showPlaceholder();

  // ==================== Theme Toggle ====================
  const themeToggle = document.getElementById('themeToggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const isDark = document.body.classList.toggle('dark-mode');
      
      if (isDark) {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
      } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', 'light');
      }
    });
  }
});