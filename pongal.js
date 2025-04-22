// Function to show the full recipe when the button is clicked
function showRecipe(recipeId, buttonElement) {
    const recipeSection = document.getElementById(recipeId);
    recipeSection.style.display = "block";
    buttonElement.disabled = true;
    buttonElement.textContent = "Recipe Revealed!";
}
