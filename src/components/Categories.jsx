import { Link } from "react-router-dom";
import { categories } from "../assets/categoriesData";

export function Categories() {

  return (
    <div className="w-full flex justify-center">
      <div className="flex w-7xl flex-wrap gap-1 justify-center my-4">
        {categories.map((categorie) => {
          return (
            <div key={categorie.id} className="w-30 cursor-pointer">
              <Link to={`/categories/${categorie.name}`}>
                <img src={categorie.image}></img>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}