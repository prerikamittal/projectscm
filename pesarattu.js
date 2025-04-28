// Function to show the full recipe when the button is clicked
function showFullRecipe() {
    const recipeContainer = document.getElementById("pesarattu-recipe-steps");

    recipeContainer.style.display = "block";

    const button = document.querySelector("button");
    button.disabled = true;
    button.textContent = "Recipe Revealed!";
}
