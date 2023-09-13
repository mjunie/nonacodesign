import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex bg-brown_clair-2 min-h-screen w-full">
        <div className="flex flex-col bg-brown_clair-1 w-full m-12 flex-row justify-self-center items-center pl-12 pr-12 pt-6 pb-6">
          <div className="flex h-1/6 w-full flex-row  items-start space-x-72 justify-center  pt-4">
            <div className="flex text-3xl ">
              Nonaco
            </div>
            <div className="flex space-x-8">
              <h5>Home</h5>
              <h5>Service</h5>
              <h5>About</h5>
              <h5>Blog</h5>
            </div>
            <div className="flex bg-black rounded-full h-8 w-8 text-slate-50 items-center justify-center">
              N
            </div>
          </div>
          <div className="flex h-4/5 w-full flex-col justify-center items-start">

          <div className="flex  flex-row items-center space-x-48">
              <img src="https://images2.9c9media.com/image_asset/2021_5_18_09a34bef-2cda-402b-9867-74bf1bb2b2e3_jpg_1920x1080.jpg" 
              alt="" className="flex h-40 w-48 bg-brown_clair-3 " />
            </div>
            <div className="flex  flex-row items-center space-x-48">
              <div className="flex flex-col  mt-8 ">
                <h1 className="flex ml-32">We use prenium products for a more </h1>
                <h1 className="flex ml-32" >natural resultat</h1>
                <div className="flex mt-12  items-center">
                  <img src="https://avatars.mds.yandex.net/get-marketcms/1357599/img-3a1a8c35-ab78-4485-a55f-e618f4a1eb79.jpeg/optimize" alt="" 
                  className="flex bg-brown_clair-4 h-24 w-60" />
                  <div className="flex bg-brown_clair-2 h-24 w-24 rounded-full ml-12"></div>
                </div>
              </div>
              <div className="flex bg-brown_clair-2 h-64 w-64  ml-32">
                <img src="https://www.marionnaud.fr/medias/Micro-serum-de-rose-yeux-advanced-102171370.jpg?context=bWFzdGVyfGxhc3QvZXh0cmF6b29tfDU5MjQ5NXxpbWFnZS9qcGVnfGxhc3QvZXh0cmF6b29tL2hmYi9oMzUvMTEzMDk3NjM0MjgzODIuanBnfGFlYzc3MWI4Y2M4Y2YyOGExNDllYWEwMzk4MGQyNWQ0MDU3ODdlODlhYzczNDFmMzc5MWYxZDk0ZWJiYjQ4OGM" alt="" className="flex " />
              </div>
            </div>
            <div className="flex">
              <div className="flex">
               <p>hello everyone kiss</p>
               <h2>Proper use of skincare</h2>
               <p>Mail : Contact.niizam@gmail.com

Skype : live:mdnizamuddin915

WhatsApp: +8801776787395

Telegram: @niizamuddin (+8801776787395)</p>
              </div>
              <div className="flex"></div>

            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
