import Container from "react-bootstrap/Container";
import { useState } from "react";
const words = ["orange", "apple", "banana", "grape", "melon"];

function App() {
  const [target, setTarget] = useState<string>(words[0]);
  const [text, setText] = useState<string>("type!");

  document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === target.replaceAll("_", "")[0]) {
      const newTarget = target.replaceAll("_", "").slice(1);
      setTarget(newTarget.padStart(target.length, "_"));
      if (newTarget === "") {
        words.shift();
        console.log(words);
        setTarget(words[0]);
      }
    }
  });

  return (
    <Container className="w-100  p-3 mt-4 text-center">
      <p className="fs-1 text-wide font-monospace">{target}</p>
      <p>{text}</p>
    </Container>
  );
}

export default App;
