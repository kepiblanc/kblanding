const MakeMoney = () => {
    return (
        <div className="flex flex-col p-4 gap-4">
            <div className="w-full mx-auto flex items-center justify-center">
                <p className="text-xl font-semibold">Things We Do</p>               
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3 px-[5vw] py-2 mx-auto">
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                    <div className="bg-[#FFF5D8] rounded-lg p-3 h-[52vh] flex justify-center items-center">
                        <p className="text-md font-semibold">Make money when you want</p>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-auto md:h-[25vh]">
                        <p className="text-md font-semibold">🌟 Streamlined Trip Requests</p>
                        <p className="text-sm text-[#9A9A9A]">Our driver app makes it easy to receive and manage ride requests, ensuring that you spend less time waiting for passengers and more time earning. Efficient trip distribution means more rides and better utilization of your time on the road.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-auto md:h-[25vh]">
                        <p className="text-md font-semibold">💸 Higher Earnings with Every Ride</p>
                        <p className="text-sm text-[#9A9A9A]">At Kabukabu, we believe drivers should keep more of what they earn. That's why we offer one of the most driver-friendly platforms, allowing you to maximize your earnings without having to work extra hours.</p>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-auto md:h-[25vh]">
                        <p className="text-md font-semibold">📅 Flexible Driving Hours</p>
                        <p className="text-sm text-[#9A9A9A]">You're in control! Whether you prefer to drive mornings, nights, or weekends, Kabukabu lets you choose when you want to drive. You have the freedom to set your schedule around your life, not the other way around.</p>
                    </div>
                    <div className="bg-[#F8F8F8] rounded-lg p-3 h-auto md:h-[25vh]">
                        <p className="text-md font-semibold">🎁 Driver Incentives & Bonuses</p>
                        <p className="text-sm text-[#9A9A9A]">We appreciate the hard work of our drivers, which is why we offer regular bonuses and incentives. From special milestone rewards to referral bonuses, Kabukabu helps you increase your earnings with ease.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeMoney;