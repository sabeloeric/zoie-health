import { recipes } from "../constants/recipes.tsx";
import RecipeBlock from "../components/recipe-block.tsx";
import "../../scss/pages/recipes.scss";

const Recipes = () => {
    return (
        <div className={'recipes'}>
            <div className={'recipes__title'}>
                Welcome, chef!
            </div>
            <div className={'recipes__subtitle'}>
                Hope you are having a good day, Pick your delicious dish below:
            </div>
            <div className={'recipes__container'}>
                {recipes.map((recipe, index) => {
                    return <RecipeBlock recipe={recipe} key={index} />;
                })}

            </div>
        </div>
    );
};

export default Recipes;
