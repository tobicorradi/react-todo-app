import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div className="app">
      <h1>
        React to do app <span>by Tobías Corradi</span>
      </h1>
      <Form
        tasks={tasks}
        setTasks={setTasks}
        inputTask={inputTask}
        setInputTask={setInputTask}
      />
      {!tasks.length ? (
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANpSURBVHgB7dpdUtpQGIfxk0yv9IYl0CvkSllBdQd2BeIK0BWIK6g7aF2B7kC7AvCKAZ0xS+DGS0nflwZGrQnt1IT89fnN8JngDDxzknPAKJRkMpn00jQ9srtNuwztctZqtc7DB1Dle49CCUajUTeO4+8vn7c3dby1tXUW3rGq33scSmBvoPfa81EU9cI7V/V7LyWg2cl5vhnev0rfe1kBURECiiOguL+ahdrMatdOwvt2+RJ+H8sbAWWY2mc8nM1mNzZrvWy329erXlAYMJsSn4SPMfmoo8Qu/aI15KsBLVzTwl2E/BkVqpXYqNyzEZm83PDHOfDu7u7A4g0C8erEB9RgPB7vv9zwbARmO1wE1Fn36SF1GTA7bPrIY4JSb1M7nHYWh9PlIdTiXQXiKWhk85O5eUCfbQZmmkp27HR34HfmAbOlArT0/SryRXp2+IQYX1rE/g1LgCRvZ4Mv3g6Q5F9txvadGwt2XU2fxLB00NXg5yRxBBRHQHEEFEdAcQQUR0Bxn4o22g+HpfzrPf6N/fKQ5m1jBIojoDgCiiOgOAKKI6A4AoojoDgCiiOgOAKKI6A4AoojoDgCiiOgOAKKI6A4AoojoDgCiiOgOAKKI6A4AoojoDgCiiOgOAKKI6A4AoojoDgCiiOgOAKKI6A4AoojoDgCiiOgOAKKI6A4AoojoDgCiiOgOAKKI6A4AoojoDgCiiOgOAKKI6A4AoojoDgCiiOgOAKKI6A4AoojoDgCiiOgOAKKI6A4AoojoDgCiiOgOA84zds4Go2aAWs1mUx2CjZPPWBSsEM3YK0eHx9zA6ZpOozt6mfeDnEc9waDQSNgLfyztwYnBbvceMDLgh0am5ub3wLWwj57j9fM2+7tIr8zHo/vi3aMoujs4eHhtNPp5J4v8XZ85PnAsUDdgt2SVqv1eT4Lnc1mp0V/0P7Q0cbGxsBCH6w4qeI/+KTx9vb2xD7r+xXxXN+vosUjizOwG+JomI8+v7NcB9oo/BoKlhSojam12ls8WAZst9uJbTgOqLtDb7V48OybGNvww24YifXkI+/QDp3PVg3Ra3v6ydTWH1ehYGaKSg39FPd05C1ERa+ykN1sIdkMWIfELn0bded5OxQGXLCQu7YW3Le723brM1W+nSmHn7oS/3bMF+k24q5XveAX3QH0rd9AmeIAAAAASUVORK5CYII="
          alt=""
        />
      ) : (
        <List tasks={tasks} />
      )}
    </div>
  );
};

export default App;
