import React, {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { TbHeartPlus } from "react-icons/tb";
import { TbHeartFilled } from "react-icons/tb";
import myData from './data.json';

function CreateCard(item){

    const [isLiked, setIsLiked] = useState(item.isLiked);
    
    
    function handleLike(item){
        item.isLiked = !item.isLiked;
        console.log(item.isLiked);
    }


    return (
        <Col className='col-4'>
            <div className='previewCard'>
                <img src={item.img} alt={item.alt} />
                {item.isLiked ? <TbHeartFilled onClick={handleLike} /> : <TbHeartPlus onClick={handleLike} />}
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
                {item.saleOff !== 0 ? <h2> Giảm {item.saleOff} </h2> : null }
                <p>{item.status}</p>
            </div>
        </Col>
    )
}
