import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
  const INIT_URL ="https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
  const HOT_URL ="https://images.unsplash.com/photo-1483446169163-1bc8ee2d7b1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1610492543862-bc5adad59212?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL ="https://plus.unsplash.com/premium_photo-1687418992343-38c7d2751406?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
      
          <div className="InfoBox">
          
          <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image = {
                    info.humidity>80 
                    ? RAIN_URL : info.temp > 22
                    ? HOT_URL 
                    : COLD_URL }
               />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                        {info.city}  {
                    info.humidity>80 
                    ? <ThunderstormIcon/> 
                      : info.temp > 22 
                    ? <SunnyIcon />
                    : <AcUnitIcon/> }
                  </Typography>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

                    
                 </Typography>
               </CardContent>
            </Card>
          </div>
        
        </div>
    )
}