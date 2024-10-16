import { useState } from "react";

const AppCommunity = () => {

    return (
        <div className="flex flex-col p-4 gap-4">
            <p className="text:md sm:text-xl font-bold my-3 text-center">More than an app, a community</p>
            <div className="text-sm px-4 md:px-[20vw] text-center justify-center items-center">
                <p>At Kabukabu, we believe in building more than just a ride-hailing platform - we're creating a vibrant community where riders and drivers come together with shared goals of convenience, safety, and mutual respect. Our platform fosters a sense of belonging by offering tailored rewards, open communication, and support for everyone. Whether you're a rider enjoying perks like student discounts or a driver benefiting from reduced commissions, Kabukabu ensures everyone is valued. Together, we're shaping a community that thrives on connection, trust, and the joy of every journey.</p>
            </div>
            <div className="w-full px-4 md:px-[10vw] flex items-center justify-center">
                <img src="/home/better-community.png" className="w-full rounded-lg" alt="" />                
            </div>
        </div>
    )
}

export default AppCommunity;