// Test button on home page
const testBtn = document.getElementById("testBtn");
const output = document.getElementById("output");

if (testBtn) {
  testBtn.addEventListener("click", () => {
    output.textContent = "Button Clicked! JS is working!";
  });
}

// Placeholder API call for dining page
const menuBtn = document.getElementById("menuBtn");
const menuOutput = document.getElementById("menuOutput");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    // API placeholder (not functional yet)
    menuOutput.textContent = "API will load menu here soon!";
  });
}

// Example API setup (not working yet but required for MVP)
async function getMenuData() {
  try {
    // TODO: Replace API_URL_HERE with real API link
    const response = await fetch("API_URL_HERE");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("API not connected yet:", error);
  }
}
