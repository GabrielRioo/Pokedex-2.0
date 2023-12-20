import Link from 'next/link'

export default function Frontside() {
  return (
    <div className="flex justify-center items-center flex-col mb-0">
      <div className="bg-red-600 w-96 rounded-xl shadow-drop">
        <header className="shadow-drop">
          <div className="flex">
            <div className="bg-white w-16 h-16 rounded-full m-3 flex justify-center items-center mb-5 shadow-drop">
              <div className="bg-slate-700 w-14 h-14 rounded-full shadow-drop_circle">
              </div>
            </div>

            <div className="bg-red-900 w-5 h-5 rounded-full m-3 shadow-drop_circle"></div>
            <div className="bg-amber-900 w-5 h-5 rounded-full m-3 shadow-drop_circle"></div>
            <div className="bg-lime-900 w-5 h-5 rounded-full m-3 shadow-drop_circle"></div>
          </div>
        </header>

        <div className="flex justify-center mt-10">
          <div className="bg-white w-80 h-64 rounded-xl shadow-drop">
            <div className="flex justify-center">
              <div className="bg-red-900 w-3 h-3 rounded-full m-2 shadow-drop"></div>
              <div className="bg-red-900 w-3 h-3 rounded-full m-2 shadow-drop"></div>
            </div>

            <div className="bg-slate-500 w-72 h-40 rounded-lg m-auto shadow-inner"></div>

            <div>
              <div className="bg-white w-10 h-10 rounded-full m-3 flex justify-center items-center shadow-drop cursor-pointer">
                <div className="bg-red-900 w-8 h-8 mb-1 rounded-full shadow-drop_circle">
                </div>
              </div>
              <div className="som"></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-500 w-80 h-40 rounded-lg m-auto mt-6 shadow-inner"></div>

        <div className="flex flex-row justify-around mt-7 mb-8">
          <div>
            <div className="bg-slate-900 rounded-md w-8 h-24 absolute flex flex-col justify-between shadow-button z-10">
              <p className="text-center cursor-pointer">W</p>
              <p className="text-center cursor-pointer">S</p>
            </div>
            <div className="bg-slate-900 rounded-md w-8 h-24 absolute rotate-90 flex flex-col-reverse justify-between shadow-button_rotate">
              <p className="rotate-[270deg] text-center cursor-pointer">A</p>
              <p className="rotate-[270deg] text-center cursor-pointer">D</p>
            </div>
          </div>

          <div className="flex flex-col items-center ">
            <div className="bg-slate-900 w-10 h-10 rounded-full ml-10 text-center cursor-pointer shadow-button">K</div>
            <div className="bg-slate-900 w-10 h-10 rounded-full m-3 text-center cursor-pointer shadow-button">J</div>
          </div>

        </div>

      </div>
    </div>
  )
}
