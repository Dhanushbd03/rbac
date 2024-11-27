import * as React from "react";
import logo from "@/assets/logo.png";
const Logo = () => {
	return (
		<div className="flex items-center gap-2 py-3   ">
      
		  <img
  			src={logo}
  			alt=""
  			className="size-16"
  		/><p className="font-bold text-base">Security and Facility Services</p>
		</div>
	);
};

export default Logo;
