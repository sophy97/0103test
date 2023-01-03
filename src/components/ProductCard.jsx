// 제품을 같은 카드형태로 반복 출력하는 ui 컴포넌트
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ProductCard = () => {
    
    const [item, setItem] = useState([
        {id:1, name:"shirts1",},
        {id:2, name:"shirts2",},
        {id:3, name:"shirts3",},
    ])

    const [imgList, setImgList] = useState([
        "옷1.png",
        "옷2.png",
        "옷3.png",
    ]);
    
    return ( 
        <>
        {/* map으로 출력 위해 > 배열값 필요 
            require사용해서 이미지 주소 지정 */}
        <p className='text'>더보기</p>
        <Container>
            <Row className='product-box'>
                {
                    imgList.map((img, idx) => (
                        <Col key={idx}>
                            <img className="img" src={require('../img/'+ img)} />
                            <br />
                            <b key={item[idx].id}>{item[idx].name}</b>
                        </Col>
                    ))
                }
            </Row>
        </Container>
        </>
    );
}

export default ProductCard;