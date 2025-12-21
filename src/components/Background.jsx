import { useEffect } from "react";


export default function Background() {
useEffect(() => {
document.body.classList.add("bg-grid");
return () => document.body.classList.remove("bg-grid");
}, []);


return null;
}