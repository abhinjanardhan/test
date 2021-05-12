import { useState } from 'react'
import './App.css';
function App() {
  const [preview, setPreview] = useState(null);
  function ImagePreview(e) {
    const image = e.target.files[0]
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      }
      reader.readAsDataURL(image)
    }
    else {
      setPreview(null);
    }
  }
  return (
    <div className="App">
      <div className="form">
        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          {
            preview ? <img src={preview} style={{
              width: '100%', height: '100%', objectFit: 'contain'
            }} />
              : <h3 style={{
                textAlign: 'center',
              }} > image</h3>}


          <h4>preview</h4>

        </div>

        <label className="file-upload">
          Upload image
                  <input type="file" name="image" onChange={ImagePreview} />
        </label>

        <label className="file-upload">
          Upload Transcript
      <input type="file" name="image" />
        </label>

        <label className="file-upload">


          create audio
                < input type="file" name="image" />

        </label>

        <label className="file-upload">
          Merge image+audio
      <input type="file" name="image" />
        </label>

        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          {
            preview ? <img style={{
              width: '100%', height: '100%', objectFit: 'contain'
            }} />
              : <h3 style={{
                textAlign: 'center',
              }} >Created</h3>}
          <h4>video</h4>
        </div>
      </div >
      <div className="form">
        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          {
            preview ? <img src={preview} style={{
              width: '100%', height: '100%', objectFit: 'contain'
            }} />
              : <h3 style={{
                textAlign: 'center',
              }} > image</h3>}
          <h4>preview</h4>
        </div>
        <label className="file-upload">
          Upload image
                  <input type="file" name="image" onChange={ImagePreview} />
        </label>

        <label className="file-upload">
          Upload Transcript
      <input type="file" name="image" />
        </label>

        <label className="file-upload">


          create audio
                < input type="file" name="image" />

        </label>

        <label className="file-upload">
          Merge image+audio
      <input type="file" name="image" />
        </label>
        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          {
            preview ? <img src={preview} style={{
              width: '100%', height: '100%', objectFit: 'contain'
            }} />
              : <h3 style={{
                textAlign: 'center',
              }} >Created</h3>}
          <h4>video</h4>
        </div>
      </div >
      <div className="form">
        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          {
            preview ? <img src={preview} style={{
              width: '100%', height: '100%', objectFit: 'contain'
            }} />
              : <h3 style={{
                textAlign: 'center',
              }} >image</h3>}
          <h4>preview</h4>
        </div>
        <label className="file-upload">
          Upload image
                  <input type="file" name="image" onChange={ImagePreview} />
        </label>

        <label className="file-upload">
          Upload Transcript
      <input type="file" name="image" />
        </label>

        <label className="file-upload">


          create audio
                < input type="file" name="image" />

        </label>

        <label className="file-upload">
          Merge image+audio
      <input type="file" name="image" />
        </label>
        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          {
            preview ? <img src={preview} style={{
              width: '100%', height: '100%', objectFit: 'contain'
            }} />
              : <h3 style={{
                textAlign: 'center',
              }} >Created</h3>}
          <h4>video</h4>
        </div>
      </div >



    </div >

  );
}


export default App;
