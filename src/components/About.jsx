import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'

const About = () => {
 useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
 
 return (
	<div id="about">
	 <div className="mb-16 md:px-0 px-5">
		<div className="content">
		 <div className="md:col-span-8">
			<p className="badge">Premier Dance Events</p>
			<h2>
			 Where every movement tells a story <span className="text-white">-</span>
				from choreography to performance
			</h2>
		 </div>
		 
		 <div className="sub-content">
			<p>
			 Every dance event we curate is a reflection of our passion for movement — from the first choreography to the final performance. That dedication is what transforms a simple dance into something truly unforgettable.
			</p>
			
			<div>
			 <p className="md:text-3xl text-xl font-bold">
				<span>4.8</span>/5
			 </p>
			 <p className="text-sm text-white-100">
				More than +15000 attendees
			 </p>
			</div>
		 </div>
		</div>
	 </div>
	 
	 <div className="dance-cards">
		<div className="card">
		 <div className="card-image">
			<div className="noisy" />
			<img src="/images/ev-1.jpg" alt="Contemporary Dance" />
		 </div>
		 <div className="card-content">
			<h3 className="text-gradient">Contemporary Fusion</h3>
			<p className="text-white-100">Modern dance workshop featuring innovative choreography and expressive movements.</p>
			<div className="card-details">
			 <span className="location">Mumbai</span>
			 <span className="date">Dec 15, 2024</span>
			</div>
			<button className="book-btn">Book Now</button>
		 </div>
		</div>
		
		<div className="card">
		 <div className="card-image">
			<div className="noisy" />
			<img src="/images/abt2.png" alt="Classical Dance" />
		 </div>
		 <div className="card-content">
			<h3 className="text-gradient">Bharatanatyam Showcase</h3>
			<p className="text-white-100">Traditional Indian classical dance performance with authentic expressions.</p>
			<div className="card-details">
			 <span className="location">Chennai</span>
			 <span className="date">Dec 22, 2024</span>
			</div>
			<button className="book-btn">Book Now</button>
		 </div>
		</div>
		
		<div className="card">
		 <div className="card-image">
			<div className="noisy" />
			<img src="/images/ev-4.jpg" alt="Hip-Hop Dance" />
		 </div>
		 <div className="card-content">
			<h3 className="text-gradient">Hip-Hop Battle</h3>
			<p className="text-white-100">High-energy street dance competition with electrifying performances.</p>
			<div className="card-details">
			 <span className="location">Delhi</span>
			 <span className="date">Jan 5, 2025</span>
			</div>
			<button className="book-btn">Book Now</button>
		 </div>
		</div>
	 
		<div className="card">
		 <div className="card-image">
			<div className="noisy" />
			<img src="/images/ev-2.jpg" alt="Kathak Dance" />
		 </div>
		 <div className="card-content">
			<h3 className="text-gradient">Kathak Performance</h3>
			<p className="text-white-100">Graceful storytelling through traditional Kathak dance movements.</p>
			<div className="card-details">
			 <span className="location">Kolkata</span>
			 <span className="date">Jan 12, 2025</span>
			</div>
			<button className="book-btn">Book Now</button>
		 </div>
		</div>
		
		<div className="card">
		 <div className="card-image">
			<div className="noisy" />
			<img src="/images/abt5.png" alt="Bollywood Dance" />
		 </div>
		 <div className="card-content">
			<h3 className="text-gradient">Bollywood Workshop</h3>
			<p className="text-white-100">Learn popular Bollywood dance moves and film choreography.</p>
			<div className="card-details">
			 <span className="location">Pune</span>
			 <span className="date">Dec 18, 2024</span>
			</div>
			<button className="book-btn">Book Now</button>
		 </div>
		</div>
	 </div>
	 
	</div>
 )
}
export default About