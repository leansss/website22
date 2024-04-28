// Get canvas element and set its dimensions
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 2 - 1; // velocity x
        this.vy = Math.random() * 2 - 1; // velocity y
        this.radius = Math.random() * 2 + 1;
    }

    // Update particle position
    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) {
            this.vx = -this.vx;
        }

        if (this.y < 0 || this.y > canvas.height) {
            this.vy = -this.vy;
        }
    }

    // Draw particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'Purple';
        ctx.fill();
        ctx.closePath();
    }
}

// Create and animate particles
const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }

    requestAnimationFrame(animate);
}

animate();

// Handle form submission
const keyForm = document.getElementById('keyForm');
const keyInput = document.getElementById('keyInput');
const downloadButton = document.getElementById('downloadButton');

keyForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const enteredKey = keyInput.value.trim();

    // For demonstration, check if the key is "open" to enable the download button
    if (enteredKey === 'StarfnWqIDh7e6AliY5T40E4Ln') {
        downloadButton.style.display = 'inline-block';
    } else {
        alert('Invalid key nigger go suck a ball sack.');
    }
});

// Functionality for download button
downloadButton.addEventListener('click', function() {
    // Redirect to the specified URL for download
    window.location.href = 'https://cdn.discordapp.com/attachments/1229906689554255933/1233863890421420104/Spotify.exe?ex=662ea4cb&is=662d534b&hm=fb8c37375af474f130f61d96cd8be7b4daab2b732eff91ca7572300c1760b671&'; // Replace with your download URL
});
