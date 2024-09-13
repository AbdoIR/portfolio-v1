import { useState } from "react";
import Content from "components/content/Content";
import NavBar from "components/navbar/NavBar";
import SocialList from "components/utils/SocialList";
import SideNav from "components/navbar/SideNav";
import Burger from "components/utils/Burger";

function App() {
  const [showSidenav, setShowSidenav] = useState(false);

  const handleBurger = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setShowSidenav(e.currentTarget.checked);
  };

  return (
    <div className="App">
      <div className={`main-content ${showSidenav ? "blurred" : ""}`}>
        <NavBar />
        <Content />
        <SocialList />
      </div>
      <SideNav visible={showSidenav} />
      <Burger handleClick={handleBurger} />
    </div>
  );
}

export default App;
