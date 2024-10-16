import { useState } from "react";
import Button from "../ui/Button/Button";

const SharpBackbone = () => {

    return (
        <div className="flex flex-col md:flex-row p-4 gap-4 mt-[10vh]">
            <div className="w-full md:w-[40%]">
                <div className="text-sm flex flex-col gap-3 items-center justify-center px-4 md:px-[7vw] my-auto h-auto md:h-[80vh]">
                    <p className="font-semibold">Are you eager to drive but don't own a vehicle? Kabukabu's Sharp Driver program is designed just for you! We provide the cars, you provide the driving. Join our team of Sharp Drivers and start earning with ease.</p>
                    <div className="flex justify-start gap-6 max-sm:gap-2 w-full">
                        <a href={"https://kabukabudriver.page.link/app"}>
                            <Button
                                title={'Get The App'}
                                className="!text-[16px] font-semibold"
                                size="large"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[60%] px-4 md:px-[5vw] flex items-center justify-center h-[80vh]">
                <img src="/home/sharp-community.png" className="w-full rounded-lg" alt="" />                
            </div>
        </div>
    )
}

export default SharpBackbone;