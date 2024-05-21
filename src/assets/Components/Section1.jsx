import React from "react";
import wand from "/motionarteffect-img5.png";

const Section1 = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-8 lg:p-20 p-2">
				<div className="col-span-1 md:col-span-3 lg:col-span-5">
					<div className="flex justify-center flex-col ">
						<h4 className="text-xl font-semibold md:text-3xl pb-5">
							Turn Your Cursor Into A Colorful Magic Wand & Charm Your
							Visitors
						</h4>
						<p>
							Motion Art for Elementor is a groundbreaking plugin that
							empowers you to effortlessly infuse your website with
							visually stunning motion art elements.
						</p>
					</div>
					<div className="flex md:justify-start justify-center">
						<button
							type="button"
							class="text-white  button-background-image focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 my-10 py-4 me-2 mb-2 focus:outline-none "
						>
							Purchase From Envato 
						</button>
					</div>
				</div>
				<div className="col-span-1 md:col-span-2 lg:col-span-3  ">
<div className="flex md:justify-end justify-center ">
					<img
						class="h-auto max-w-full  "
						src={wand}
						alt="image description"
					/>
				</div></div>
			</div>
		</>
	);
};

export default Section1;
