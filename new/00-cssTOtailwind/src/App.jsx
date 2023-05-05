import React, { useState } from "react";
import Card from "./components/Card.jsx";
import Flex from "./components/Flex.jsx";

const App = () => {
  const [pickPage, setPickPage] = useState("main");
  const changeFlexPage = () => {
    setPickPage("flex");
  };
  const changeGridPage = () => {
    setPickPage("grid");
  };
  const changeAllPage = () => {
    setPickPage("all");
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-cyan-200 to-slate-700 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-slate-100 capitalize">{pickPage}</h1>
      {pickPage === "main" && (
        <div className="w-[600px] h-[70vh] grid grid-cols-2 gap-2 cursor-pointer">
          <Card onClick={changeFlexPage}>Flex-Project</Card>
          <Card onClick={changeGridPage}>Grid-Project</Card>
          <Card plus="col-start-1 col-end-3" onClick={changeAllPage}>
            All-Project
          </Card>
        </div>
      )}
      {pickPage === "flex" && <Flex />}
    </div>
  );
};

export default App;
