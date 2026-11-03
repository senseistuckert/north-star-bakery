// 1. Interactive Button (Changes text when clicked)
const specialBtn = document.getElementById("specialBtn");
if (specialBtn) {
    specialBtn.addEventListener("click", function() {
        document.getElementById("specialMessage").textContent = "Today's Special: Fresh Sourdough & Butter Croissants!";
    });
}

// 2. Form Validation (Stops blank form submissions)
const form = document.getElementById("orderForm");
if (form) {
    form.addEventListener("submit", function(event) {
        const nameInput = document.getElementById("nameInput");
        if (nameInput.value.trim() === "") {
            event.preventDefault();
            alert("Please enter your name before submitting!");
        }
    });
}

// 3. Browser Storage (Saves user data)
localStorage.setItem("favoriteTreat", "Chocolate Croissant");
