import React from "react";
import img1 from "/motionarteffect-img1.png";
import img2 from "/motionarteffect-img2.png";
import img3 from "/motionarteffect-img3.png";
import star_img from "/motionarteffect-img4.png";

const RatingCards = () => {

const cardInfo= [{
	logo:img1,
	review:"4.5 Score, 9 Reviews",
	stars: star_img
},
{
	logo:img2,
	review:"4.5 Score, 9 Reviews",
	stars: star_img
},
{
	logo:img3,
	review:"4.5 Score, 9 Reviews",
	stars: star_img
},
]

	const Cards= ({logo,review,star_img})=>{
		return(
<div class=" max-w-sm max-h-28 ">
					<div class="flex rounded-lg h-full p-2 bg-transparent flex-col">
						<div class="flex items-center  ">
							<div class="w-16 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
								<img
									class="rounded-full w-auto h-auto"
									src={logo}
									alt="image description"
								/>
							</div>
							<div className="flex justify-center content-between gap-2 flex-col">
                                  <span><img src={star_img} alt="" /> </span>
                                  <p className="rating-color">{review}</p>
                            </div>
                          
						</div>
					</div>
				</div>
)
	}
   
	return (
		<>
			<div class="flex flex-wrap  gap-6 sm:gap-6 md:gap-2  justify-around mt-10">
				{
					cardInfo.map((val,inddex)=>{
						return(
							<Cards logo={val.logo} review={val.review} star_img={val.stars} />
						)
					})
				}
			</div>
		</>
	);

};


export default RatingCards;
