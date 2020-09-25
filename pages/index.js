
import axios from 'axios'
import React, { useState } from 'react'
import Dropzone from 'react-dropzone' // 해당부분 클릭시 사진 업로드 되는 모듈
import { PlusOutlined } from '@ant-design/icons'; // + 아이콘
import useInput from '../hooks/userInput'
axios.defaults.baseURL = 'http://localhost:4001';
axios.defaults.withCredentials = true

let refresh_token = '1//0ex6TBpzCgk2iCgYIARAAGA4SNwF-L9IrakdtWPC8i5ChC-heK3bTsgq4SviJmzfDLP_J79NlN3KG6BnJy_i4mm-n0z1Qa4xeaQ4'
let access_token = "EAAEcZCIvSiTsBAO1YPUNaiV70kOSK2BvmDTxJMnHw8Y1PkyvHAOx0HwuvJefS7DBnZAZAC08DYU4RroDxZAgX4rujn4UZCe5f54C14myWZAZBXZCOvVZATh550EsPtAubHL5tiBLAxJf0FkkfybRnniuXr1tQpqjxPbo1Bm6Hx7eVIAZDZD'"
let provider = 'google'
let arr = [
  {order: 2, title:'213123123123', link_url: 'www.sssss.com', display: true, url_type:'gggg', state:true ,id: 1 },
  {order: 3, title:'213123123123', link_url: 'www.sssss.com', display: true, url_type:'gggg', state:true ,id: 2},
  {order: 1, title:'213123123123', link_url: 'www.sssss.com', display: true, url_type:'gggg', state:true , id: 3}
]
const Home = () => {

  const [Images, setImages] = useState([])
  const [data, setData] = useState('')
  const [input, onChageInput] = useInput('')
  const [error, onError] = useState('')
  const [tests, setTests] = useState('')


  const dropHandler = (files) => {

      let formData = new FormData();
      // 이미지 전송시 헤더값 multipart/fomr-data 이어야함
      const config = {
          header: { 'content-type': 'multipart/form-data' }
      }
      formData.append("file", files[0])
      formData.append('data', JSON.stringify({url: 'dddd', test:'test'}))
      axios.post('/api/save/image/', formData, config)
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

  
  const testFocus = () => {
    console.log(input)
    // setInterval(() => {
    //   if(input.value.length === 0) {
    //     console.log(input.value.length,'123123123123')
    //     onError('사용자이름을 입력하세요')
    //   }
    //   else if(input.length !== 0) {
    //     clearInterval()
    //   }
      // console.log('asdsadasdas',input.length)
      // if(input.length === 0) {
      //   console.log('실헹')
      //   onError('사용자이름을 입력하세요')
      // }
    // },1000)
  }


  const deleteHandler = (image) => {
      const currentImg = Images.indexOf(image); // 해당이미지가 어디에 있는지 추출
      console.log(currentImg)
      let newImages = [...Images] // 복사
      newImages.splice(currentImg, 1) // 해당하는 것만 잘라내기
      setImages(newImages)// 스테이트 업데이트
      props.updateImages(newImages) // 부모 컴포넌트 Image state업데이트
  }
  const deleteImage = () => {
    axios.patch('/user/delete/profile')
    .then((res) => {
      if(res.data.success) {
        console.log('여기')
        setImages([]);
      }
    })
    
  }

  const kakao = () => {
    axios.post('/user/logout')
      .then(res => { console.log(res.data) })
  }

  const test = () => {
    axios.post('/user/test2',{landingPath: '/harrycod'})
    .then(res => {console.log(res.data)})
  }

    const test2 =  () => {
      axios.post('/user/facebook/signup',{access_token:access_token, provider: 'facebook', url: 'url'})
      .then(res => {console.log(res.data)})
    }
    const test3 =  () => {
      axios.post('/user/facebook/login', {access_token:access_token, provider: 'facebook'})
      .then(res => {console.log(res.data)})
    }
  const test4 = () => {
    axios.post('/links/edit/')
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  
  }
  const test5 = () => {
    axios.post('/links/add',{order: 4, title:'nnn', link_url: 'www.nnn.com', display: true, url_type:'nnnn', id: 5})
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }

  const test6 = () => {
    axios.patch('/links/delete',{order: 3, title:'213123123123', link_url: 'www.sssss.com', display: true, url_type:'gggg', state:true })
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }


  const test7 = () => {
    axios.post('/links/weekly/link/tracking',{landingPath: '/master', sort:"2020-09-10", link: "https://blog.naver.com/dnql1230"})
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }

  const test8 = () => {
    axios.patch('/links/relocate',arr)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }

  const test9 = () => {
    axios.post('/user/modify/landing/url',{landing_url: 'www.wwwddd'})
    .then(res => {
      console.log(res.data)
    })
  }

  const test10 = () => {
    axios.post('/links/send/landing/url',{url_path: 'harrycod'})
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }

  const test11 = () => {
    axios.delete('/user/secession')
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }
  const test12 = () => {
    axios.post('/user/check/url',{landingUrl: 'url'})
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }

  const test13 = () => {
    axios.get('/api/get')
    .then(res => {
      console.log(res.data)
      setTests(res.data.imgae)
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
        <input type="text" name="refresh_token" value="1//0eFE3WA6jmYgHCgYIARAAGA4SNwF-L9IrtRsdhkcZwW7YfSog0bU4Z6TXhmzNVLeS5EpeXCcZW4JeRc5-yisS8TEbigz7tyFZ7gA"></input>
        <input type="text" name="grant_type" value="refresh_token"></input>
        <button type="submit">클릭</button>
      </form>
      <button onClick={test3}>
          페북로그인
      </button>
      <button onClick={kakao}>
        로그아웃
      </button >
      <button onClick={test5}>
        addLink
      </button>
      <button onClick={test8}>
        relocate
      </button>
      <button onClick={test6}>delete</button>
      <button onClick={test7}>get</button>
      <button onClick={test2}>회원가입</button>
      <button onClick={test9}>cookie</button>
      <button onClick={test10}>send url</button>
      <button onClick={test11}>회원탈퇴</button>
      <button onClick={test12}>중복체크</button>
      <button onClick={test}>test</button>
      <button onClick={test13}>dlalwlaldlsdd</button>
      <br></br>
      <br></br>
      <input value={input} onChange={onChageInput} onFocus={testFocus}></input>
      <button disabled="false">저장</button>
        {error.length === 0 ? null : <div>{error}</div>}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
      {tests.length === 0 ? null :
        <img src={tests}></img>
      }
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
