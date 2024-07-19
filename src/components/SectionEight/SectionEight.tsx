import gsap from "gsap";
import { LongLine } from "../LongLine";
import React, { useEffect } from "react";
import S from "./SectionEight.module.scss";
import useRefArray from "../../hooks/useRefArray";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionEightProps = {
	windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
	const refs = useRefArray<SVGSVGElement>(5);
	const linesVisibility: boolean[] = [
		useIntersectionObserver(refs[0], 1),
		useIntersectionObserver(refs[1], 1),
		useIntersectionObserver(refs[2], 1),
		useIntersectionObserver(refs[3], 1),
		useIntersectionObserver(refs[4], 1),
	];

	useEffect(() => {
		if (!refs) return;
		refs.forEach((ref, i) => {
			if (linesVisibility[i]) {
				gsap.to(ref.current?.firstChild, {
					delay: windowWidth > 1024 ? 0.5 : 0.2,
					duration: 2.5,
					ease: "expo.out",
					strokeDashoffset: 0,
				});
			}
		});
	}, [linesVisibility, refs]);

	return (
		<section id="section-eight" data-scroll-section>
			<div className={S.section}>
				<div className={S.box}>
					<LongLine
						ref={refs[0]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>latest</p>
					<p className={S.text}>
					
Experience the epitome of luxury with our latest collection, 
where each garment is meticulously crafted to enhance the inherent beauty of the wearer. 
From intricate detailing to a minimalist aesthetic, 
our pieces stand out for their exquisite craftsmanship and timeless appeal.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/diekemzs9/image/upload/v1721224938/photo-1721201342594-5c86278ab16f_h16jzg.jpg"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[1]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>Craft</p>
					<p className={S.text}>
					Designed by Luchesse and crafted using luxurious fabrics, 
					the Verona collection exudes opulence and versatility. 
					Each piece is meticulously created to effortlessly elevate your style for any occasion. 
					Discover designs that allow you to make a statement uniquely your own, ensuring every moment is embraced with sophistication and allure.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/diekemzs9/image/upload/v1721225628/photo-1713783508683-8ee05bca0521_skrkyr.jpg"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[2]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>service</p>
					<p className={S.text}>
					Our custom furniture designs blend classic sophistication with modern sensibilities. Whether for homes or businesses, each piece is crafted with meticulous attention to detail.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/diekemzs9/image/upload/v1721225457/photo-1721044171157-0384743f4bdf_yhuuwg.jpg"
						alt="her"
					/>
				</div>
				<div className={S.box}>
					<LongLine
						ref={refs[3]}
						className={S.line}
						windowWidth={windowWidth}
					/>
					<p className={S.title}>decor</p>
					<p className={S.text}>
					Transform your space with our luxurious interior decor services. From concept to execution, we create environments that reflect your style and vision, integrating furniture, lighting, and artwork seamlessly.
					</p>
					<img
						className={S.img}
						src="https://res.cloudinary.com/diekemzs9/image/upload/v1721225883/photo-1720420021124-4e18564e070f_cs4wud.jpg"
						alt="her"
					/>
					<LongLine
						ref={refs[4]}
						className={S.line}
						windowWidth={windowWidth}
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionEight;
