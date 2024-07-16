import gsap from "gsap";
import Marquee from "react-fast-marquee";
import S from "./SectionFive.module.scss";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Line } from "../../svgs/line.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionFiveProps = {
	windowWidth: number;
};

const SectionFive: React.FC<SectionFiveProps> = ({ windowWidth }) => {
	const title1ScrollSpeed = windowWidth <= 1024 ? -7.5 : 1.2;
	const title2ScrollSpeed = windowWidth <= 1024 ? 6 : -1.2;

	const ref = useRef<HTMLParagraphElement>(null);
	const isOnScreen = useIntersectionObserver(ref, 1);

	useEffect(() => {
		if (isOnScreen) {
			gsap.to("#lineRef > line", {
				duration: 2,
				ease: "expo.out",
				strokeDashoffset: 0,
			});
		}
	}, [isOnScreen]);

	return (
		<section id="section-five" data-scroll-section>
			<div id="target-element" className={S.section}>
				<Marquee
					pauseOnHover
					gradient={false}
					className={S.marquee}
					speed={windowWidth > 1024 ? 15 : 80}
				>
					<p className={S.marqueeText}>Collections</p>
					<p className={S.marqueeText}>Collections</p>
					<p className={S.marqueeText}>Collections</p>
					<p className={S.marqueeText}>Collections</p>
				</Marquee>
				<div className={S.main}>
					<h2
						data-scroll
						className={S.title1}
						data-scroll-direction="horizontal"
						data-scroll-speed={title1ScrollSpeed}
					>
						New
					</h2>
					<img
						className={S.image}
						src="https://res.cloudinary.com/tobijudah/image/upload/q_auto,f_auto/v1637486753/it/4_xgr6j4.png"
						alt=""
					/>
					<h2
						data-scroll
						className={S.title2}
						data-scroll-direction="horizontal"
						data-scroll-target="#target-element"
						data-scroll-speed={title2ScrollSpeed}
					>
						Collection
					</h2>
				</div>
				<div className={S.sub}>
					<p className={S.subText}>Eco-friendly</p>
					<div className={S.subRow}>
						<Line
							id={"lineRef"}
							width="11.22vh"
							height="0.33vh"
							className={S.line1}
						/>
						<p ref={ref} className={S.subText}>
							feel the comfort
						</p>
					</div>
					<div className={S.subRow}>
						<p className={S.subText}>Minimalistic</p>
						<Line
							id={"lineRef"}
							width="11.22vh"
							height="0.33vh"
							className={S.line2}
						/>
					</div>
				</div>
				<div className={S.textWrapper}>
					<p className={S.text}>
					Minimalism has taken on a fresh silhouette with our Mosaic collection,\
					 crafted to the highest standards of quality.
					 We blend luxury, exclusivity, and simplicity effortlessly.
					 Our brand is dedicated to creating distinctive pieces that seamlessly integrate into your wardrobe
					  without compromising your individuality or creativity. Each item in our product line is designed to embody timeless elegance.

Our garments are versatile, designed to accompany you from city streets to mountain retreats. They are meticulously crafted from eco-friendly materials, handcrafted through an ethical manufacturing process. Simply add a touch of confidence, and our pieces will effortlessly enhance your style. 
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionFive;
