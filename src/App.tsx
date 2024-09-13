import { useState } from "react";
import Content from "components/content/Content";
import NavBar from "components/navbar/NavBar";
import SocialList from "components/utils/SocialList";
import SideNav from "components/navbar/SideNav";

function App() {
  const [showSidenav, setShowSidenav] = useState(false);

  return (
    <div className="App">
      <div className={`main-content ${showSidenav ? "blurred" : ""}`}>
        <NavBar setShowSidenav={setShowSidenav} />
        <Content />
        <SocialList />
      </div>
      <SideNav visible={showSidenav} />
    </div>
  );
}

export default App;
