import { AnimatePresence, motion } from "framer-motion";
import {
	ShoppingCart,
	ChevronLeft,
	ChevronRight,
	Lightbulb,
} from "lucide-react";
import React, { useState, useEffect } from "react";

const images = [
	{
		id: 1,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
		alt: "Gallery Image 1",
		height: "h-64",
		name: "Sunset Vista",
		price: "$120.00",
		rating: 4.7,
		description: "A beautiful sunset over the ocean.",
	},
	{
		id: 2,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
		alt: "Gallery Image 2",
		height: "h-48",
		name: "Mountain Peaks",
		price: "$150.00",
		rating: 4.8,
		description: "Snow-capped peaks rising above wooded valleys.",
	},
	{
		id: 3,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
		alt: "Gallery Image 3",
		height: "h-72",
		name: "Desert Mirage",
		price: "$99.00",
		rating: 4.6,
		description: "Vast dunes under a shimmering blue sky.",
	},
	{
		id: 4,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
		alt: "Gallery Image 4",
		height: "h-56",
		name: "Forest Path",
		price: "$85.00",
		rating: 4.4,
		description: "A winding path through a sun-dappled forest.",
	},
	{
		id: 5,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
		alt: "Gallery Image 5",
		height: "h-40",
		name: "Ocean Breeze",
		price: "$99.00",
		rating: 4.9,
		description: "Gentle waves and salty air by the seashore.",
	},
	{
		id: 6,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
		alt: "Gallery Image 6",
		height: "h-60",
		name: "Urban Jungle",
		price: "$110.00",
		rating: 4.2,
		description: "A bustling cityscape with towering skyscrapers.",
	},
	{
		id: 7,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
		alt: "Gallery Image 7",
		height: "h-52",
		name: "Starry Night",
		price: "$175.00",
		rating: 5.0,
		description: "A sky full of bright stars over a calm village.",
	},
	{
		id: 8,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
		alt: "Gallery Image 8",
		height: "h-44",
		name: "Lakeside Retreat",
		price: "$129.00",
		rating: 4.3,
		description: "A tranquil lake reflecting autumn trees.",
	},
	{
		id: 9,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
		alt: "Gallery Image 9",
		height: "h-68",
		name: "Golden Fields",
		price: "$105.00",
		rating: 4.5,
		description: "Sunlit fields of wheat swaying in the breeze.",
	},
	{
		id: 10,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
		alt: "Gallery Image 10",
		height: "h-36",
		name: "City Lights",
		price: "$190.00",
		rating: 4.8,
		description: "A city skyline lit up against the night sky.",
	},
	{
		id: 11,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
		alt: "Gallery Image 11",
		height: "h-80",
		name: "Meadow Walk",
		price: "$80.00",
		rating: 4.1,
		description: "Wildflowers and tall grass by a sunny trail.",
	},
	{
		id: 12,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
		alt: "Gallery Image 12",
		height: "h-48",
		name: "Winter Solace",
		price: "$100.00",
		rating: 4.6,
		description: "A peaceful snowy landscape under soft clouds.",
	},
	{
		id: 7,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
		alt: "Gallery Image 7",
		height: "h-52",
		name: "Starry Night",
		price: "$175.00",
		rating: 5.0,
		description: "A sky full of bright stars over a calm village.",
	},
	{
		id: 8,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
		alt: "Gallery Image 8",
		height: "h-44",
		name: "Lakeside Retreat",
		price: "$129.00",
		rating: 4.3,
		description: "A tranquil lake reflecting autumn trees.",
	},
	{
		id: 9,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
		alt: "Gallery Image 9",
		height: "h-68",
		name: "Golden Fields",
		price: "$105.00",
		rating: 4.5,
		description: "Sunlit fields of wheat swaying in the breeze.",
	},
	{
		id: 10,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
		alt: "Gallery Image 10",
		height: "h-36",
		name: "City Lights",
		price: "$190.00",
		rating: 4.8,
		description: "A city skyline lit up against the night sky.",
	},
	{
		id: 11,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
		alt: "Gallery Image 11",
		height: "h-80",
		name: "Meadow Walk",
		price: "$80.00",
		rating: 4.1,
		description: "Wildflowers and tall grass by a sunny trail.",
	},
	{
		id: 12,
		src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
		alt: "Gallery Image 12",
		height: "h-48",
		name: "Winter Solace",
		price: "$100.00",
		rating: 4.6,
		description: "A peaceful snowy landscape under soft clouds.",
	},
];

