import Image from "next/image";
import { useState } from "react";
import Counter from "./Counter";
import File from "./File";


export default function Home() {
 // const [count, setCount] = useState(0);
  // const client = useClient()
  return (
 
    <div><Counter/>
    <File/></div>
  );
}
