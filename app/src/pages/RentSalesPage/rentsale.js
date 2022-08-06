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
				<table className="site_table" style={{width: "90%", fontSize: "16px"}}>
					<thead>
						<tr className="bg-dark text-black">
							<th style={{width: "4%", textAlign: "center" }}>Lot Num</th>
							<th style={{width: "12%",  textAlign: "center" }}>Name</th>
							<th style={{width: "12%",  textAlign: "center" }}>Price</th>
							<th style={{width: "12%",  textAlign: "center" }}>Category</th>
							<th style={{width: "20%",  textAlign: "center" }}>Description</th>
							<th style={{width: "15%",  textAlign: "center" }}>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{textAlign: "center" }}>15</td>
							<td>&nbsp; Central Park</td>
							<td style={{textAlign: "center" }}>$110,000</td>
							<td style={{textAlign: "center" }}>Housing</td>
							<td>&nbsp; 1900 sqft lot, close to amenities!</td>
							<td style={{textAlign: "center" }}><i>Lot Sale</i></td>
						</tr>
						<tr>
                            <td style={{textAlign: "center" }}>20</td>
                            <td>&nbsp; Deer Lake</td>
                            <td style={{textAlign: "center" }}>$2,000</td>
                            <td style={{textAlign: "center" }}>Housing</td>
                            <td>&nbsp; 1100 sqft lot, available now!</td>
                            <td style={{textAlign: "center" }}><i>Monthly rental</i></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "center" }}>13</td>
                            <td>&nbsp; Eastern Forest</td>
                            <td style={{textAlign: "center" }}>$10,000</td>
                            <td style={{textAlign: "center" }}>Entertainment</td>
                            <td>&nbsp; Great Space</td>
                            <td style={{textAlign: "center" }}><i>Yearly rental</i></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "center" }}>12</td>
                            <td>&nbsp; South Crevasse</td>
                            <td style={{textAlign: "center" }}>$100</td>
                            <td style={{textAlign: "center" }}>Social</td>
                            <td>&nbsp; Group Hiking Tour</td>
                            <td style={{textAlign: "center" }}><i>Daily rental</i></td>
                        </tr>
					</tbody>
				</table>
				<br></br>
				<br></br>
				<h1>Site Previews</h1>
				<div className='cards__container'>
					<div className='cards__wrapper'>
						<ul className='cards__items'>
							<CardItem src={image1} text='$50,000/year' label='Housing' />
							<CardItem src={image3} text='$30,000/year' label='Entertainment' />

						</ul>
						<ul className='cards__items'>
							<CardItem src={image2} text='$1000/month' label='Storage' />
							<CardItem src={image4} text='$100/day' label='Day Use' />
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