document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.getElementById("typewriter");
    const words = [
        "Journalist.",
        "Storyteller.",
        "PR Professional.",
        "Nebraskan."
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        let typeSpeed = 150; // Speed of typing

        if (isDeleting) {
            // Speed up when deleting
            typeSpeed /= 2;
            // Remove a character
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Add a character
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Check if word is fully typed
        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at end of word
            typeSpeed = 2000;
            isDeleting = true;
        } 
        // Check if word is fully deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to the next word
            wordIndex = (wordIndex + 1) % words.length;
            // Short pause before typing new word
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Start the effect
    type();
});