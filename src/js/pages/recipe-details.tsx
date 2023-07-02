import { useState, useEffect } from "react";
import "../../scss/pages/recipe-details.scss";
import { useParams } from "react-router-dom";
import { recipes } from "../constants/recipes";

interface Recipe {
    id: number;
    title: string;
    image: string;
    summary: string;
    instructions: string;
    extendedIngredients: { id: number; original: string }[];
}

const RecipeDetails = (props: any) => {
    const recipeFromProp = props.recipe;
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(recipeFromProp);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        let foundRecipe;

        if (typeof id === "string") {
            foundRecipe = recipes.find(
                (recipe) => recipe.id === parseInt(id)
            );
        }

        if (foundRecipe) {
            setRecipe(foundRecipe);
        }
    }, [id]);

    useEffect(() => {
        const likedRecipesStr = localStorage.getItem("likedRecipes");
        const likedRecipes: Recipe[] = likedRecipesStr
            ? JSON.parse(likedRecipesStr)
            : [];
        let foundLiked = false;
        if (typeof id === "string") {
            foundLiked = likedRecipes.some(
                (likedRecipe) => likedRecipe.id === parseInt(id)
            );
        }
        setLiked(foundLiked);
    }, [id]);


    const handleLikeClick = () => {
        if (recipe) {
            // Retrieve the existing liked recipes from local storage
            const likedRecipesStr = localStorage.getItem("likedRecipes");
            let likedRecipes = likedRecipesStr
                ? JSON.parse(likedRecipesStr)
                : [];

            // Check if the recipe is already liked
            const isLiked = likedRecipes.some(
                (likedRecipe: Recipe) => likedRecipe.id === recipe.id
            );
            if (!isLiked) {
                // Add the recipe to the liked recipes array
                likedRecipes.push(recipe);
                // Save the updated liked recipes array to local storage
                localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
                setLiked(true);
            } else {
                // Remove the recipe from the liked recipes array
                likedRecipes = likedRecipes.filter(
                    (likedRecipe: Recipe) => likedRecipe.id !== recipe.id
                );
                // Save the updated liked recipes array to local storage
                localStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
                setLiked(false);
            }
        }
    };

    if (!recipe) return <div>Recipe not found</div>;

    return (
        <div className={"recipe-detail"}>
            <div className={"recipe-detail__title"}>{recipe.title}</div>
            <div className={"recipe-detail__figure"}>
                <img
                    src={recipe.image}
                    className={"recipe-detail__image"}
                    alt={recipe.title}
                />
            </div>
            <div className={"recipe-detail__content"}>
                <div className={`nav-item active`} onClick={handleLikeClick}>
                    <i className="material-icons favorite-icon">favorite</i>
                    <span className="nav-text">{liked ? "Unlike" : "Like"}</span>
                </div>

                <div className={"recipe-detail__content-title"}>Summary:</div>
                <div
                    className={"recipe-detail__content-text"}
                    dangerouslySetInnerHTML={{ __html: recipe.summary }}
                ></div>
                <div className={"recipe-detail__content-title"}>Instructions:</div>
                <div
                    className={"recipe-detail__content-text"}
                    dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                ></div>
                <div className={"recipe-detail__content-title"}>Ingredients:</div>
                <div className={"recipe-detail__content-text"}>
                    <div className={"ingredients"}>
                        {recipe.extendedIngredients.map((ingredient) => {
                            return (
                                <div key={ingredient.id} className={"ingredient"}>
                                    <input className={"ingredient__checkbox"} type={"checkbox"} />
                                    <span className={"ingredient__name"}>{ingredient.original}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
