import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./components/Add/Add";
import Filter from "./components/Filter/Filter";
import Moviedetails from "./components/Moviedetails/Moviedetails";
import Movielist from "./components/Movielist/Movielist";
import Navbar1 from "./components/Navbar/Navbar";
import { dataMovies } from "./data";

function App() {
  const [input, setInput] = useState("");
  const [newList, setnewList] = useState(dataMovies);
  const [rate, setRate] = useState(0);

  const addNewMovie = (newMovie) => {
    setnewList([...newList, { ...newMovie, id: newList.length + 1 }]);
  };
  const deleteMovie = (iddelete) => {
    setnewList(newList.filter((el) => el.id !== iddelete));
  };
  return (
    <div className="App">
      <Navbar1 />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter setInput={setInput} setRate={setRate} />
              <Movielist
                data={newList.filter(
                  (el) =>
                    el.title
                      .toLowerCase()
                      .includes(input.toLocaleLowerCase().trim()) &&
                    el.rating >= rate
                )}
                deleteMovie={deleteMovie}
              />
            </>
          }
        />

        <Route path="/add" element={<Add addNewMovie={addNewMovie} />} />
        <Route
          path="/moviedetails/:x"
          element={<Moviedetails data={newList} />}
        />
      </Routes>
    </div>
  );
}

export default App;