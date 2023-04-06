// technique for this demo found here
// http://stackoverflow.com/questions/22003491/animating-canvas-to-look-like-tv-noise

const canvas = document.querySelector('canvas'),
         ctx = canvas.getContext('2d')

canvas.width = canvas.height = 128

resize();
window.onresize = resize;

function resize() {
	canvas.width = window.innerWidth * window.devicePixelRatio
	canvas.height = window.innerHeight * window.devicePixelRatio
	canvas.style.width = window.innerWidth + 'px'
	canvas.style.height = window.innerHeight + 'px'
}

function noise(ctx) {

	const w = ctx.canvas.width,
				h = ctx.canvas.height,
				iData = ctx.createImageData(w, h),
				buffer32 = new Uint32Array(iData.data.buffer),
				len = buffer32.length
	  let i = 0

	for(; i < len;i++)

		if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

		ctx.putImageData(iData, 0, 0);
}

(function loop() {
    noise(ctx);
    requestAnimationFrame(loop);
})();

// Page reload

const behButton = document.getElementById('beh-btn');
const naButton = document.getElementById('na-btn');
const mossButton = document.getElementById('moss-btn');
const pitchButton = document.getElementById('pitch-btn');

const mossSection = document.getElementById('moss-section')
const behSection = document.getElementById('beh-section');
const naSection = document.getElementById('na-section');
const pitchSection = document.getElementById('pitch-section')

behButton.addEventListener('click', function() {
  behSection.style.display = 'block';
  naSection.style.display = 'none';
  mossSection.style.display = 'none';
  pitchSection.style.display = 'none'
});

naButton.addEventListener('click', function() {
  behSection.style.display = 'none';
  naSection.style.display = 'block';
  mossSection.style.display = 'none';
  pitchSection.style.display = 'none'
});

mossButton.addEventListener('click', function() {
  behSection.style.display = 'none';
  naSection.style.display = 'none';
  mossSection.style.display = 'block';
  pitchSection.style.display = 'none'
});

pitchButton.addEventListener('click', function() {
  behSection.style.display = 'none';
  naSection.style.display = 'none';
  mossSection.style.display = 'none';
  pitchSection.style.display = 'block'
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
  siteLink.href = "https://beatemhub.com"; // Default link
}
