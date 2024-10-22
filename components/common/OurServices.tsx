import { useState } from "react";

const OurServices = () => {
    const [currentView, setCurrentView] = useState('riders');

    return (
        <div className="flex flex-col md:flex-row p-4 gap-4">
            <div className="w-full">
                <p className="text:md sm:text-xl font-bold my-3 text-center">Our Services</p>
                <p className="text:sm sm:text-md font-bold my-3 text-center">Kabukabu offers a range of services designed to meet the transportation needs of different groups:</p>
                <div className="flex gap-3 w-full items-center justify-center">
                    <div className={`text-xs sm:text-sm text-center ${currentView === 'riders' ? 'rounded-full py-1 px-5 bg-[#FFBF00] text-[#000]' : 'text-[#9A9A9A] cursor-pointer'}`} onClick={() => setCurrentView('riders')}>For Riders</div>
                    <div className={`text-xs sm:text-sm text-center ${currentView === 'drivers' ? 'rounded-full py-1 px-5 bg-[#FFBF00] text-[#000]' : 'text-[#9A9A9A] cursor-pointer'}`} onClick={() => setCurrentView('drivers')}>For Drivers</div>
                    <div className={`text-xs sm:text-sm text-center ${currentView === 'fleet-owners' ? 'rounded-full py-1 px-5 bg-[#FFBF00] text-[#000]' : 'text-[#9A9A9A] cursor-pointer'}`} onClick={() => setCurrentView('fleet-owners')}>For Fleet Owners</div>
                    <div className={`text-xs sm:text-sm text-center ${currentView === 'sharp-drivers' ? 'rounded-full py-1 px-5 bg-[#FFBF00] text-[#000]' : 'text-[#9A9A9A] cursor-pointer'}`} onClick={() => setCurrentView('sharp-drivers')}>For Sharp Drivers</div>
                </div>
                {
                    currentView === 'riders' &&
                    <div className="flex flex-col md:flex-row p-4 gap-4 mt-[10vh]">
                        <div className="w-full md:w-[50%] px-4 flex items-center justify-center h-[60vh]">
                            <img src="/home/better-community.png" className="w-full rounded-lg h-full" alt="" />                
                        </div>
                        <div className="w-full md:w-[50%] text-sm flex flex-col gap-3 items-center justify-start px-4 my-auto h-auto md:h-[60vh]">
                            <div className="my-auto">
                                <p className="text:md sm:text-xl font-bold my-3 text-start w-full">Ride With Ease</p>
                                <p className="font-semibold">With just a few taps, you can book a comfortable, reliable, and affordable ride. Enjoy perks like discounts for students and frequent riders, all while traveling in style.</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    currentView === 'drivers' &&
                    <div className="flex flex-col md:flex-row p-4 gap-4 mt-[10vh]">
                        <div className="w-full md:w-[50%] px-4 flex items-center justify-center h-[60vh]">
                            <img src="/home/driver-hero-bg.png" className="w-full rounded-lg h-full" alt="" />                
                        </div>
                        <div className="w-full md:w-[50%] text-sm flex flex-col gap-3 items-center justify-start px-4 my-auto h-auto md:h-[60vh]">
                            <div className="my-auto">
                                <p className="text:md sm:text-xl font-bold my-3 text-start w-full">Empower Your Drive</p>
                                <p className="font-semibold">We priortize the well-being and success of our drivers by offering reduced commission rates, flexible schedules and incentives to boost earnings. Whether you own your own vwhicle or drive through our Sharp Driver program, Kabukabu makes it easy for you to earn more.</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    currentView === 'fleet-owners' &&
                    <div className="flex flex-col md:flex-row p-4 gap-4 mt-[10vh]">
                        <div className="w-full md:w-[50%] px-4 flex items-center justify-center h-[60vh]">
                            <img src="/home/better-community.png" className="w-full rounded-lg h-full" alt="" />                 
                        </div>
                        <div className="w-full md:w-[50%] text-sm flex flex-col gap-3 items-center justify-start px-4 my-auto h-auto md:h-[60vh]">
                            <div className="my-auto">
                                <p className="text:md sm:text-xl font-bold my-3 text-start w-full">Maximize Your Fleet's Potential</p>
                                <p className="font-semibold">Out platform allows fleet owners to maximize the potential of their vehicles. Partner with Kabukabu to streamline your fleet operations, gain valuable insights and see higher returns on vehicles.</p>
                            </div>
                            
                        </div>
                    </div>
                }
                {
                    currentView === 'sharp-drivers' &&
                    <div className="flex flex-col md:flex-row p-4 gap-4 mt-[10vh]">
                        <div className="w-full md:w-[50%] px-4 flex items-center justify-center h-[60vh]">       
                            <img src="/home/sharp-hero-bg.png" className="w-full rounded-lg h-full" alt="" />        
                        </div>
                        <div className="w-full md:w-[50%] text-sm flex flex-col gap-3 items-center justify-start px-4 my-auto h-auto md:h-[60vh]">
                            <div className="my-auto">
                                <p className="text:md sm:text-xl font-bold my-3 text-start w-full">Drive With Us, Without a Car</p>
                                <p className="font-semibold">Designed for individuals who don't own a car but want to drive, our Sharp Drivers program provides the vehicle, while you provide the service. Kabukabu takes care of the details, from maintenance to insurance, so you can focus on earning</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default OurServices;