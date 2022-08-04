import React, { useEffect, useState } from "react";

import "./rentsale.css";
import '../../components/Card/Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CardItem from '../../components/Card/CardItem';
import image1 from '../../images/img_6.jpg';
import image2 from '../../images/img_7.jpeg';
import image3 from '../../images/img_10.jpg';
import image4 from '../../images/img_11.jpg';

const RentSale = () => {
	return (
		<div className="wrapper">
			<div className="--inner">
				<h1>Available Sites</h1>
				<br/>
				<table className="site_table" style={{width: "90%"}}>
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
						<tr>
                            <td>20</td>
                            <td>South Crevasse</td>
                            <td>$1,000</td>
                            <td>Social</td>
                            <td>Adventurous Route</td>
                            <td>Monthly rental</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Eastern Forest</td>
                            <td>$10,000</td>
                            <td>Entertainment</td>
                            <td>Great Space</td>
                            <td>Yearly rental</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>West Park</td>
                            <td>$100</td>
                            <td>Entertainment</td>
                            <td>For Various Activities</td>
                            <td>Daily rental</td>
                        </tr>
					</tbody>
				</table>
				<br></br>
				<br></br>
				<h1>Site Previews</h1>
				<div className='cards__container'>
					<div className='cards__wrapper'>
						<ul className='cards__items'>
							<CardItem src={image1} text='$20,000/year' label='Housing' />
							<CardItem src={image3} text='$30,000/year' label='Entertainment' />

						</ul>
						<ul className='cards__items'>
							<CardItem src={image2} text='$1000/day' label='Day use' />
							<CardItem src={image4} text='$10,000/year' label='Storage' />
						</ul>
					</div>
				</div>
				<p className="inquire">For inquiries about renting or selling a property, please:</p>
				<p className="inquire"> email at rent_sale@wendys.ca || call at 123-456-7890</p>
			</div>
		</div>
	);

}

export default RentSale;