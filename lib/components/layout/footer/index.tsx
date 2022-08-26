import React from 'react';
import {
	AiFillAmazonSquare,
	AiFillFacebook,
	AiFillGooglePlusSquare,
	AiFillTwitterSquare
} from 'react-icons/ai';
import { FooterHeader } from './header';

const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col h-[200px] bg-black text-white">
			<div className="flex-1 flex px-8 pt-8 bg-black gap-x-20">
				<div className="w-1/3">
					<FooterHeader>Contact</FooterHeader>
					<p className="mt-3 text-center">E-mail: clienti@la-paletta.it</p>
					<p className="text-center">Cell: +39 333 444 44 44 </p>
				</div>
				<div className="w-1/3">
					<FooterHeader>Spedizioni 24/48H</FooterHeader>
					<div className="flex justify-center items-center mt-3">
						<AiFillAmazonSquare className="h-10 w-10 rounded-full" />
					</div>
				</div>
				<div className="w-1/3">
					<FooterHeader>Seguici su</FooterHeader>
					<ul className="flex justify-center items-center mt-3 gap-x-3">
						<li>
							<AiFillFacebook className="h-10 w-10 rounded-full" />
						</li>
						<li>
							<AiFillGooglePlusSquare className="h-10 w-10 rounded-full" />
						</li>
						<li>
							<AiFillTwitterSquare className="h-10 w-10 rounded-full" />
						</li>
					</ul>
				</div>
			</div>
			<p className="px-8 py-3 text-right text-sm">Powered by ©ilwebdifabio.it</p>
		</footer>
	);
};

export { Footer };

/*
<div className="before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-full before:h-1 before:bg-black/90 relative w-full h-6 bg-white">
				<span className="block text-center bg-white w-full"></span>PIPPO
			</div>
* */
