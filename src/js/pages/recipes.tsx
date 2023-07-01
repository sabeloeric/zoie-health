import { recipes } from "../constants/recipes.tsx";
import RecipeBlock from "../components/recipe-block.tsx";
import "../../scss/pages/recipes.scss";

const Recipes = () => {
    return (
        <div className={'recipes'}>
            {recipes.map((recipe, index) => {
                return <RecipeBlock recipe={recipe} key={index} />;
            })}
        </div>
    );
};

export default Recipes;
