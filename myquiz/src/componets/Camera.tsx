import React, { useRef, useEffect, useState, useCallback } from 'react';

interface CameraComponentProps {
  onCapture: (imageSrc: string) => void;
}

const Camera: React.FC<CameraComponentProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing the camera', error);
    }
  };

  useEffect(() => {
    startVideo();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const captureImage = useCallback(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageSrc = canvas.toDataURL('image/png');
        onCapture(imageSrc);
      }
    }
  }, [onCapture]);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline></video>
      <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480"></canvas>
      <button onClick={captureImage}>Capture</button>
    </div>
  );
};

export default Camera;
