import check from "./check.png"

function MyRecipyComponent({id, label, image, calories, ingredients, cuisineType}) {
    return (
        <div className="list" key={id}>
            <div className="content">
                <h2>{label}</h2>
                <p>{cuisineType.toUpperCase()} cuisine</p>
            </div>
                <div>
                    <img src = {image} alt = "food"/>
                </div>
                <div>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>
                                <img src= {check} className="check" alt = "checkmark"/>
                                {ingredient}
                            </li>)
                        )}
                        
                    </ul>
                </div>
                <div>
                    <p>{calories.toFixed()} calories</p>
                    
                </div>
        </div>
    )
}
export default MyRecipyComponent