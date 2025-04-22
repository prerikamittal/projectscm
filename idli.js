// Function to show the full recipe when the button is clicked
function showFullRecipe(recipeType) {
    const recipeContainer = document.getElementById(`${recipeType}-recipe-steps`);

    // Show the full recipe container
    recipeContainer.style.display = "block";

    // Disable the button after the recipe is revealed
    const button = document.querySelector(`#${recipeType}-recipe button`);
    button.disabled = true;
    button.textContent = "Recipe Revealed!";
}