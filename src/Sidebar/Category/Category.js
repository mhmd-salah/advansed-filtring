import "./Category.css"
function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div className="category">
        <label className="sidebar-label-container">
          <input type="radio" name="test"/>
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test"/>
          <span className="checkmark"></span>Sneakers
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test"/>
          <span className="checkmark"></span>Flats
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test"/>
          <span className="checkmark"></span>Sanakals
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test"/>
          <span className="checkmark"></span>Heals
        </label>
      </div>
    </div>
  )
}

export default Category
