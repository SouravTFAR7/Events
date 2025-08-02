import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import {useRef} from'react';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
	const videoRef = useRef();

	const isMobile = useMediaQuery({ maxWidth: 767 });


    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'});

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
	        duration: 1.8,
	        ease: "expo.out",
	        stagger: 0.03,
        })

        gsap.from(paragraphSplit.lines, {
             opacity: 0,
	         yPercent: 100,
	         duration: 1.8,
	         ease: "expo.out",
	         stagger: 0.06,
	         delay: 1,
        })

		const startValue = isMobile ? "top 50%" : "center 60%";
	    const endValue = isMobile ? "120% top" : "bottom top";

		let tl = gsap.timeline({
	    scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	     },
	    });
		videoRef.current.onloadedmetadata = () => {
	        tl.to(videoRef.current, {
		    currentTime: videoRef.current.duration,
	   });};


    },[])
  return (
    <>
    <section id ='hero' className="bg">
        <h1 className ='title'>
           EVENTS
        </h1>
        
        <div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content">
			<div className="space-y-5 hidden md:block">
			 <p>🎉 Featured Events</p>
			 <p className="subtitle">
				Events Around <br /> India
			 </p>
			</div>
			
			<div className="view-Events">
			 <p className="subtitle">
				From music festivals to cultural celebrations, find your next unforgettable experience
			 </p>
			 <a href="#events">Book Now</a>
			</div>
		 </div>
		</div>

    </section>
	<div className="video absolute inset-0">
		<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/videos/output.mp4"
		/>
	 </div>
    </>
  )
}

export default Hero
