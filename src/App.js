import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-slate-800 w-screen h-screen">
        <div className=" flex flex-col justify-center p-16 gap-6 h-full">
          {" "}
          <div>
            <p className="text-lg md:text-4xl text-white">Add a Tip to KEN</p>
          </div>
          <div className="grid grid-cols-2 w-full gap-6">
            <button
              className=" rounded-lg border border-white text-white py-4 active:bg-slate-200 active:text-slate-800"
              onClick={() => {
                //say thank you
                alert("Thank you for your tip!");
              }}
            >
              <p className="text-lg md:text-4xl">18%</p>
              <p className="text-xs md:text-lg">Good</p>
            </button>
            <button
              className=" rounded-lg border border-white text-white py-4 active:bg-slate-200 active:text-slate-800"
              onClick={() => {
                //say thank you
                alert("Thank you for your tip!");
              }}
            >
              <p className="text-lg md:text-4xl">20%</p>
              <p className="text-xs md:text-lg">Great</p>
            </button>
            <button
              className=" rounded-lg border border-white text-white py-4 active:bg-slate-200 active:text-slate-800"
              onClick={() => {
                //say thank you
                alert("Thank you for your tip!");
              }}
            >
              <p className="text-lg md:text-4xl">25%</p>
              <p className="text-xs md:text-lg">Wow!</p>
            </button>
            <button
              className=" rounded-lg border border-white text-white py-4 active:bg-slate-200 active:text-slate-800"
              onClick={() => {
                //say thank you
                alert("Thank you for your tip!");
              }}
            >
              <p className="text-lg md:text-4xl">30%</p>
              <p className="text-xs md:text-lg">Best Service Ever!</p>
            </button>
            <button
              className=" rounded-lg border border-white text-white py-4 active:bg-slate-200 active:text-slate-800"
              onClick={() => {
                //say thank you
                alert("Thank you for your tip!");
              }}
            >
              <p className="text-lg md:text-4xl">35%</p>
              <p className="text-xs md:text-lg">Top Top Top</p>
            </button>
            <button
              className=" rounded-lg border border-white text-white py-4 active:bg-slate-200 active:text-slate-800"
              onClick={() => {
                // ask for amount
                let amount = prompt("Enter the amount you want to tip");
                alert("Thank you for your tip of " + amount + "!");
              }}
            >
              <p className="text-lg md:text-4xl">Custom</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
