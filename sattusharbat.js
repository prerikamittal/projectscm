
function showSaagRecipe() {
    const recipeContainer = document.getElementById("saag-recipe-steps");

    // Show the full recipe container
    recipeContainer.style.display = "block";

    // Disable the button after the recipe is revealed
    const button = document.getElementById("saag-button");
    button.disabled = true;
    button.textContent = "Recipe Revealed!";
}
