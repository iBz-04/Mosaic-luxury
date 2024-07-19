import React from "react";
import Marquee from "react-fast-marquee";
import S from "./SectionSeven.module.scss";
import { ReactComponent as Line } from "../../svgs/line.svg";
import { ReactComponent as Plus } from "../../svgs/plus.svg";

type SectionSevenProps = {
	windowWidth: number;
};

const SectionSeven: React.FC<SectionSevenProps> = ({ windowWidth }) => {
	return (
		<section data-scroll-section>
			<div className={S.section}>
				<div className={S.marqueeSection}>
					<Marquee
						pauseOnHover
						gradient={false}
						className={S.marquee}
						speed={windowWidth > 1024 ? 15 : 80}
					>
						<p className={S.marqueeText}>Luxury</p>
						<p className={S.marqueeText}>Fashion</p>
						<p className={S.marqueeText}>Decor</p>
						<p className={S.marqueeText}>Events</p>
						<p className={S.marqueeText}>Design</p>
					</Marquee>
				</div>
				<div className={S.main}>
					<div className={S.up}>
						<div className={S.left}>
							<div className={S.row}>
								<Line
									id={"lineRef"}
									width="5vh"
									height="0.33vh"
									className={S.line1}
								/>
								<p className={S.largeText}>Classic</p>
							</div>
							<div className={S.row2}>
								<Plus />
							</div>
							<div className={S.row3}>
								<p className={S.largeText}>Style</p>
								<Line
									id={"lineRef"}
									width="5vh"
									height="0.33vh"
									className={S.line2}
								/>
							</div>
						</div>
						<div className={S.right}>
							<p className={S.smallText}>
								We believe that comfort and decoration should not be
								intimidating, luxury is more than leather and
								silk, and prices are not always the best
								criteria to judge a luxury brand.
							</p>
						</div>
					</div>
					<div className={S.down}>
						<img
							className={S.img}
							src={
								windowWidth > 1024
									? "https://res.cloudinary.com/diekemzs9/image/upload/v1721225457/photo-1721044171157-0384743f4bdf_yhuuwg.jpg"
									: "https://res.cloudinary.com/diekemzs9/image/upload/v1721339202/photo-1721274505002-b864a74eade1_y7sy8s.jpg"
							}
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SectionSeven;
