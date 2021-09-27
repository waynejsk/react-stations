// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const fetchRandomUrl = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    return res.json()
  }

  const handleOnClick = () => {
    fetchRandomUrl().then(data => {
      setDogUrl(data.message)
    })
  }

  return (
    <div>
      <header>
        <h1>Dog App</h1>
      </header>
      <main className="content_wrapper">
        <div className="content_container">
          <div className="description">
            <p>犬の画像を表示するサイトです</p>
          </div>
          <div className="img_wrapper">
            <img src={dogUrl} alt="dog" className="img" />
            <div className="button_container">
              <button onClick={handleOnClick}>更新</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
