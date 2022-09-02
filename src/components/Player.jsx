import React from 'react'
import { useState } from 'react'
import {
    IoPlayCircle,
    IoPlaySkipForward,
    IoPlaySkipBack,
    IoVolumeHigh,
    IoVolumeMute,
    IoShuffle,
    IoRepeat,
    IoPauseCircle,
    IoVolumeMedium,
    IoVolumeLow,
}from "react-icons/io5"
import 
{
    Container,
    Row,
    Col
} from "react-bootstrap"
import Music from './Music'
import  AudioUrl from "../audio/LePapara ft KIKO- WINNER prod by Tha Vicious (clip by Studio CAURIS) (online-audio-converter.com).mp3"
import { useEffect } from 'react'
import moment from 'moment'
const Player = () => {
    const [Img, setImg] = useState("https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80");
    const [audioUrl, setAudioUrl] = useState("");
    const getAudio = document.querySelector("#audio-file");
    const [isPause, setisPause] = useState(true);
    const [progressWidth, setprogressWidth] = useState(
        '0%'
    );
    const [isMute, setIsMute] = useState(false);
    const [audioDuration, setaudioDuration] = useState('00:00');
    const [VolumeVal, setVolumeVal] = useState("100%");
    function setMutes(){
        if(isMute){
            setIsMute(false)
            getAudio.muted = false;
        }else{
            setIsMute(true)
            getAudio.muted = true;
        }
    }
    function doPlay(img,AudioUrl){
        setAudioUrl(AudioUrl)
        setisPause(false);
        setImg(img)
    }
    function Pause(){
        setisPause(true);
        getAudio.pause()
    }
    function Play(){
        setisPause(false);
        getAudio.play()
    }
    const Scrub = (e) => {
        const scrubTime = (e.nativeEvent.offsetX / parseInt(document.querySelector('.progress-bar').offsetWidth)) * getAudio.duration;
        getAudio.currentTime = scrubTime
    }
    const SetVolume = (e) => {
        const vol = (e.nativeEvent.offsetX / parseInt(document.querySelector('#progressBar').offsetWidth));
        setVolumeVal(vol*100+"%")
        getAudio.volume = vol
    }
    useEffect(() => {
        (()=>{
            window.addEventListener("keyup",(e)=>{
                if(e.code ==="Space"){
                    if(isPause){
                        setisPause(false);
                        getAudio.play()
                    }else {
                        setisPause(true);
                        getAudio.pause()
                    }
                }
            })
            
            if(!isPause){
                
                getAudio.addEventListener('timeupdate', () => {
                    const progressTime = getAudio.currentTime / getAudio.duration;
                    setprogressWidth(progressTime * 100 + '%')
            
                    // if (progress.style.width > '1.6%') {
                    //     progress.style.display = 'block'
                    // }
                })
                setTimeout(()=>{
                    setaudioDuration(String(moment(getAudio.duration*1000).format("HH:mm:ss")).substring(3,8))
                },500)
            }
            // getAudio.addEventListener()
        })()
    }, [getAudio, isPause]);
  return (
    <Container className='player mt-5' style={{
        backgroundImage:`url(${Img})`
    }}>
        <Row>
            <Col lg={4} className="list-music">
                <h3 className='p-3'>
                    Music
                </h3>
                <div className="musics p-3 overflow-auto">
                    <Music banner="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" onPlay={()=>{
                        doPlay("https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",AudioUrl)
                    }}/>
                    <Music banner="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" onPlay={()=>{
                        doPlay("https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")
                    }}/>
                    <Music banner="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" onPlay={()=>{
                        doPlay("https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
                    }}/>
                    
                </div>
            </Col>
            <Col lg={8} className="playing">
                <div className="playing-header text-center">
                    <h4>Artiste name</h4>
                    <small>Annnnnnnnn</small>
                </div>
                <div className="playing-banner">
                    <img src={Img} alt="banner" />
                </div>
                <div className="playing-control">
                    <div className="timer">
                    <small>{audioDuration}</small>
                    <small>00:00</small>
                    </div>
                    <div className="progress-bar" onClick={Scrub}>
                        <div className="progress" style={{
                            width:progressWidth
                        }}></div>
                    </div>
                    
                    <div className="control-btn">
                        <audio id='audio-file'  autoPlay src={audioUrl} hidden></audio>
                       <div className="status">
                        <IoRepeat className='icon' size={30}/>
                        <IoShuffle className='icon' size={30}/>
                       </div>
                        <div className="player-btn">
                            <IoPlaySkipBack className='icon' size={30}/>
                            
                           
                           {isPause?<IoPlayCircle className='icon' onClick={Play} size={30}/> :<IoPauseCircle className='icon' onClick={Pause} size={30}/>}
                            <IoPlaySkipForward className='icon' size={30}/>
                        </div>
                        <div className='volume'>
                            {isMute?<IoVolumeMute size={30} onClick={setMutes}/>:VolumeVal>="70%" ?<IoVolumeHigh size={30} onClick={setMutes}/>:VolumeVal <="20%"||VolumeVal<="10%" ? <IoVolumeLow size={30} onClick={setMutes}/>:<IoVolumeMedium size={30} onClick={setMutes}/>}
                            <span class="volumeScaleHolder">
                            <span id="progressBar" onClick={SetVolume}>
                                <span id="myVolume" style={{
                                    width:VolumeVal
                                }}></span>
                            </span>
                            </span>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Player