const ClothStudio = () => {
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const [activeImage, setActiveImage] = useState(null);

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key === "ArrowLeft") {
				handlePrevious();
			} else if (e.key === "ArrowRight") {
				handleNext();
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [activeImageIndex]);

	const handleNext = () => {
		setActiveImageIndex((prev) => (prev + 1) % images.length);
	};

	const handlePrevious = () => {
		setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	const getImagePosition = (index) => {
		const totalImages = images.length;
		const centerIndex = activeImageIndex;
		const relativeIndex = (index - centerIndex + totalImages) % totalImages;
		const radius = 300;
		// Full circle arrangement
		const circleAngle = (relativeIndex / totalImages) * 2 * Math.PI;
		return {
			x: Math.cos(circleAngle) * radius,
			y: Math.sin(circleAngle) * radius,
			angle: circleAngle,
		};
	};

	return (
		<div className="w-full bg-black p-10 h-screen flex flex-col items-center justify-center relative overflow-hidden">
			{/* Dynamic Shape Carousel */}
			<div className="relative w-full h-full flex items-center justify-center gap-10">
				{images.map((image, index) => {
					const position = getImagePosition(index);
					const isCenter = index === activeImageIndex;
					const scale = isCenter ? 0.8 : 0.4;
					const opacity = isCenter ? 1 : 0.1;

					return (
						<motion.div
							key={image.id}
							initial={{ opacity: 0, scale: 0 }}
							animate={{
								opacity: opacity,
								scale: scale,
								x: position.x,
								y: position.y,
							}}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="absolute cursor-pointer"
							onClick={() => {
								setActiveImageIndex(index);
								setActiveImage(image);
							}}
						>
							<div className="group">
								<img
									src={image.src}
									alt={image.alt}
									className={`w-32 h-32 object-cover rounded-2xl transition-all duration-300 ${
										isCenter ? "ring-4 ring-white" : "hover:scale-105"
									}`}
									style={
										isCenter
											? {
													filter:
														"drop-shadow(20px 20px 40px rgba(0, 0, 0, 0.8))",
													boxShadow:
														"20px 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.3)",
											  }
											: {}
									}
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
			<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto ">
				{activeImageIndex > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.3 }}
						className="text-center max-w-xl flex justify-center flex-col lg:flex-row items-center gap-2"
					>
						<p className="text-white text-sm font-medium">
							{images[activeImageIndex]?.name}
						</p>
						<div className="relative h-44 flex flex-col justify-center items-start">
							{/* Gradient background for the triangular area between lines */}
							<div
								className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-transparent"
								style={{
									clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)",
								}}
							></div>
							<Lightbulb className="w-6 h-6 rotate-90 text-yellow-600" />
							<hr className="border-none origin-left rotate-[12deg] lg:w-96 w-32 relative z-10" />
							<hr className="border-none origin-left -rotate-[12deg] lg:w-96 w-32 relative z-10" />
						</div>
					</motion.div>
				)}
			</div>

			{/* Navigation Arrows - Left Bottom */}
			<div className="fixed bottom-2 left-0 right-0 mx-auto flex items-center justify-center gap-4">
				<div className="flex flex-col items-center justify-center gap-2">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={handlePrevious}
						className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
					>
						<ChevronLeft className="w-4 h-4" />
					</motion.button>
					<span className="text-xs text-zinc-700">{"<---"}</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={handleNext}
						className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
					>
						<ChevronRight className="w-4 h-4" />
					</motion.button>
					<span className="text-xs text-zinc-700">{"--->"} </span>
				</div>
			</div>

			{/* Modal */}
			<AnimatePresence>
				{activeImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex items-center justify-center p-4"
						onClick={() => setActiveImage(null)}
					>
						{/* Backdrop */}
						<div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

						{/* Image */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="relative max-w-4xl max-h-full"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex flex-col justify-center gap-10 items-center h-96">
								<img
									src={activeImage.src}
									alt="Enlarged view"
									className="w-full max-h-96 object-cover rounded-2xl shadow-2xl"
								/>

								<div className="text-white space-y-4 text-center">
									<h3 className="text-7xl font-bold">{activeImage.name}</h3>
									<p className="text-xl">{activeImage.description}</p>
								</div>
							</div>
							<motion.div
								className="flex gap-4 items-center justify-center fixed bottom-10 px-4 py-4 rounded-xl bg-black/50 w-fit left-0 right-0 mx-auto"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<img
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
									className="w-10 h-10 rounded-full object-cover border border-zinc-400 p-1 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in cursor-pointer"
								/>
								<button className="bg-zinc-200 text-sm text-black hover:bg-zinc-50 hover:rounded-2xl hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in px-4 py-2 rounded-xl cursor-pointer">
									Buy {activeImage.price}
								</button>
								<button className="bg-transparent border text-sm border-zinc-400 text-white hover:text-black hover:bg-zinc-100 hover:rounded-2xl hover:shadow-xl hover:shadow-zinc-700 transition-all duration-75 ease-in px-4 py-2 rounded-xl cursor-pointer flex gap-2 items-center">
									<ShoppingCart className="w-4 h-4" /> Add to Cart
								</button>
								{/* Close Button */}
								<button
									onClick={() => setActiveImage(null)}
									className="w-8 h-8 mx-auto border border-zinc-400 bg-black/50 hover:bg-zinc-200 hover:shadow-xl hover:shadow-zinc-700 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-200 p-1"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ClothStudio;
