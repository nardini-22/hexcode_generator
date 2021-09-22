import { useState } from "react";

export default function Home() {
  let hexCodeString = "#";
  let hexString = "abcdef0123456789";
  const [hexCode, setHexCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState(false);
  let generateHexcode = () => {
    for (let i = 0; i < 6; i++) {
      hexCodeString += hexString[Math.floor(Math.random() * hexString.length)];
      setHexCode(hexCodeString);
      setColor(true);
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(`${hexCode}`);
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 2000);
  };
  return (
    <>
      <div
        style={{ display: copied ? "block" : "none" }}
        className="w-44 p-5 bg-primary absolute text-white right-0"
      >
        Copiado para área de transferência!
      </div>
      <div
        style={{ background: `${hexCode}` }}
        className="w-screen h-screen flex justify-center items-center"
      >
        <div className="bg-primary text-white rounded-xl p-5 shadow-lg">
          <div className="flex justify-center">
            <div className="rounded-full border-8 w-56 h-56 border-white flex justify-center items-center">
              <div
                style={{ background: `${hexCode}` }}
                className={color ? "colorWave" : "colorFill"}
              ></div>
            </div>
          </div>
          <div className="border h-12 w-full border-dashed border-white my-5 flex justify-center items-center">
            {hexCode}
          </div>
          <div className="flex justify-evenly">
            <button
              onClick={() => generateHexcode()}
              className="w-44 mx-5 h-12 flex justify-center items-center text-primary active:text-secondary
            bg-secondary rounded-lg active:bg-transparent active:border active:border-secondary font-medium 
            outline-none"
            >
              Gerar
            </button>
            <button
              onClick={() => handleCopy()}
              className="w-32 mx-5 h-12 flex justify-center items-center text-secondary active:text-primary 
              bg-transparent rounded-lg border border-secondary active:bg-secondary active:border 
              active:border-transparent font-medium outline-none"
            >
              Copiar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
