import React from "react";
import S from "./SectionTwo.module.scss";
import { ReactComponent as Signature } from "../../svgs/signature.svg";

const SectionTwo: React.FC = () => {
	return (
		<section id="section-two" data-scroll-section>
			<div className={S.section}>
				<div className={S.textWrapper}>
					<h2 className={S.title}>The story behind mosaic</h2>
					<p className={S.text}>
						Mossaic is a LUXURY & INTERIOR DECOR agency.
						 we specialize in creating exceptional experiences 
						 through event management, furniture design, and interior decor. 
						 Our goal is to elevate every moment and space with elegance and creativity.
						 Our Services
					</p>
					{/* <Signature className={S.signature} /> */}
					<p className={S.person}>CEO</p>
				</div>
				<div className={S.imageWrapper}>
					<div className={S.imageContainer}>
						<div
							data-scroll
							className={S.image}
							data-scroll-speed="-1"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;
