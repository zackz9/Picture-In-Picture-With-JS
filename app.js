//Enjoy it !
const videoElem = document.getElementById('video')
const buttonElem = document.getElementById('button')

//Selecting media stream, and pass to the video element
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElem.srcObject = mediaStream
    videoElem.onloadeddata = () => {
      videoElem.play()
    }
  } catch (error) {
    console.log("Check Murphy's Law !!", error)
  }
}

buttonElem.addEventListener('click', async () => {
  // Disabling button
  buttonElem.disabled = true
  //Start P-i-P
  await videoElem.requestPictureInPicture()
  // Reseting button
  buttonElem.disabled = false
})

selectMediaStream()
