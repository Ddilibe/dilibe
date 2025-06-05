import './style.css'

class RubiksCube {
  constructor() {
    this.container = document.getElementById('cube-container');
    if (!this.container) {
      console.error('Cube container not found!');
      return;
    }
    this.faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
    this.colors = ['red', 'orange', 'blue', 'green', 'yellow', 'white'];
    
    // Initialize rotation values
    this.rotationX = -20;
    this.rotationY = -20;
    this.isMouseDown = false;
    this.mouseX = 0;
    this.mouseY = 0;

    // Store the current state of each face
    this.cubeState = this.faces.map((_, index) => Array(9).fill(this.colors[index]));

    this.init();
    this.initializeControls();
  }

  init() {
    console.log('Initializing cube...'); // Debug log
    // Create cube faces
    this.faces.forEach((face, index) => {
      const faceElement = document.createElement('div');
      faceElement.className = `cube-face cube-face--${face}`;
      
      // Set face transform
      const transforms = {
        front: 'rotateY(0deg) translateZ(100px)',
        back: 'rotateY(180deg) translateZ(100px)',
        right: 'rotateY(90deg) translateZ(100px)',
        left: 'rotateY(-90deg) translateZ(100px)',
        top: 'rotateX(90deg) translateZ(100px)',
        bottom: 'rotateX(-90deg) translateZ(100px)'
      };
      
      faceElement.style.transform = transforms[face];

      // Create 9 cells for each face
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = `cube-cell color-${this.colors[index]}`;
        cell.dataset.faceIndex = index;
        cell.dataset.cellIndex = i;
        faceElement.appendChild(cell);
      }

      this.container.appendChild(faceElement);
    });

    console.log('Cube faces created'); // Debug log
    this.startSpinning();
    this.startScrambleLoop();

    // Set initial rotation
    this.updateRotation();
  }

  initializeControls() {
    // Mouse controls
    this.container.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.isMouseDown) return;
      
      const deltaX = e.clientX - this.mouseX;
      const deltaY = e.clientY - this.mouseY;
      
      this.rotationY += deltaX * 0.5;
      this.rotationX -= deltaY * 0.5;
      
      this.updateRotation();
      
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    document.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    // Touch controls
    this.container.addEventListener('touchstart', (e) => {
      this.isMouseDown = true;
      this.mouseX = e.touches[0].clientX;
      this.mouseY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', (e) => {
      if (!this.isMouseDown) return;
      
      const deltaX = e.touches[0].clientX - this.mouseX;
      const deltaY = e.touches[0].clientY - this.mouseY;
      
      this.rotationY += deltaX * 0.5;
      this.rotationX -= deltaY * 0.5;
      
      this.updateRotation();
      
      this.mouseX = e.touches[0].clientX;
      this.mouseY = e.touches[0].clientY;

      // Prevent page scrolling while rotating cube
      e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchend', () => {
      this.isMouseDown = false;
    });
  }

  updateRotation() {
    this.container.style.transform = `rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg)`;
  }

  startSpinning() {
    console.log('Starting spin animation...'); // Debug log
    this.container.classList.add('spin');
  }

  stopSpinning() {
    this.container.classList.remove('spin');
  }

  scrambleFace(faceIndex) {
    const cells = document.querySelectorAll(`.cube-cell[data-face-index="${faceIndex}"]`);
    cells.forEach(cell => {
      cell.classList.add('scramble');
      setTimeout(() => cell.classList.remove('scramble'), 500);
    });
  }

  startScrambleLoop() {
    let currentFace = 0;
    setInterval(() => {
      this.scrambleFace(currentFace);
      currentFace = (currentFace + 1) % 6;
    }, 2000);
  }
}

// Initialize smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Create cube when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, creating cube...'); // Debug log
  new RubiksCube();

  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalTech = document.getElementById('modal-tech');
  const modalLink = document.getElementById('modal-link');
  const closeButton = document.querySelector('.close-button');
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.project-title').innerText;
      const description = card.getAttribute('data-full-description');
      const tech = card.querySelector('.project-tech').innerText;
      const link = card.getAttribute('data-link') || '#';
      
      modalTitle.innerText = title;
      modalDescription.innerText = description;
      modalTech.innerText = tech;
      modalLink.href = link;
      modalLink.innerText = link !== '#' ? 'View Project' : '';
      
      modal.style.display = 'flex';
    });
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal if clicked outside the content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
