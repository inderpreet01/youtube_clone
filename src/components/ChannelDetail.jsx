import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import {Videos,ChanneCard} from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
  const [channelDetail,setChannelDetail]=useState(null)
  const{id}=useParams();
  // console.log(channelDetail)
  useEffect(()=>{
    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items )) 
    fetchFromAPI(`channel?part="snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items )) 
  },[id])
  return (
    <Box>
      
    </Box>
  )
}

export default ChannelDetail
