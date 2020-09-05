import React from 'react';
import axios from 'axios'
// Component는 next에서 제공되는 것임
// 랜더링 횟수줄ㅇ이기 목적
// app.js에서는 페이지에서 공통적인 부분을 모아줌.
// app.js에서 Props로 Component를 받음
// Componet로 index.js파일이면 저기에 index.js파일이 들어가는부분
// 지금 app.js + 해당 컴포넌트를 합친다.
axios.defaults.withCredentials = true
let refresh_token = '1//0ex6TBpzCgk2iCgYIARAAGA4SNwF-L9IrakdtWPC8i5ChC-heK3bTsgq4SviJmzfDLP_J79NlN3KG6BnJy_i4mm-n0z1Qa4xeaQ4'
let access_token = "ya29.a0AfH6SMDzypWh4v3I2lXtmai-8FFAJ09bNEwQivWwYq006jBTHYoAkUmBOq5D2wv_pcWoYtMfY73VQnFz2ikxj8T1w6W3uWWLI2l9N3fBl-S1pYwm2bZDIzoZ3hfSMLIvHag92flFqelPSi65weAe2b6LmaiGpVhFRr4"
let provider = 'google'
const Home = () => {
  const kakao = () => {
    // let url ="https://www.googleapis.com/oauth2/v4/token"
    // let body = {client_id: "192549111246-ji6meo3haqck4p6nq3l10hmhvkso45qb.apps.googleusercontent.com", 
    //             client_secret: "pEMK4G7kYYZlPIZj4M9IxYhq", refresh_token: "1//0eelSdiBvDiPgCgYIARAAGA4SNwF-L9IreokUSW3L2dANFM3gGSFWgBVW-noloIgC0hSFjVVSpD_tODawbcQEh-MyW8Nij5iIEx8", 
    //             grant_type: "refresh_token",
    //         }
    // axios.post(url, body)
    // .then(res => {console.log(res,'123123123')})
    // console.log(formData)
    // 'https://api.shortlysoftware.com
    axios.get('http://localhost:8000/user/test')
    .then(res => {console.log(res.data)})
  }

  const test = () => {
    axios.get('http://localhost:8000/user/test2')
    .then(res => {console.log(res.data)})
  }

  const test2 =  () => {
    axios.get('http://localhost:8000/user/userinfo')
    .then(res => {console.log(res.data)})
  }
  const test3 =  () => {
    axios.post('http://localhost:8000/user/logout')
    .then(res => {console.log(res.data)})
  }
  
  return (
    <>
      <h1>asdasdsad</h1>
      <form action="https://www.googleapis.com/oauth2/v4/token" method="post" encType="application/x-www-form-urlencoded"> 
        <input type="text" name="client_id" value="192549111246-ji6meo3haqck4p6nq3l10hmhvkso45qb.apps.googleusercontent.com"></input>
        <input type="text"name="client_secret"value="pEMK4G7kYYZlPIZj4M9IxYhq"></input>
        <input type="text"name="refresh_token"value="1//0eelSdiBvDiPgCgYIARAAGA4SNwF-L9IreokUSW3L2dANFM3gGSFWgBVW-noloIgC0hSFjVVSpD_tODawbcQEh-MyW8Nij5iIEx8"></input>
        <input type="text"name="grant_type"value="refresh_token"></input>
        <button type="submit">클릭</button>
      </form>
      <button onClick={kakao}>
        로그인
      </button >
      <button onClick={test}>
        회원가입
      </button>
      <button onClick={test2}>유저정보</button>
      <button onClick={test3}>로그아웃</button>
    </>
  )
};
export default Home

//고차함수는 기존함수에 기능을 더 추가하는 개념임.

// export default NodeBird;

// export default withRedux((initalState, options) => {
//   const middlewares = [];
//   const enhance = compose(
//     applyMiddleware(...middlewares),
//     typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__(): (f) => f,
//   )

//   const store = createStore(reducer, initalState, enhance);
//   return store;
// })(NodeBird)
