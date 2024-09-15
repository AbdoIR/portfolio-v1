import Content from "components/content/Content";
import NavBar from "components/navbar/NavBar";
import SideNav from "components/navbar/SideNav";
import SocialList from "components/utils/SocialList";
import { useState } from "react";

function App() {
  const [showSidenav, setShowSidenav] = useState(false);

  return (
    <div className="App">
      <div className={`main-content ${showSidenav ? "blurred" : ""}`}>
        <NavBar setShowSidenav={setShowSidenav} />
        <Content />
        <SocialList />
      </div>
      <SideNav visible={showSidenav} setShowSidenav={setShowSidenav} />
    </div>
  );
}

export default App;
