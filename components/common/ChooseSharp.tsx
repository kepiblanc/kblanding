import { useState } from "react";

const ChooseSharp = () => {
    const [currentView, setCurrentView] = useState('riders');

    return (
        <div className="flex flex-col p-4 gap-4 mt-[10vh]">
            <div className="w-full mx-auto flex items-center justify-center">
                <p className="text-xl font-semibold">Why Choose the Sharp Driver Program?</p>               
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3 px-[5vw] py-2">
                <div className="flex flex-col gap-3">
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">🚘 Drive a Kabukabu Vehicle</p>
                        <p className="text-sm text-[#9A9A9A]">No need to worry about owning a car. Kabukabu provides the vehicles, fully equipped and ready to go. Just focus on providing excellent service and maximizing your earnings.</p>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">🚀 Easy Onboarding</p>
                        <p className="text-sm text-[#9A9A9A]">Our streamlined onboarding process gets you behind the wheel quickly. We provide all the necessary training and support to ensure you're ready to start driving in no time.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">💰 Competitive Earnings</p>
                        <p className="text-sm text-[#9A9A9A]">Enjoy competitive rates and earn more with every ride. Our Sharp Drivers are valued members of our team, and we offer great earning potential to ensure you're rewarded for your hard work.</p>
                    </div>                    
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">🌟 Support and Maintenance</p>
                        <p className="text-sm text-[#9A9A9A]">Kabukabu handles vehicle maintenance, insurance, and support. Drive with confidence knowing that everything is taken care of, so you can focus on providing great rides and earning.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-[25vh]">
                        <p className="text-md font-semibold">🕒 Flexible Scheduling</p>
                        <p className="text-sm text-[#9A9A9A]">Choose your own hours and drive on your terms. Whether you want to work full-time or part-time, the Sharp Driver program offers flexibility to fit your lifestyle.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSharp;