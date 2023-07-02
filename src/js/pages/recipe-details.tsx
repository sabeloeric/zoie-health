import "../../scss/pages/recipe-details.scss";
import { useParams } from "react-router-dom";
import { recipes} from "../constants/recipes.tsx";

const RecipeDetails = () => {
    const { id } = useParams();
    let recipe = null;
    if (typeof id === "string") {
        recipe = recipes.find((recipe) => recipe.id === parseInt(id));
    }

    if(!recipe) return <div>Recipe not found</div>;

    return (
        <div className={'recipe-detail'}>
            <div className={'recipe-detail__title'}>
                {recipe.title}
            </div>
            <div className={'recipe-detail__figure'}>
                <img src={recipe.image} className={'recipe-detail__image'} alt={recipe.title} />
            </div>
            <div className={'recipe-detail__content'}>
                <div className={`nav-item active`}>
                    <i className="material-icons favorite-icon">favorite</i>
                    <span className="nav-text">Like</span>
                </div>

                <div className={'recipe-detail__content-title'}>
                    Summary:
                </div>
                <div className={'recipe-detail__content-text'} dangerouslySetInnerHTML={{__html: recipe.summary}}>
                </div>
                <div className={'recipe-detail__content-title'}>
                    Instructions:
                </div>
                <div className={'recipe-detail__content-text'} dangerouslySetInnerHTML={{__html: recipe.instructions}}>
                </div>
                <div className={'recipe-detail__content-title'}>
                    Ingredients:
                </div>
                <div className={'recipe-detail__content-text'}>
                    <div className={'ingredients'}>
                        {recipe.extendedIngredients.map((ingredient: any) => {
                            return (
                                <div key={ingredient.id} className={'ingredient'}>
                                    <input className={'ingredient__checkbox'} type={'checkbox'}/>
                                    <span className={'ingredient__name'}>{ingredient.original}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails;
