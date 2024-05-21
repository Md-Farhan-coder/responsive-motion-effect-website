import React from "react";

const Content = () => {
	return (
		<>
			<div class="container text-white m-0 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-8 gap-4">

				<div class="tile  col-span-1 md:col-span-2 lg:col-span-3 p-4">
					<div className="tile-marker   flex justify-center items-center flex-col gap-2">
					<p class="bg-color">
						Transform <br />Your Website</p>
						  <span className="">With Motion <br />Art Effect</span>
					</div>
				</div>
				<div class="tile  col-spSan-1 md:col-span-3 lg:col-span-5">
					<div className="flex flex-col gap-3 font ">
						<p class="text-2xl sm:text-2xl md:text-5xl  font-bold leading-snug">
							Attract Your Visitors Attention With Colorful
							<span className="bg-color"> Motion Art Effect</span>
							
						</p>
						<p>
							Unleash the power of creativity with Motion Art for
							Elementor - your ultimate solution for seamlessly
							integrating captivating animations into your website.{" "}
						</p>
					</div>
				</div>
			</div>
			<div className=" w-full mt-20 ">
				<p className="text-center text-white font-semibold text-xl">
					Trusted by thousands of users around the world
				</p>
			</div>
		</>
	);
};

export default Content;
