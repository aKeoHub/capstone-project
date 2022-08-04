import React, { useEffect, useState } from "react";

import "./rentsale.css";
import '../../components/Card/Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CardItem from '../../components/Card/CardItem';
import image1 from '../../images/img_6.jpg';
import image2 from '../../images/img_7.jpeg';

const RentSale = () => {
	return (
		<div className="wrapper">
			<div className="--inner">
				<h3>Rent and Sales Page</h3>
				<h1>Available Sites</h1>
				<table className="site_table" style={{width: "100%"}}>
					<thead>
						<tr>
							<th>Lot Num</th>
							<th>Name</th>
							<th>Price</th>
							<th>Category</th>
							<th>Description</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>15</td>
							<td>Westend</td>
							<td>$20,000</td>
							<td>Entertainment</td>
							<td>Beautiful site</td>
							<td>Yearly rental</td>
						</tr>
					</tbody>
				</table>
				<h1>Site Previews</h1>
				<div className='cards__container'>
					<div className='cards__wrapper'>
						<ul className='cards__items'>
							<CardItem src={image1} text='$20,000/year' label='Housing' />
							<CardItem src={image1} text='$30,000/year' label='Entertainment' />

						</ul>
						<ul className='cards__items'>
							<CardItem src={image2} text='$1000/day' label='Day use' />
							<CardItem src={image2} text='$10,000/year' label='Storage' />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);

}

export default RentSale;