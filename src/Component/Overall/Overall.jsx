import React from 'react';
import './Overall.css';

const Overall = () => {
	return (
		<>
			<h2 className='overal_title'>OVERALL SCORE</h2>
			<div className='overal_info'>
				<span className='overal_per'>7.7 / 10.0</span>
				<span className='overal_reliable'>
					Reliable
					<span className='overal_pergreen'>94%</span>
				</span>
			</div>
			<span className='green_per'></span>
			<ul className='overal_list'>
				<li className='overal_item'>
					<p className='overal_text'>Financial strength</p>
					<p className='overal_text'>Profitability</p>
					<p className='overal_text'>Effectiveness</p>
					<p className='overal_text'>Growth</p>
					<p className='overal_text'>Forecast</p>
					<p className='overal_text'>Valuation</p>
					<p className='overal_text'>Dividend</p>
					<p className='overal_text'>Economic moat</p>
				</li>
				<li className='overal_item'>
					<div className='rotate_info'>
						<span className='overal_num'>9</span>
						<span className='rotate'>
							<span className='rotate_green'></span>
						</span>
					</div>
					<div className='rotate_info'>
						<span className='overal_num'>10</span>
						<span className='rotate'>
              <span className="rotate_gren2"></span>
            </span>
					</div>
					<div className='rotate_info'>
						<span className='overal_num'>10</span>
						<span className='rotate'>
              <span className="rotate_effect"></span>
            </span>
					</div>
					<div className='rotate_info'>
						<span className='overal_num'>7</span>
						<span className='rotate'>
              <span className="growth"></span>
            </span>
					</div>
					<div className='rotate_info'>
						<span className='overal_num'>5</span>
						<span className='rotate'>
              <span className="forecast"></span>
            </span>
					</div>
					<div className='rotate_info'>
						<span className='overal_num'>7</span>
						<span className='rotate'>
              <span className="voletian"></span>
            </span>
					</div>
					<div className='rotate_info'>
						<span className='overal_num'>8</span>
						<span className='rotate'>
              <span className="dvident"></span>
            </span>
					</div>
					<div className='rotate_info'>
						<span className='overal_num'>6</span>
						<span className='rotate'>
              <span className="economic"></span>
            </span>
					</div>
				</li>
			</ul>
		</>
	);
};

export default Overall;
