import { useGlobalContext } from "./Context";
import Person from "./Person";
import { useState } from "react";
import { arrayedData } from "./Context";

const App = () => {
  const { user, clearUsers, refetchUsers } = useGlobalContext();
  return (
    <div className="container">
      {user?.map((userArray) => {
        const [id, item] = userArray;

        return <Person {...item} key={item.id} />;
      })}

      <button
        className="btn"
        onClick={user?.length == null ? refetchUsers : clearUsers}
      >
        {user?.length == null ? "Refetch users" : "Clear"}
      </button>
    </div>
  );
};
export default App;
