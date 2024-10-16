const SafetyFirst = () => {
    return (
        <div className="flex flex-col md:flex-row p-4 gap-4">
            <div className="w-full md:w-1/2 px-4 md:px-[5vw] flex items-center justify-center">
                <img src="/home/better-community.png" className="w-full rounded-lg" alt="" />                
            </div>
            <div className="w-full md:w-1/2">
                <p className="text:md sm:text-xl font-bold my-3">Safety Comes First</p>
                <div className="flex flex-col gap-3">
                    <div className="text-sm">
                        <p>At Kabukabu, we prioritize your safety as much as we do our riders'. Our app includes real-time trip tracking, emergency assistance features, and a robust driver verification process to ensure that every ride is as safe as it is smooth. Whether you're driving in the city or the suburbs, you can count on Kabukabu to support you every step of the way.</p>
                    </div>
                    <p className="text-md font-bold my-4">Safety Features Include:</p>
                    <p className="text-md font-semibold">✅ Driver Background Checks:</p>
                    <p className="text-sm text-[#9A9A9A]">Verified Drivers Only</p>
                    <p className="text-md font-semibold">🚨 In-App Safety Tools:</p>
                    <p className="text-sm text-[#9A9A9A]">Instant emergency assistance and trip sharing.</p>
                    <p className="text-md font-semibold">🔒 Cashless Payments:</p>
                    <p className="text-sm text-[#9A9A9A]">Reduce the risk of handling cash by accepting payments securely through the app.</p>
                </div>
            </div>
        </div>
    )
}

export default SafetyFirst;