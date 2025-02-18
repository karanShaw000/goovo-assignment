function getVideoDuration(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function() {
      // const blob = new Blob([e.target.result], { type: file.type });
      const url = URL.createObjectURL(file);
      const video = document.createElement('video');
      video.onloadedmetadata = function() {
        URL.revokeObjectURL(url);
        resolve(video.duration);
      };
      video.onerror = reject;
      video.src = url;
    };
    reader.readAsArrayBuffer(file);
  });
}

export default getVideoDuration
