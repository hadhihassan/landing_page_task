
import { Carousel } from "flowbite-react";

export function Slider() {
    return (
        <div className="h-[400px] w-[430px] sm:hidden grid  overflow-y-hidden border p-5 rounded-2xl border-gray-500">
            <Carousel slideInterval={1000} indicators={false}  className=" overflow-x-hidden gap-11 ">
                <div className="border border-green-700 rounded-2xl px-10 pt-10 pb-1 h-auto w-[370px] ">
                    <div>
                        <p className="font-semibold text-2xl">
                            Full Stack Developer and Certification courses
                        </p>
                        <p className="text-sm font-sans break-all mt-5">
                            Every day, new technologies having the potential to transform interpersonal and professional relationships are born. Businesses are rapidly changing to digital. As a result , the need for IT professionals are also growing. According to recent studies, the demand for IT professionals will rise by 50-70 percent in the future.
                        </p>
                    </div>
                    <div className="flex items-end justify-end mt-5 mb-2 ml-3">
                        <button className="border py-1 px-3 text-sm font-sans rounded-full border-gray-500 text-green-400">Read More</button>
                    </div>
                </div> 
                <div className=" sm:gird border border-green-700 rounded-2xl px-10 pt-10 pb-1 h-auto w-[370px]">
                    <div>
                        <p className="font-semibold text-2xl">
                            Bachelor of Commerce (Bcom)
                        </p>
                        <p className="text-sm font-sans break-all mt-5">
                            Every day, new technologies having the potential to transform interpersonal and professional relationships are born. Businesses are rapidly changing to digital. As a result , the need for IT professionals are also growing. According to recent studies, the demand for IT professionals will rise by 50-70 percent in the future.
                        </p>
                    </div>
                    <div className="flex items-end justify-end mt-5 mb-2 ml-3">
                        <button className="border py-1 px-3 text-sm font-sans rounded-full border-gray-500 text-green-400">Read More</button>
                    </div>
                </div>
                <div className="border border-green-700 rounded-2xl px-10 pt-10 pb-1 h-auto w-[370px]">
                    <div>
                        <p className="font-semibold text-2xl">
                            BBA Computer Application
                        </p>
                        <p className="text-sm font-sans break-all mt-5">
                            Every day, new technologies having the potential to transform interpersonal and professional relationships are born. Businesses are rapidly changing to digital. As a result , the need for IT professionals are also growing. According to recent studies, the demand for IT professionals will rise by 50-70 percent in the future.
                        </p>
                    </div>
                    <div className="flex items-end justify-end mt-5 mb-2 ml-3">
                        <button className="border py-1 px-3 text-sm font-sans rounded-full border-gray-500 text-green-400">Read More</button>
                    </div>
                </div>
                <div className="border border-green-700 rounded-2xl px-10 pt-10 pb-1 h-auto w-[370px]">
                    <div>
                        <p className="font-semibold text-2xl">
                            Bsc computer science -AI and Data Science
                        </p>
                        <p className="text-sm font-sans break-all mt-5">
                            Every day, new technologies having the potential to transform interpersonal and professional relationships are born. Businesses are rapidly changing to digital. As a result , the need for IT professionals are also growing. According to recent studies, the demand for IT professionals will rise by 50-70 percent in the future.
                        </p>
                    </div>
                    <div className="flex items-end justify-end mt-5 mb-2 ml-3">
                        <button className="border py-1 px-3 text-sm font-sans rounded-full border-gray-500 text-green-400">Read More</button>
                    </div>
                </div>
                <div className="border border-green-700 rounded-2xl px-10 pt-10 pb-1 h-auto w-[370px]">
                    <div>
                        <p className="font-semibold text-2xl">
                            BBA Aviation Management
                        </p>
                        <p className="text-sm font-sans break-all mt-5">
                            Every day, new technologies having the potential to transform interpersonal and professional relationships are born. Businesses are rapidly changing to digital. As a result , the need for IT professionals are also growing. According to recent studies, the demand for IT professionals will rise by 50-70 percent in the future.
                        </p>
                    </div>
                    <div className="flex items-end justify-end mt-5 mb-2 ml-3">
                        <button className="border py-1 px-3 text-sm font-sans rounded-full border-gray-500 text-green-400">Read More</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
