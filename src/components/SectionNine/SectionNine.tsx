import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import S from "./SectionNine.module.scss";

type SectionEightProps = {
	windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
	const textScrollSpeed = windowWidth <= 1024 ? -5 : 3;

	return (
		<section id="section-nine" data-scroll-section>
			<div className={S.section}>
				<div className={S.left}>
					<p className={S.text}>
						Check out more pictures of our collections
					</p>
					<Link to="/gallery">
						<div className={S.button}>
							<Button use="section-nine" text="go to gallery" />
						</div>
					</Link>
				</div>
				<div className={S.right}>
					<img
						className={S.image1}
						src="https://res.cloudinary.com/diekemzs9/image/upload/v1721339960/photo-1713192707004-c5393db37d57_v7mavj.jpg"
						alt=""
					/>
					<img
						className={S.image2}
						src="https://res.cloudinary.com/diekemzs9/image/upload/v1721339267/photo-1721308895508-82ae3bd215cb_dqszte.jpg"
						alt=""
					/>
					<img
						className={S.image3}
						src="https://res.cloudinary.com/diekemzs9/image/upload/v1721225303/photo-1721201342172-2bf6afec99e3_sy7t4i.jpg"
						alt=""
					/>
					<p
						data-scroll
						className={S.title}
						data-scroll-direction="horizontal"
						data-scroll-speed={textScrollSpeed}
					>
						MOSAIC LUXURY
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionEight;
