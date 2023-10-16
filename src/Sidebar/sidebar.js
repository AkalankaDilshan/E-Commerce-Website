import Category from './Category/category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import "./sidebar.css";
function Sidebar() {
  return (
    <section className="side-bar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>

        <Category/>
        <Price/>
        <Colors/>

    </section>
  )
}

export default Sidebar;