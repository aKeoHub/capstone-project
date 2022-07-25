import React, { useEffect, useState } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import "./rentsale.css";
import '../../components/Card/Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CardItem from '../../components/Card/CardItem';
import image1 from '../../images/img_6.jpg';
import image2 from '../../images/img_7.jpeg';

const RentSale = () => {
	const [items, setItems] = useState([]);
	const [lots, setLots] = useState([]);
    const [loading, setLoading] = useState(false);

    let [id, setIdReg] = useState(0);
	const [owner, setOwner] = useState('');
	const [category, setCategory] = useState('');
	const [name, setName] = useState('');
	const [lotNum, setLotNum] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [pictureId, setPictureId] = useState('');
	const [create_time, setCreateTime] = useState('');
	const [renterId, setRenterId] = useState('');
	const [status, setStatus] = useState('');

    useEffect(() => {
    	setLoading(true);
		fetch('api/v1/events/all')
       		.then(response => response.json())
            .then(data => {
            	setItems(data);
            	const findLots = items.map((item) => {if (item.renterId==null) return item;});
				setLots(findLots);
                setLoading(false);
            })
    }, []);

	const request = () => {
		let today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		const yyyy = today.getFullYear();
		today = yyyy + '-' + mm + '-' + dd;

		fetch("/api/v1/user", {
			method: "POST",
			body: JSON.stringify({
				id: id,
				owner: owner,
				category: category,
				name: name,
				lotNum: lotNum,
				description: description,
				price: price,
				pictureId: pictureId,
				createTime: today.toString(),
				renterId: renterId,
				status: status,
			}),
			headers: {"Content-type": "application/json; charset=UTF-8"}
			})
		.then(response => response.json())
		.then(json => console.log(json));

		if (loading) {
			return <p>Loading...</p>;
		}
    }

    function deleteItem(id) {
        fetch('api/v1/items/delete/' + id,{
            method:'DELETE'})
        .then(response => response.json())
		.then(data => {
		  setLoading(false);
		  console.log(data);
		  window.location.reload();
		})
    }

	return (
		<div className="wrapper" style={{ backgroundImage: "backgroundImg.jpg" }}>
			<div className="inner">
				<h3>Rent and Sales Page</h3>
				<form onSubmit={request}>
					<h4>Request a Site for Rent</h4>
					<div className="form-wrapper">
						<label htmlFor="">Site Number</label>
						<select className="form-control" onChange={(e) => {setStatus(e.target.value);}}>
							{lots.map((option, index) => (
                                      <option key={index} value={option.value}>
                                        {option.text}
                                      </option>
                            ))}
						</select>
					</div>
					<div className="form-wrapper">
						<label>Length</label>
						<input type="text" className="form-control" onChange={(e) => {setStatus(e.target.value);}}/>
					</div>
					<button>Submit</button>
				</form>
				<br />
				<form action="">
					<h4>Request to put a Site for Sale</h4>
					<div className="form-wrapper">
						<label htmlFor="">Site You Own</label>
						<select className="form-control">
							<option>5</option>
						</select>
					</div>
					<button>Submit</button>
				</form>

				<div className='cards'>
				<h1>Current Requests</h1>
					<Table>
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
					</Table>
					{items.map(item =>
						<div key={item.id}>
							<Table class="">
								<tr>
									<td>{item.lot_num}</td>
									<td>{item.name}</td>
									<td>{item.price}</td>
									<td>{item.category}</td>
									<td>{item.description}</td>
									<td>{item.status}</td>
									<td>
										<button onClick={()=>deleteItem(item.item_id)}> Delete </button>
									</td>
								</tr>
							</Table>
						</div>
					 )}
					<h1>Available Sites</h1>
					{items.map(item =>
                    	<Card key={item.id}>
                    		<Card.Body>
                                <Card.Title>item.lotNum + " - " + item.name</Card.Title>
                                <Card.SubTitle>item.price</Card.SubTitle>
                                <Card.Text>
                                  <p>item.category</p>
                                  <p>item.description</p>
                                </Card.Text>
                        	</Card.Body>
                    	</Card>
                    )}
					<div className='cards__container'>
						<div className='cards__wrapper'>
							<ul className='cards__items'>
								<CardItem src={image1} text='Site 2' label='Property' />
								<CardItem src={image1} text='Site 17' label='Property' />

							</ul>
							<ul className='cards__items'>
								<CardItem src={image2} text='Site 25' label='Property' />
								<CardItem src={image2} text='Site 49' label='Property' />
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}

export default RentSale;