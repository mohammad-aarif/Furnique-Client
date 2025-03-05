import { GrCertificate } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";

const WhyBest = () => {
    return (
        <div className="p-8 bg-sky-50 rounded-4xl">
            <div className="flex h-96 items-center">
                <div className="w-3/5 text-gray-800 p-12">
                    <h2 className="text-3xl font-bold">Why We Are Best?</h2>
                    <p className="font-light">Furniture That Enhances Our Living Space, Provides Comfort, Reflects Our Personality, And Enhances Our Overall Well-Being Enhances And Enriches Our Lives. It Combines Aesthetics With Functionality And Can Be An Important Aspect.</p>
                    <Link className="px-4 py-2 my-1 inline-block rounded-md bg-amber-400 hover:bg-amber-500" to='/about-us'>Learn More</Link>
            </div>
                <div className="w-2/5 h-96">
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col h-96 justify-around">
                            <div className="rounded-2xl w-4/5 p-3 bg-gray-50 shadow-sky-10 shadow-lg">
                                <TbTruckDelivery className="text-5xl text-violet-700"/>
                                <h2 className="text-2xl font-bold">Free Delivery</h2>
                                <p className="font-thin text-gray-600 text-md">Order Up To BDT 10000 And Get Free Delivery</p>
                            </div>
                            <div className="rounded-2xl w-4/5 p-3 bg-gray-50 shadow-sky-10 shadow-lg">
                                <MdSupportAgent className="text-5xl text-green-600"/>
                                <h2 className="text-2xl font-bold">Instant Support</h2>
                                <p className="font-thin text-gray-600 text-md">Its Our Quality We Provide Instant Support.</p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-2xl w-4/5 p-3 bg-gray-50 shadow-sky-10 shadow-lg">
                                <GrCertificate className="text-5xl text-amber-500"/>
                                <h2 className="text-2xl font-bold">Best Quality</h2>
                                <p className="font-thin text-gray-600 text-md">We Ensure Best Quality Product On Door Step.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBest;