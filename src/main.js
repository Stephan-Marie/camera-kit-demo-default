import { bootstrapCameraKit, createMediaStreamSource, Transform2D, } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({ 
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzE2ODE2ODQ2LCJzdWIiOiIzZmUzYzEyMy1lODdlLTQzNjEtODYwMi1jODkxMzNlYzMyOWN-U1RBR0lOR34wOThhY2U3MS01OWQ0LTQ2NzUtYjk0MS04YjUyMmRiMjJiZGEifQ.Vndej82iEI6kjWKSS9dG1gnoRbjVzBYq32vwq_NLV8o' });

const liveRenderTarget = document.getElementById('canvas').replaceWith(session.output.live);

const session = await cameraKit.createSession({ liveRenderTarget })

const {lenses} = await cameraKit.lensRepository.loadLensGroups(['7fa3fa7c-e626-4539-b9db-73cdb0b0b2ce'])

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