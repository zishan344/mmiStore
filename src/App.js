import "./App.css";
import AllBooks from "./component/AllBooks/AllBooks";
import Header from "./component/Header/Header";
import Qna from "./component/QNA/Qna";

function App() {
  return (
    <div>
      <Header></Header>
      <AllBooks></AllBooks>
      <Qna></Qna>
    </div>
  );
}

export default App;
