import styled from "styled-components"
import "./css/sc.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import sc1 from "./images/sc1.jpg"
import sc2 from "./images/sc2.jpg"
import { ModalContainer, ModalOverlay, ModalCloseBtn, ModalContent } from "./Modal";
const Container=styled.div`
  width: calc(100vw-10px);
  background-color:e5989b ;
`
const Footer=styled.div`
display: flex;
`
const Buttons=styled.ul`
li{
    list-style: none;
    margin: 20px;
    float: left;
    position: relative;
    left: 600px;
    top: 200px;
    width: calc( 10% );
    text-align: center; 
    z-index: 1;
  
}
p{
  font-weight: bold;
}
`
const Table=styled.table`
    width: 100%;
    border: 1px solid #444444;
    background-color: ffcdb2;
  th{
    background-color: lightsalmon;
  }
  th, td {
    border: 1px solid #444444;
    
  }
`
export function Sc(){
  const [favoritehp, setfavoritehp] = useState('');

  function favoritehpLoading() {
    // 서버의 API를 호출하여 데이터 가져오기
    fetch('http://localhost:3301/api/favoritehp') // 백엔드 서버 주소를 사용
    .then((response) => response.json())
    .then((data) => {
      setfavoritehp(data);
    })
    .catch((error) => {
    });
  }

  useEffect(() => {
    favoritehpLoading();
  }, [favoritehp]);

  const [popularhp, setpopularhp] = useState('');

  function popularhpLoading() {
    // 서버의 API를 호출하여 데이터 가져오기
    fetch('http://localhost:3301/api/popularhp') // 백엔드 서버 주소를 사용
    .then((response) => response.json())
    .then((data) => {
      setpopularhp(data);
    })
    .catch((error) => {
    });
  }

  useEffect(() => {
    popularhpLoading();
  }, [popularhp]);
  const [distancehp, setdistancehp] = useState('');

  function distancehpLoading() {
    // 서버의 API를 호출하여 데이터 가져오기
    fetch('http://localhost:3301/api/distancehp') // 백엔드 서버 주소를 사용
    .then((response) => response.json())
    .then((data) => {
      setdistancehp(data);
      
    })
    .catch((error) => {
    });
  }

  useEffect(() => {
    distancehpLoading();
  }, [distancehp]);

  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  

  

  return<>
      <Container> 
      {
    modalOpen1 &&
        <ModalContainer>
        <ModalOverlay onClick={() => setModalOpen1(false)}/>    
        <ModalContent>
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>병원이름</th>
              <th>예약자</th>
            </tr>
          </thead>
          <tbody>
            {favoritehp && favoritehp.length > 0 && favoritehp.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.hp_name}</td>
                <td>{item.uid}</td>
              </tr>
            ))}
          </tbody>
        </Table>
            <ModalCloseBtn className="modal-close-btn" onClick={() => setModalOpen1(false)}>
            x
            </ModalCloseBtn>
        </ModalContent>
        </ModalContainer>
    }
    {
    modalOpen2 &&
        <ModalContainer >
        <ModalOverlay onClick={() => setModalOpen2(false)}/>    
        <ModalContent>
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>병원이름</th>
              <th>예약자</th>
            </tr>
          </thead>
          <tbody>
            {popularhp && popularhp.length > 0 && popularhp.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.hp_name}</td>
                <td>{item.hp_review}</td>
              </tr>
            ))}
          </tbody>
        </Table>
            <ModalCloseBtn className="modal-close-btn" onClick={() => setModalOpen2(false)}>
            x
            </ModalCloseBtn>
        </ModalContent>
        </ModalContainer>
    }
    {
    modalOpen3 &&
        <ModalContainer>
        <ModalOverlay onClick={() => setModalOpen3(false)}/>    
        <ModalContent>
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>병원이름</th>
              <th>예약자</th>
            </tr>
          </thead>
          <tbody>
            {distancehp && distancehp.length > 0 && distancehp.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.hp_name}</td>
                <td>{item.distance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
            <ModalCloseBtn className="modal-close-btn" onClick={() => setModalOpen3(false)}>
            x
            </ModalCloseBtn>
        </ModalContent>
        </ModalContainer>
    } 
        <main>
              <section className="sc-section">
                    <div>
                      <Buttons>        
                          <li>
                              <button className="button" onClick={() => setModalOpen1(true)}>
                                <p>내가 가본 병원</p>
                              </button>  
                            </li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen2(true)}>
                                <p>가까운 병원</p>
                              </button>  
                            </li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen3(true)}>
                                <p>인기 병원</p>
                              </button>  
                            </li>          
                        </Buttons>
                    </div>
              </section>
          </main>
          <div className="scimage">
            <img className="scimage1"src={sc1} alt="sc"  />
            <img className="scimage2"src={sc2}  alt="sc"  />
            <img className="scimage1"src={sc1} alt="sc"  />
            <img className="scimage2"src={sc2}  alt="sc"  />
            <img className="scimage1"src={sc1} alt="sc"  />
            <img className="scimage2"src={sc2}  alt="sc"  />
            <img className="scimage1"src={sc1} alt="sc"  />
          </div>
          <Footer>
    <ul>
        <li><Link to='https://cocoder.tistory.com' target='_blank'>Blog</Link> </li>
        <li><Link to='https://github.com/hwang-jin-woo/' target='_blank'>Github</Link></li>
    </ul>
    <p>
        <span>저자 : 황진우</span><br/>
        <span>이메일 : hjinu91@naver.com</span><br/>
        <span>Copyright 2023. copy. All Rights Reserved.</span>
    </p>
</Footer>
    </Container>  
  </>
}