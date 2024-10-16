import { useState } from "react";

const NoCarNoProblem = () => {

    return (
        <div className="flex flex-col p-4 gap-4">
            <p className="text:md sm:text-xl font-bold my-3 text-center">🚗 No Car? No Problem!</p>
            <div className="text-sm px-4 md:px-[20vw] text-center justify-center items-center">
                <p>Are you eager to drive but don’t own a vehicle? Kabukabu's Sharp Driver program is designed just for you! We provide the cars, you provide the driving. Join our team of Sharp Drivers and start earning with ease.</p>
            </div>
            <div className="w-full px-4 md:px-[10vw] flex items-center justify-center">
                <img src="/home/better-community.png" className="w-full rounded-lg" alt="" />                
            </div>
        </div>
    )
}

export default NoCarNoProblem;