import { useState } from "react";

export default function Home() {
  let hexCodeString = "#";
  let hexString = "abcdef0123456789";
  const [hexCode, setHexCode] = useState("");
  const [copied, setCopied] = useState(false);
  let generateHexcode = () => {
    for (let i = 0; i < 6; i++) {
      hexCodeString += hexString[Math.floor(Math.random() * hexString.length)];
      setHexCode(hexCodeString);
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
        <div className="bg-primary w-96 h-96 text-white rounded-xl p-5 shadow-lg">
          <div className="flex justify-center">
            <div className="rounded-full border-8 w-40 h-40 border-white flex justify-center items-center">
              <div
                style={{ background: `${hexCode}` }}
                className="bg-secondary w-32 h-32 rounded-full"
              ></div>
            </div>
          </div>
          <div className="border h-12 w-full border-dashed border-white my-5 flex justify-center items-center">
            {hexCode}
          </div>
          <div className="flex justify-evenly mt-10">
            <button
              onClick={() => generateHexcode()}
              className="w-44 h-12 flex justify-center items-center text-primary active:text-secondary
            bg-secondary rounded-lg active:bg-transparent active:border active:border-secondary font-medium"
            >
              Gerar
            </button>
            <button
              onClick={() => handleCopy()}
              className="w-32 h-12 flex justify-center items-center text-secondary active:text-primary 
              bg-transparent rounded-lg border border-secondary active:bg-secondary active:border 
              active:border-transparent font-medium"
            >
              Copiar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
