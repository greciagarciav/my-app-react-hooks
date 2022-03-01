import React, {useState, useEffect} from 'react';

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
}

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({x:null, y: null})
  const [status, setStatus] = useState(navigator.onLine)
  const [{latitude, longitude, speed}, setLocation] = useState(initialLocationState)
  let mounted = true;

  useEffect(()=>{
    document.title = `You have clicked ${count} times`
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    navigator.geolocation.getCurrentPosition(handleGeolocation)
    const watchId = navigator.geolocation.watchPosition(handleGeolocation)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      navigator.geolocation.clearWatch(watchId)
      mounted = false
    }
  }, [count]);

  const handleGeolocation = event => {
    if(mounted){
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      })
    }
  }

  const handleOnline = () => {
    setStatus(true)
  }

  const handleOffline = () => {
    setStatus(false)
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1 );
  }

  const toggleLight = () =>{
    setIsOn(prevIsOn=> !prevIsOn);
  }

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={incrementCount}>Clicked {count} times</button>
      <h2>Toggle Light</h2>
      <img  src={
              isOn 
                  ? 'https://static.thenounproject.com/png/16966-200.png' 
                  : 'https://mpng.subpng.com/20191012/foh/transparent-idea-icon-seo-icon-lightbulb-icon-5da1bd4d12a1d0.3939065915708808450763.jpg'
            }
            alt="Bulb"
        onClick={toggleLight} 
        style={{width:"50px", height:"50px"}}
      />
      <h2>Mouse position</h2>
      { JSON.stringify(mousePosition, null, 2)}<br/>
      <h2>Network status</h2>
      <p>You are <strong>{status ? "online" : "offline"}</strong></p>
      <h2>Geolocation</h2>
      <p>Latitude is {latitude}</p>
      <p>Longitude is {longitude}</p>
      <p>Speed is {speed?speed:"0"}</p>
    </div>
    
  );
}

export default App;
