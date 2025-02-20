// projects functions

const ggButton = document.getElementById('gg-btn');
const behButton = document.getElementById('beh-btn');
const naButton = document.getElementById('na-btn');
const mossButton = document.getElementById('moss-btn');
const pitchButton = document.getElementById('pitch-btn');

const ggSection = document.getElementById('gg-section');
const mossSection = document.getElementById('moss-section');
const behSection = document.getElementById('beh-section');
const naSection = document.getElementById('na-section');
const pitchSection = document.getElementById('pitch-section');

naButton.addEventListener('click', function() {
  naSection.style.display = 'block';
  ggSection.style.display = 'none';
  behSection.style.display = 'none';
  mossSection.style.display = 'none';
  pitchSection.style.display = 'none';
});

ggButton.addEventListener('click', function() {
  naSection.style.display = 'none';
  ggSection.style.display = 'block';
  behSection.style.display = 'none';
  mossSection.style.display = 'none';
  pitchSection.style.display = 'none';
});

behButton.addEventListener('click', function() {
  naSection.style.display = 'none';
  ggSection.style.display = 'none';
  behSection.style.display = 'block';
  mossSection.style.display = 'none';
  pitchSection.style.display = 'none';
});

mossButton.addEventListener('click', function() {
  naSection.style.display = 'none';
  ggSection.style.display = 'none';
  behSection.style.display = 'none';
  mossSection.style.display = 'block';
  pitchSection.style.display = 'none';
});

pitchButton.addEventListener('click', function() {
  naSection.style.display = 'none';
  ggSection.style.display = 'none';
  behSection.style.display = 'none';
  mossSection.style.display = 'none';
  pitchSection.style.display = 'block';
});

// button colors

let activeButton = document.querySelector(".active");

function toggleButtonColor(button) {
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  button.classList.add("active");
  activeButton = button;
}
  window.addEventListener("load", function() {
    toggleButtonColor(activeButton);
});

// Link Changer

function setSiteLink(url) {
  var siteLink = document.getElementById("site-btn");
  siteLink.href = url;
}

const siteLink = document.getElementById("site-btn");

// Check if there is a saved link in the local storage
if (localStorage.getItem("defaultLink")) {
  siteLink.href = localStorage.getItem("defaultLink");
} else {
  siteLink.href = "https://www.nerdadvisor.org"; // Default link
}

// HEADER FADE

const aboutSection = document.querySelector('.about-section');
const aboutHeader = document.querySelector('.about-header');

aboutSection.addEventListener('scroll', function() {
  const scrollPosition = aboutSection.scrollTop;
  const headerHeight = aboutHeader.offsetHeight;

  // Calculate the opacity based on the scroll position
  const opacity = 1 - (scrollPosition / headerHeight);

  // Set the opacity of the header
  aboutHeader.style.opacity = opacity;
});

const projectsSection = document.querySelector('.projects-section');
const projectsHeader = document.querySelector('.projects-header');

projectsSection.addEventListener('scroll', function() {
  const scrollPosition = projectsSection.scrollTop;
  const headerHeight = projectsHeader.offsetHeight;

  // Calculate the opacity based on the scroll position
  const opacity = 1 - (scrollPosition / headerHeight);

  // Set the opacity of the header
  projectsHeader.style.opacity = opacity;
});

const previewSection = document.querySelector('.preview-section');
const previewHeader = document.querySelector('.preview-header');

previewSection.addEventListener('scroll', function() {
  const scrollPosition = previewSection.scrollTop;
  const headerHeight = previewHeader.offsetHeight;

  // Calculate the opacity based on the scroll position
  const opacity = 1 - (scrollPosition / headerHeight);

  // Set the opacity of the header
  previewHeader.style.opacity = opacity;
});


// Static effect
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("static-noise");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function generateNoise() {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer32 = new Uint32Array(imageData.data.buffer);
      for (let i = 0; i < buffer32.length; i++) {
          buffer32[i] = Math.random() < 0.5 ? 0x00000000 : 0xffffffff; // Random black or white pixel
      }
      ctx.putImageData(imageData, 0, 0);
  }

  function animateNoise() {
      generateNoise();
      requestAnimationFrame(animateNoise);
  }

  animateNoise();

  // Update canvas size on resize
  window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  });
});




// MOBILE

function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section.style.display === "none") {
    section.style.display = "block";
    section.style.height = section.scrollHeight + "px";
  } else {
    section.style.height = "0";
    section.addEventListener("transitionend", function() {
      section.style.display = "none";
    }, {once: true});
  }
}
