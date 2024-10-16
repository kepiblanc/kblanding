import { useState } from "react";

const BuildBetterCommunity = () => {
    const [currentView, setCurrentView] = useState('riders');

    return (
        <div className="flex flex-col md:flex-row p-4 gap-4">
            <div className="w-full md:w-1/2 px-4 md:px-[5vw] flex items-center justify-center">
                <img src="/home/better-community.png" className="w-full rounded-lg" alt="" />                
            </div>
            <div className="w-full md:w-1/2">
                <p className="text:md sm:text-xl font-bold my-3">We build a better community for all users</p>
                <div className="flex gap-3 w-auto items-center">
                    <div className={`${currentView === 'riders' ? 'rounded-full py-3 px-5 bg-[#FFBF00] text-[#000]' : 'text-[#9A9A9A] cursor-pointer'}`} onClick={() => setCurrentView('riders')}>Riders</div>
                    <div className={`${currentView === 'drivers' ? 'rounded-full py-3 px-5 bg-[#FFBF00] text-[#000]' : 'text-[#9A9A9A] cursor-pointer'}`} onClick={() => setCurrentView('drivers')}>Drivers</div>
                    <div className={`${currentView === 'fleet-owners' ? 'rounded-full py-3 px-5 bg-[#FFBF00] text-[#000]' : 'text-[#9A9A9A] cursor-pointer'}`} onClick={() => setCurrentView('fleet-owners')}>Fleet Owners</div>
                </div>
                {
                    currentView === 'riders' &&
                    <div className="flex flex-col gap-3">
                        <p className="text-md font-bold my-4">Convenience at Your Fingertips</p>
                        <div className="text-sm">
                            <p>Getting from point A to B has never been easier. With the Kabukabu app, you can book a ride with just a few taps, track your driver in real time, and enjoy cashless payments. Whether you're running late for a meeting or heading out for an evening with friends, we have you covered</p>
                        </div>
                        <p className="text-md font-semibold">📉 Low Fare Guarantee</p>
                        <p className="text-sm text-[#9A9A9A]">Always know you are getting the best rate</p>
                        <p className="text-md font-semibold">🎟️ Exclusive Discounts</p>
                        <p className="text-sm text-[#9A9A9A]">From student offers to loyalty rewards, we make your rides more affordable.</p>
                        <p className="text-md font-semibold">🔒 Safety First</p>
                        <p className="text-sm text-[#9A9A9A]">Verified drivers and 24/7 support ensure a safe, secure journey every time.</p>
                    </div>
                }
                {
                    currentView === 'drivers' &&
                    <div className="flex flex-col gap-3">
                        <p className="text-md font-bold my-4">Your Success Our Priority</p>
                        <div className="text-sm">
                            <p>Join our community of drivers who enjoy reduced commissions, flexible schedule, and fantastic earning potential. Kabukabu empowers you to earn more and provide better service to your riders.</p>
                        </div>
                        <p className="text-md font-semibold">📉 Keep More Of Your Earnings</p>
                        <p className="text-sm text-[#9A9A9A]">Low commision rates means you earn more per trip</p>
                        <p className="text-md font-semibold">🎟️ Incentives and Bonuses</p>
                        <p className="text-sm text-[#9A9A9A]">Enjoy special bonuses for hitting milestones and delivering exceptional service</p>
                        <p className="text-md font-semibold">🔒 Flexible Hours</p>
                        <p className="text-sm text-[#9A9A9A]">You decide when and where to drive. With Kabukabu, your schedule is yours to control.</p>
                    </div>
                }
                {
                    currentView === 'fleet-owners' &&
                    <div className="flex flex-col gap-3">
                        <p className="text-md font-bold my-4">Your Success Our Priority</p>
                        <div className="text-sm">
                            <p>Are you a fleet owner looking to expand your business and increase profitability? Kabukabu offers the perfect solution to help you optimize your fleet's potential and earn more without the hassle of managing every detail. With our platform, you can easily mand=age your vehicles, drivers and operations while enjoying a steady income stream.</p>
                        </div>
                        <p className="text-md font-semibold">📉 Higher Profits, Lower Commissions</p>
                        <p className="text-sm text-[#9A9A9A]">Kabukabu offers some of the lowest commission rates in the industry allowing you to maximize your earnings. Keep more of what you earn on every trip your fleet makes.</p>
                        <p className="text-md font-semibold">🎟️ Seamless Fleet Mangement</p>
                        <p className="text-sm text-[#9A9A9A]">Our advanced platform offers powerful tools to manage multiple vehicles and drivers effortlessly. From tracking performace to monitoring driver behaviour. Kabukabu makes fleet management simple and efficient.</p>
                        <p className="text-md font-semibold">🔒 Real Time Insights and Analytics</p>
                        <p className="text-sm text-[#9A9A9A]">Stay in control with real-time data on vehicle performance, earnings and driver efficiency. Kabukabu provides actionable insights to help you make informed decisions and optimize your operations.</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default BuildBetterCommunity;