const audio = new Audio('./hbd.mp3');
audio.preload = 'auto';

audio.addEventListener('error', (e) => {
  console.log('Audio error:', audio.error);
  console.log('Network state:', audio.networkState);
  console.log('Ready state:', audio.readyState);
});

audio.play().catch((err) => {
  console.error('Playback failed:', err);
});