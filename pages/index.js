import { useState } from "react";

export default function Home() {
  let hexCodeString = "#";
  let hexString = "abcdef0123456789";
  const [hexCode, setHexCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  let generateHexcode = () => {
    setColor(true);
    setIsDisabled(true);
    for (let i = 0; i < 6; i++) {
      hexCodeString += hexString[Math.floor(Math.random() * hexString.length)];
      setHexCode(hexCodeString.toUpperCase());
    }
    setTimeout(function () {
      setColor(false);
      setIsDisabled(false);
    }, 2000);
    console.log(isDisabled);
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
          <div className="border h-16 w-full border-dashed border-white my-5 flex justify-center items-center">
            <p>{hexCode}</p>
          </div>
          <div className="flex">
            <button
              onClick={() => generateHexcode()}
              disabled={isDisabled ? true : false}
              className="btn w-44 mr-10 h-12 text-primary active:text-secondary bg-secondary 
              active:bg-transparent active:border-secondary hover:bg-secondary-light"
            >
              Gerar
            </button>
            <button
              onClick={() => handleCopy()}
              className="btn w-32 ml-10 h-12  text-secondary active:text-primary bg-transparent 
              border border-secondary active:bg-secondary active:border-transparent hover:bg-primary-light"
            >
              Copiar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
