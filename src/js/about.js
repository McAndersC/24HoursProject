const about = {}

about.init = () => {
    let videoPlayer = document.querySelector('#video-player');

    if(videoPlayer)
    {
        let isPlaying = false;
        
        videoPlayer.addEventListener('click', () => {
            if(!isPlaying) {
              
                videoPlayer.play();

            } else {

                videoPlayer.pause();
            
            }
    
            isPlaying = !isPlaying;
        })
    }
}


export default about