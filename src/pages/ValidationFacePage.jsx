import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { isImageBlurred } from "../helpers/isImageBlurred";
import { Link } from "react-router-dom";
import * as faceapi from "face-api.js"; // <<< Agregamos face-api.js

const videoConstraints = {
  width: 1280,
  height: 720,
};

export const ValidationFacePage = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [facingMode, setFacingMode] = useState("user");
  const [deviceId, setDeviceId] = useState(null);
  const [devices, setDevices] = useState([]);
  const [isBlurred, setIsBlurred] = useState(false);

  const [faceCentered, setFaceCentered] = useState(false); // <<< NUEVO estado
  const [faceDetected, setFaceDetected] = useState(false); // <<< NUEVO estado

  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models"; // Asegúrate de que esté bien la ruta a tu carpeta de modelos
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      ]);
    };
    loadModels();
  }, []);

  useEffect(() => {
    if (deviceId) {
      const constraints = {
        ...videoConstraints,
        deviceId: { exact: deviceId },
      };

      if (
        webcamRef.current &&
        webcamRef.current.video &&
        webcamRef.current.video.srcObject
      ) {
        webcamRef.current.video.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }

      webcamRef.current?.video.srcObject
        ?.getTracks()
        .forEach((track) => track.stop());
      navigator.mediaDevices
        .getUserMedia({ video: constraints })
        .then((stream) => {
          webcamRef.current.video.srcObject = stream;
        });
    }
  }, [deviceId]);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    console.log(imageSrc);

    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      const blurred = isImageBlurred(img);
      setIsBlurred(blurred);
      console.log(isBlurred);
    };
  };

  const detectFaceCentered = async () => {
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video;
      const detections = await faceapi.detectSingleFace(
        video,
        new faceapi.TinyFaceDetectorOptions()
      );

      if (detections) {
        setFaceDetected(true);

        const { x, y, width, height } = detections.box;
        const faceCenterX = x + width / 2;
        const faceCenterY = y + height / 2;

        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        const canvasCenterX = videoWidth / 2;
        const canvasCenterY = videoHeight / 2;

        const thresholdX = videoWidth * 0.2; // 20% tolerancia
        const thresholdY = videoHeight * 0.2;

        const centeredX = Math.abs(faceCenterX - canvasCenterX) < thresholdX;
        const centeredY = Math.abs(faceCenterY - canvasCenterY) < thresholdY;

        setFaceCentered(centeredX && centeredY);
      } else {
        setFaceDetected(false);
        setFaceCentered(false);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      detectFaceCentered();
    }, 500); // cada 500ms revisa

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-white w-full p-20 md:p-0 font-montserrat">
      <div>
        <h4 className="text-xl font-semibold text-center mb-6">
          Enfoque su cara al centro del círculo
        </h4>
        <p className="text-center">
          Cuando enfoques tu cara correctamente presiona el botón "Tomar
          fotografía". 👀 Asegúrate de enfocar bien la cámara.
        </p>
      </div>

      <div className="w-full my-4"></div>

      <div>
        <div className="w-56 h-56 rounded-full overflow-hidden flex items-center justify-center ">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              ...videoConstraints,
              facingMode,
            }}
            className="w-full h-full object-cover"
          />
        </div>

        {!faceDetected && (
          <div className="text-red-500 mt-4 font-montserrat text-center">
            No se detectó ninguna cara.
          </div>
        )}

        {faceDetected && !faceCentered && (
          <div className="text-yellow-500 mt-4 font-montserrat text-center">
            Pon tu cara más al centro.
          </div>
        )}

        {isBlurred && (
          <div className="text-red-500 mt-4 font-montserrat text-center">
            La imagen está borrosa, por favor intenta de nuevo.
          </div>
        )}

        <div className="flex gap-2 py-5 items-center justify-center flex-col">
          <button
            className="bg-[#004851] hover:cursor-pointer text-white font-semibold py-2 px-2 rounded-full sm:text-lg text-md h-full w-full disabled:bg-[#004851]/60"
            onClick={() => {
              setFacingMode(facingMode === "user" ? "environment" : "user");
            }}
            disabled={imageSrc && !isBlurred}
          >
            Rotar cámara
          </button>

          <button
            className="bg-[#004851] hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-full flex sm:text-lg text-md h-full w-full justify-center disabled:bg-[#004851]/60"
            onClick={handleCapture}
            disabled={!faceCentered || (imageSrc && !isBlurred)} // <<< Bloquea si no está centrada
          >
            Tomar fotografía
          </button>

          {imageSrc && !isBlurred && (
            <>
              <p className="text-[#004851] font-semibold mt-5">
                ¡Captura realizada con éxito!
              </p>
              <img
                src={imageSrc}
                alt="captured"
                className="mt-2 h-56 w-56 rounded-full"
              />
            </>
          )}

          {imageSrc && !isBlurred && (
            <button
              className="bg-[#004851] my-5 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-full flex sm:text-lg text-md h-full w-full justify-center disabled:bg-[#004851]/60"
              disabled={isBlurred}
            >
              <Link to="/home">Siguiente</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
