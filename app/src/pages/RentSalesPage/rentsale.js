import React, { useEffect, useState } from "react";
import "./rentsale.css";
import '../../components/Card/Cards.css';
import CardItem from '../../components/Card/CardItem';
import image1 from '../../images/img_6.jpg';
import image2 from '../../images/img_7.jpeg';

const RentSale = () => {

return (
    <div className="wrapper" style={{ backgroundImage: "backgroundImg.jpg" }}>
      <div className="inner">
        <h3>Rent and Sales Page</h3>
        <form action="">
                        <h4>Request a Site for Rent</h4>
                                        <div className="form-wrapper">
                                            <label htmlFor="">Site Number</label>
                                            <select className="form-control">
                                              <option>2</option>
                                              <option>17</option>
                                              <option>25</option>
                                              <option>49</option>
                                            </select>
                                        </div>
                                        <div className="form-wrapper">
                                            <label>Start date</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                        <div className="form-wrapper">
                                            <label>End date</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                        <div className="form-wrapper">
                                            <label>Description of unit (type, length, tow vehicle, pets)</label>
                                            <input type="textbox" className="form-control" />
                                        </div>
                                        <div className="form-wrapper">
                                            <label>Hookup requirements</label>
                                            <select className="form-control">
                                              <option>None</option>
                                              <option>Power/water only</option>
                                              <option>Full</option>
                                            </select>

                                        </div>
                                        <button>Submit</button>
                </form>
<br/>
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
                <h1>Available Sites</h1>
                    <div className='cards__container'>
                        <div className='cards__wrapper'>
                            <ul className='cards__items'>
                                <CardItem
                                src={image1}
                                    text='Site 2'
                                    label='Property'
                                />
                                <CardItem
                                src={image1}
                                    text='Site 17'
                                    label='Property'
                                />

                            </ul>
                            <ul className='cards__items'>
                                <CardItem
                                src={image2}
                                                                    text='Site 25'
                                                                    label='Property'
                                                                />
                                <CardItem
                                src={image2}
                                                                    text='Site 49'
                                                                    label='Property'
                                                                />
                            </ul>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );

};

export default RentSale;