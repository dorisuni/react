/* eslint-disable */
import './App.css';
import React,{useState} from 'react';


function App() {

  let [title,setTitle] = useState(['남자 코트 추천','강남 우동 맛집','인천 데이트 명소','여자 코트 추천'])
  let posts = '강남 고기 맛집';
  let [like,setLike] = useState(0);

  const changeState = (e) => {
    setTitle((prevState)=>{
      console.log('등록하기 전 title값',prevState)
      return ['여자 코트 추천',...prevState]
    });
  }

  function changeState1(){
    let newArray = [...title];
    newArray[0] = '여자 코트 추천';
    setTitle( newArray );
  }
 

  return (
    <div className="App">
      <div className='black-nav'>
          <div>개발 blog</div>
      </div>
      <div className='List'>
        <button onClick={changeState1}>버튼</button>
        <h3> {title[0]} <span onClick={()=>{setLike(like + 1)}}>❤</span>{like}</h3>
        <p>10월11일 발행</p>
        <hr/>
      </div>
      <div className='List'>
        <h3> {title[1]}</h3>
        <p>10월12일 발행</p>
        <hr/>
      </div>
      <div className='List'>
        <h3> {title[2]}</h3>
        <p>10월13일 발행</p>
        <hr/>
      </div>

      <Modal/>
      

    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
          <h2>제목</h2>
          <p>내용</p>
          <p>상세내용</p>
        </div>
        )}

export default App;
