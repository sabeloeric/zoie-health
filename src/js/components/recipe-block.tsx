import '../../scss/components/recipe-block.scss';

const RecipeBlock = ({recipe} : any) => {
    return (
        <div className={'recipe'}>
            <div className={'recipe__figure'}>
                <img src={recipe.image} className={'recipe__image'} alt={recipe.title} />
            </div>
            <div className={'recipe__title'}>{recipe.title}</div>
            <div className={'recipe__icons'}>
                <i className="fa fa-clock-o recipe__icon" aria-hidden="true">
                    {' ' + recipe.readyInMinutes + ' Minutes'}
                </i>
                <i className="fa fa-users" aria-hidden="true">
                    {' ' + recipe.servings + ' Serving'}
                </i>
            </div>
        </div>
    )
}

export default  RecipeBlock;