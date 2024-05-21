import React from "react";
import img11 from "/motionarteffect-img11.png";
import img10 from "/motionarteffect-img10.png";

const Section2 = () => {
	return (
		<>
			<h2 className="text-center font-semibold text-2xl  md:text-4x my-10">
				Apply On Any Section Or Enable <br /> For Whole Page
			</h2>

                      
			<div className="flex flex-col md:flex-row p-3 md:p-14 gap-4">
                 {/* Cards 1 Start */}
				<div className="card-background-image flex justify-center items-center w-full md:-translate-y-10">
					<div class="  border border-gray-600  rounded-lg shadow ">
						<div class="p-10">
							<a href="#">
								<h2 class="mb-2 text-2xl font-medium tracking-tight text-gray-900 ">
                                Apply On Section

								</h2>
							</a>
							<p class="mb-3 font-normal text-gray-400 text-xl ">
							Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. 
							</p>
							
						
						<a className="flex justify-center" href="#">
							<img class="rounded-t-lg " src={img10} alt="" />
						</a>
					</div></div>
				</div>

                                {/* Cards 2    Start */}
				<div className="flex justify-center items-center w-full  md:translate-y-10">
                <div className=" w-full">
					<div class="  border border-gray-600  rounded-lg shadow ">
						<div class="p-5">
							<a href="#">
								<h2 class="mb-2 text-2xl font-medium tracking-tight text-gray-900 ">
                                Apply On Page
								</h2>
							</a>
							<p class="mb-3 font-normal text-gray-400 text-xl ">
                            Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.

							</p>
							
						
						<a className="flex justify-center" href="#">
							<img class="rounded-t-lg" src={img10} alt="" />
						</a>
					</div></div>
                    </div>
                    </div>
			</div>
		</>
	);
};

export default Section2;
