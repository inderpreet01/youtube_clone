import { Link } from "react-router-dom"
import { Typography,Card,CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constant";

const VideoCard = ({video :{id:{
  videoId },snippet}}) => {
  return (
    <Card>
      <Link to={videoId?`/video/${video}`}>
      <CardMedia image={snippet?.thumbnails?.high?.url}/>

      </Link>
    </Card>
  )
}

export default VideoCard
