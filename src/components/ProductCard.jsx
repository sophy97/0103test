// 제품을 같은 카드형태로 반복 출력하는 ui 컴포넌트
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ProductCard = () => {
    
    const [item, setItem] = useState([
        {id:1, name:"shirts1", img:"옷1.png"},
        {id:2, name:"shirts2", img:"옷2.png"},
        {id:3, name:"shirts3", img:"옷3.png"},
    ])
    
    return ( 
        <>
        {/* map으로 출력 위해 > 배열값 필요 
            require사용해서 이미지 주소 지정 */}
        <p className='text'>더보기</p>
        <Container>
            <Row>
                {
                    item.map((item, idx) => (
                        <Col key={idx} className='product-box'>
                            <img className="img" src={require('../img/'+item.img)} />
                            <br />
                            <b key={item.id}>{item.name}</b>
                        </Col>
                    ))
                }
            </Row>
        </Container>
        </>
    );
}

export default ProductCard;