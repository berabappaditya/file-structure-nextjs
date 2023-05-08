"use client";
import React, { useEffect } from "react";
import fileData from "./File.json";

function File() {
  const [data, setData] = React.useState(fileData);
  useEffect(() => {
    //console.log("data", data);
  }, [data]);

  const recChang = (data: any, child: any) => {
    if (data.name === child.name) {
      const updatedData = { ...data, show: !data.show };
      return updatedData;
    } else if (data.path) {
      const updatedPath = data.path.map((item: any) => recChang(item, child));
      const updatedData = { ...data, path: updatedPath };
      return updatedData;
    }
    return data;
  };

  const makeVisible = (item: any, child: any) => {
    const newObj = recChang(item, child);
    // console.log("neObj", newObj);
    // console.log("child", child);
    setData(newObj);
  };

  const fileRender = (item: any, idx: any) => {
    //console.log("itemmmmmm",item)
    return (
      <ul className="list-none pl-4" key={idx}>
        <li
          
          
        >
          {"|_"}
          <p className="mt-3   inline" onClick={() => {
            makeVisible(data, item);
          }}>{item.name}</p>
          {item.show &&
            item.path?.map((itm: any, idx: any) => fileRender(itm, idx))}
        </li>
      </ul>
    );
  };

  return <div>{fileRender(data, 0)}</div>;
}

export default File;
