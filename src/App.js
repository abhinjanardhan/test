import { useState } from 'react'
import './App.css';

function App() {
  const [previews, setPreviews] = useState([]);

  function ImagePreview(e) {
    const image = e.target.files[0]
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {

        var newPreviews = [...previews]
        newPreviews.push(reader.result)
        setPreviews(newPreviews);
      }
      reader.readAsDataURL(image)
    }
  }

  return (
    <div className="App">
      <div className="form">
        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          {
            previews[0] ? <img src={previews[0]} style={{
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
          <input type="file" name="transcript" />
        </label>

        <label className="file-upload">
          create audio
         
        </label>

        <label className="file-upload">
          Merge image+audio
     
        </label>

        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          
               <h3 style={{
                textAlign: 'center',
              }} >Created</h3>
          <h4>video</h4>
        </div>
      </div >


      <div className="form">
        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          {
            previews[1] ? <img src={previews[1]} style={{
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
               

        </label>

        <label className="file-upload">
          Merge image+audio
    
        </label>
        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          
               <h3 style={{
                textAlign: 'center',
              }} >Created</h3>
          <h4>video</h4>
        </div>
      </div >


      <div className="form">
        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
          {
            previews[2] ? <img src={previews[2]} style={{
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
              

        </label>

        <label className="file-upload">
          Merge image+audio
      <input type="file" name="image" />
        </label>
        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
           <h3 style={{
                textAlign: 'center',
              }} >Created</h3>
          <h4>video</h4>
        </div>
      </div >

      <div className="form">

        <label className="file-upload">
          Merge All
     
        </label>

        <div style={{
          border: '2px solid black', width: '200px', height: '150px', color: 'black', backgroundColor: 'lightblue', borderRadius: '15px'
        }}>
           <h3 style={{
                textAlign: 'center',
              }} >Created</h3>
          <h4>video</h4>
        </div>
      </div >

    </div >

  );
}
export default App;