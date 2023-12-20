import Link from 'next/link'

export default function Backside() {
    return (
        <div className="flex justify-center items-center flex-col md:self-end">
            <div className="bg-red-600 w-96 rounded-xl shadow-drop">
                <div className="flex justify-center mt-10">
                    <div className="bg-slate-500 w-11/12 h-96 rounded-lg m-auto shadow-inner md:h-80"></div>
                </div>

                <div className="flex flex-row gap-3 justify-center items-center mt-5 mb-8">
                    <div className="bg-slate-900 rounded-md w-16 h-10 flex flex-col justify-between shadow-button z-10">
                        <p className="text-center cursor-pointer mt-1">1</p>
                    </div>

                    <div className="bg-slate-900 rounded-md w-16 h-10 flex flex-col justify-between shadow-button z-10">
                        <p className="text-center cursor-pointer mt-1">2</p>
                    </div>

                    <div className="bg-slate-900 rounded-md w-16 h-10 flex flex-col justify-between shadow-button z-10">
                        <p className="text-center cursor-pointer mt-1">3</p>
                    </div>

                    <div className="bg-slate-900 rounded-md w-16 h-10 flex flex-col justify-between shadow-button z-10">
                        <p className="text-center cursor-pointer mt-1">4</p>
                    </div>

                    <div className="bg-slate-900 rounded-md w-16 h-10 flex flex-col justify-between shadow-button z-10">
                        <p className="text-center cursor-pointer mt-1">5</p>
                    </div>
                </div>


                <div className="flex flex-row justify-evenly items-center mt-5 mb-8">
                    <div>
                        <div className="bg-slate-900 w-2 h-32 ml-3 mr-3 rounded-full text-center">
                            <div className="bg-slate-900 w-2 h-6 rounded-full rotate-90"></div>
                            <div className="bg-slate-900 w-2 h-6 rounded-full rotate-90"></div>
                            <div className="bg-slate-900 w-2 h-6 rounded-full rotate-90"></div>
                            <div className="bg-slate-900 w-2 h-6 rounded-full rotate-90"></div>
                            <div className="bg-slate-900 w-2 h-6 rounded-full rotate-90"></div>
                        </div>
                    </div>
                    <div className="bg-slate-500 w-60 h-40 rounded-lg shadow-inner"></div>
                    <div className="bg-slate-900 w-10 h-10 rounded-full text-center cursor-pointer shadow-button">J</div>

                </div>

            </div>
        </div>
    )
}
