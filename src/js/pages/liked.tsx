import "../../scss/pages/liked.scss";
import RecipeBlock from "../components/recipe-block.tsx";

interface Recipe {
    id: number;
    title: string;
    image: string;
    summary: string;
    instructions: string;
    extendedIngredients: { id: number; original: string }[];
}

const Liked = () => {

    // fetch recipes from storage
    const likedRecipesStr = localStorage.getItem("likedRecipes");
    const likedRecipes: Recipe[] = likedRecipesStr
        ? JSON.parse(likedRecipesStr)
        : [];

    return (
        <div className={'liked'}>
            <div className={'recipes'}>
                <div className={'recipes__title'}>
                    Your favorite recipes
                </div>
                <div className={'recipes__subtitle'}>
                    Pick your delicious dish below:
                </div>
                <div className={'recipes__container'}>
                    {likedRecipes.map((recipe, index) => {
                        return <RecipeBlock recipe={recipe} key={index} />;
                    })}

                </div>
            </div>
        </div>
    );
};

export default Liked;