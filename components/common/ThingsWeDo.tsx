import { useState } from "react";

const ThingsWeDo = () => {
    const [currentView, setCurrentView] = useState('riders');

    return (
        <div className="flex flex-col p-4 gap-4">
            <div className="w-full mx-auto flex items-center justify-center">
                <p className="text-xl font-semibold">Things We Do</p>               
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3 px-[5vw] py-2">
                <div className="flex flex-col gap-3">
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">Kabu Ride</p>
                        <p className="text-sm text-[#9A9A9A]">From student offers to loyalty rewards, we make your 
                        rides more affordable.</p>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">Kabu Drive</p>
                        <p className="text-sm text-[#9A9A9A]">From student offers to loyalty rewards, we make your 
                        rides more affordable.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">Kabu Share</p>
                        <p className="text-sm text-[#9A9A9A]">From student offers to loyalty rewards, we make your 
                        rides more affordable.</p>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">Kabu Sharp</p>
                        <p className="text-sm text-[#9A9A9A]">From student offers to loyalty rewards, we make your 
                        rides more affordable.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">Kabu Later</p>
                        <p className="text-sm text-[#9A9A9A]">From student offers to loyalty rewards, we make your 
                        rides more affordable.</p>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">Kabu Fleet</p>
                        <p className="text-sm text-[#9A9A9A]">From student offers to loyalty rewards, we make your 
                        rides more affordable.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThingsWeDo;