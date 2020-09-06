
import axios from 'axios'
import React, { useState } from 'react'
import Dropzone from 'react-dropzone' // 해당부분 클릭시 사진 업로드 되는 모듈
import { PlusOutlined } from '@ant-design/icons'; // + 아이콘

axios.defaults.baseURL = 'https://api.shortlysoftware.com';
axios.defaults.withCredentials = true
let refresh_token = '1//0ex6TBpzCgk2iCgYIARAAGA4SNwF-L9IrakdtWPC8i5ChC-heK3bTsgq4SviJmzfDLP_J79NlN3KG6BnJy_i4mm-n0z1Qa4xeaQ4'
let access_token = "ya29.a0AfH6SMDzypWh4v3I2lXtmai-8FFAJ09bNEwQivWwYq006jBTHYoAkUmBOq5D2wv_pcWoYtMfY73VQnFz2ikxj8T1w6W3uWWLI2l9N3fBl-S1pYwm2bZDIzoZ3hfSMLIvHag92flFqelPSi65weAe2b6LmaiGpVhFRr4"
let provider = 'google'
const Home = () => {

  const [Images, setImages] = useState([])
  const [data, setData] = useState('')
  const dropHandler = (files) => {

      let formData = new FormData();
      // 이미지 전송시 헤더값 multipart/fomr-data 이어야함
      const config = {
          header: { 'content-type': 'multipart/form-data' }
      }
      formData.append("file", files[0])

      axios.post('/user/save/image', formData, config)
          .then(response => {
              console.log(response.data);
              if (response.data.success) {
                  console.log(Images);
                  // 성공적으로 응답이 왔으면 기존이미지에 추가
                  setImages([...Images, response.data.fileName])
                  // props.updateImages([...Images, response.data.fileName]) // // 부모 컴포넌트 Image state업데이트

              } else {
                  alert('파일을 저장하는데 실패했습니다.')
              }
          })
  }
  // 해당이미지 클릭시 이미지 지워주는 메소드
  const deleteHandler = (image) => {
      const currentImg = Images.indexOf(image); // 해당이미지가 어디에 있는지 추출
      console.log(currentImg)
      let newImages = [...Images] // 복사
      newImages.splice(currentImg, 1) // 해당하는 것만 잘라내기
      setImages(newImages)// 스테이트 업데이트
      props.updateImages(newImages) // 부모 컴포넌트 Image state업데이트
  }

  const kakao = () => {
    axios.get('/user/test')
      .then(res => { console.log(res.data) })
  }

  const test = () => {
    axios.post('/user/test2')
    .then(res => {console.log(res.data)})
  }

    const test2 =  () => {
      axios.post('/user/facebook/login',{access_token:access_token, provider: 'facebook'})
      .then(res => {console.log(res.data)})
    }
    const test3 =  () => {
      axios.post('/user/facebook/signup', {access_token:access_token, provider: 'facebook', url:'facebook.com'})
      .then(res => {console.log(res.data)})
    }
  const test4 = () => {
    axios.get('http://localhost:8000/api/get/')
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }

  return (
    <>
      {data.length === 0 ? null : 
      <img src={data}></img>
      }
      <h1>asdasdsad</h1>
      <form action="https://www.googleapis.com/oauth2/v4/token" method="post" encType="application/x-www-form-urlencoded">
        <input type="text" name="client_id" value="192549111246-ji6meo3haqck4p6nq3l10hmhvkso45qb.apps.googleusercontent.com"></input>
        <input type="text" name="client_secret" value="pEMK4G7kYYZlPIZj4M9IxYhq"></input>
        <input type="text" name="refresh_token" value="1//0eelSdiBvDiPgCgYIARAAGA4SNwF-L9IreokUSW3L2dANFM3gGSFWgBVW-noloIgC0hSFjVVSpD_tODawbcQEh-MyW8Nij5iIEx8"></input>
        <input type="text" name="grant_type" value="refresh_token"></input>
        <button type="submit">클릭</button>
      </form>
      <button onClick={test4}>
          확인
      </button>
      <button onClick={kakao}>
        로그인
      </button >
      <button onClick={test}>
        회원가입
      </button>
      <button onClick={test2}>유저정보</button>
      <button onClick={test4}>로그아웃</button>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: 300, height: 240, border: '1px solid lightgray',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            {...getRootProps()}>
            <input {...getInputProps()} />
            <PlusOutlined type="plus" style={{ fontSize: '3rem' }} />
          </div>
        )}
      </Dropzone>
      <div style={{ display: "flex", width: '350px', height: '240px', overflowX: 'scroll', position: 'relative', left: '10px' }}>
        {/* 현재 Image 스테이트에 있는 값들을 img태그를 이용하여 구현 // src에 있는부분은 서버주소이어야함 */}
        {Images.map((image, index) => (
          <div key={image + index} onClick={() => deleteHandler(image)}>
            <img style={{ minWidth: '300px', width: '300px', height: '240px' }}
              src={`${image}`} alt="profile"
            />
          </div>
        ))}
      </div>
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
