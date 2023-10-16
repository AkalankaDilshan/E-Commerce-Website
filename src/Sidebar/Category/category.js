import "./category.css";

function Category() {
  return (
    <div className="main-container">
       <div className="flex-container"> 
        <h2 >Category</h2>

       <div class="radio-label"> 
          <label className="sidebar-label-contatainer">
          <input type="radio" name='test' />
          <span className="checkmark"></span>All
        </label></div>

        <div class="radio-label" >
          <label className="sidebar-label-contatainer">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Sneakers
        </label></div>

        <div class="radio-label">
          <label className="sidebar-label-contatainer">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Flats
        </label></div>

        <div class="radio-label">
        <label className="sidebar-label-contatainer">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Sandals
        </label></div>

        <div class="radio-label">
        <label className="sidebar-label-contatainer">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Heels
        </label></div>
      </div> 
    </div>  
  )
}

export default Category;