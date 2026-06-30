// ==========================================
// Joseph & Molly Save the Date
// script.js
// ==========================================

const card = document.getElementById("card");
const flipHint = document.getElementById("flipHint");

let hasFlipped = false;

// Flip the card when clicked
card.addEventListener("click", () => {
    card.classList.toggle("flipped");

    // Fade out the hint after the first flip
    if (!hasFlipped) {
        flipHint.style.opacity = "0";

        setTimeout(() => {
            flipHint.style.display = "none";
        }, 500);

        hasFlipped = true;
    }
});

// Make the card keyboard accessible
card.setAttribute("tabindex", "0");

card.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        card.classList.toggle("flipped");

        if (!hasFlipped) {

            flipHint.style.opacity = "0";

            setTimeout(() => {
                flipHint.style.display = "none";
            }, 500);

            hasFlipped = true;
        }
    }
});
