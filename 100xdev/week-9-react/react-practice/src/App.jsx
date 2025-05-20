

function App() {
  

  return (

    <div style={{background:"#b2bec3", height: "100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
        </div>
      </div>
      
    </div>
  )
}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20}

function PostComponent() {
  return <div style={style}>
    <div style={{display:"flex"}}>
    <img src={"https://media.licdn.com/dms/image/v2/D4D03AQHsPUSRQ67uXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690229319551?e=1744848000&v=beta&t=SftR_HEpZZSlzfPegNxMY72QvG1kBG9-O5neja65ZV0"} style={{
      width:30,
      height:30,
      borderRadius: 20
    }} />
    <div style={{fontSize:10, marginLeft:10}}>
      <b>
        Muhammad Nadeem
      </b>
      <div>23,456 followers</div>
      <div>12 minutes</div>
      
    </div>
  </div>
  <div>
    I'm excited to share .....
    </div>
  </div>
}


export default App
