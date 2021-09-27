import FirstParagraph from "./Components/FirstParagraph";
import SecondParagraph from "./Components/SecondParagraph";

import {Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/HomePage";

function App(){

return(
  <div>
    
      return(<>
        <Route path="/" exact component={HomePage}/>
        <Route path="/contact" exact component={ContactPage}/>
      </>
      )
    
    
    
    
  </div>

);

}
export default App;