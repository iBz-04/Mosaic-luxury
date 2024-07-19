import React from "react";
import S from "./SectionSix.module.scss";

const SectionSix: React.FC = () => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div data-scroll data-scroll-speed='-10' className={S.videoWrapper}>
					<img src="https://res.cloudinary.com/diekemzs9/image/upload/v1721339147/photo-1721274506499-906b8188b7c3_f42wqt.jpg" alt="" className={S.img} />
				</div>
			</div>
		</section>
	);
};

export default SectionSix;
