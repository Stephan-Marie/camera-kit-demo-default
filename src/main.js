import { bootstrapCameraKit, createMediaStreamSource, Transform2D, } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({ 
    apiToken: '' });

const liveRenderTarget = document.getElementById('canvas').replaceWith(session.output.live);

const session = await cameraKit.createSession({ liveRenderTarget })

const {lenses} = await cameraKit.lensRepository.loadLensGroups([''])

await session.applyLens(lenses[3])

const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: true
});

const source = createMediaStreamSource(mediaStream, {
  transform: Transform2D.MirrorX,
  facingMode: 'user'
})

await session.setSource(source);

//source.setRenderSize(window.innerWidth, window.innerHeight)

session.play();

//const lens = await cameraKit.lensRepository.loadLens(
//  '50507980875',
//  '7fa3fa7c-e626-4539-b9db-73cdb0b0b2ce'
//);

//await session.applyLens(lens);

})();