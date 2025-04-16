// Get the modal
const modal = document.getElementById("addModal");

// Get the button that opens the modal
const btn = document.getElementById("addButton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById("addDeviceForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const deviceName = document.getElementById("deviceName").value;
  const deviceType = document.getElementById("deviceType").value;
  
  // Here you would typically send this data to a server
  // For this example, we'll just log it to the console
  console.log("New device added:", { name: deviceName, type: deviceType });
  
  // Close the modal
  modal.style.display = "none";
  
  // Reset the form
  this.reset();
  
  // Optionally, you could add the new device to the grid here
  addDeviceToGrid(deviceName, deviceType);
});

function addDeviceToGrid(name, type) {
  const grid = document.querySelector('.grid');
  
  const newDevice = document.createElement('a');
  newDevice.href = `${type}.html`;
  newDevice.className = 'button';
  
  newDevice.innerHTML = `
    <div class="icon-wrapper">
      <img class="icon" src="https://c.animaapp.com/m9fr3vp8npkmCa/img/${getIconForType(type)}" alt="${name} icon" />
    </div>
    <span class="button-text">${name.toUpperCase()}</span>
  `;
  
  grid.appendChild(newDevice);
}

function getIconForType(type) {
  // This is a simple mapping, you might want to expand this or use a more sophisticated method
  const iconMap = {
    tv: "iconoir-tv.svg",
    ac: "tabler-air-conditioning.svg",
    washer: "lucide-washing-machine.svg",
    fridge: "hugeicons-refrigerator.svg",
    light: "akar-icons-light-bulb.svg",
    vacuum: "solar-smart-vacuum-cleaner-linear.svg",
    stove: "hugeicons-gas-stove.svg",
    coffee: "material-symbols-light-coffee-maker-outline-sharp.svg",
    microwave: "streamline-microwave.svg"
  };
  
  return iconMap[type] || "default-icon.svg";
}
