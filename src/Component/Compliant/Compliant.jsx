import React from 'react';

import './Compliant.css';

const Compliant = () => {
	return (
		<>
			<div className='compliant'>
				<h2 className='compliant__title'>
					SHARIAH COMPLIANCE STATUS: Compliant
				</h2>
				<p className='compliant__text'>Business screening</p>
				<p className='compliant__revenu'>Revenue ratio</p>
				<div className='compliant-current'>
					<span className='red'>
						<span className='yellow'>
							<span className='green'></span>
						</span>
					</span>
				</div>
				<ul className='current_list'>
					<li className='current__item'>
						<span className='current_span'></span>
						<div className='current_info'>
							<p className='current_text'>Compliant</p>
							<span className='current_persentage'>99.80%</span>
						</div>
					</li>
					<li className='current__item'>
						<span className='current_span yellow_span'></span>
						<div className='current_info'>
							<p className='current_text'>Doubtful</p>
							<span className='current_persentage yellow_per'>00.0%</span>
						</div>
					</li>
					<li className='current__item'>
						<span className='current_span red_span'></span>
						<div className='current_info'>
							<p className='current_text'>Non-compliant</p>
							<span className='current_persentage red_per'>0.20%</span>
						</div>
					</li>
				</ul>
				<h3 className='business_title'>Business screening</h3>
				<div className='business_about'>
					<div className="info">
					<span className='business_info'>Prohibited funding ratio</span>
					<span className='business_statics'>11.2%</span>
					<span className="business_staticsspan">
						<span className='business_staticsgreen'></span>
					</span>
					</div>
					<br />
					<div className="info">
					<span className='business_info'>Prohibited assets ratio</span>
					<span className='business_statics'>5.0%</span>
					<span className="business_staticsspan">
						<span className='business_staticsgreen gren'></span>
					</span>
					</div>
				</div>
				<h3 className='additional_title'>Additional screening</h3>
				<ul className='add_list'>
					<li className='add_item'>
						<span className='add_info'>Interest expense / Total income</span>
						<span className='add_per'>64.0%</span>
					</li>
					<li className='add_item'>
						<span className='add_info'>Prohibited funding / Total assets</span>
						<span className='add_per'>33.43%</span>
					</li>
					<li className='add_item'>
						<span className='add_info'>Prohibited assets / Total assets</span>
						<span className='add_per'>13.06%</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Compliant;
