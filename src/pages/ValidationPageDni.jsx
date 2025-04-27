import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { isImageBlurred } from "../helpers/isImageBlurred";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startUploadingDniFrontFiles } from "../store/validation/thunks";
import { base64ToBlob } from "../helpers/base64toBlob";

const videoConstraints = {
  width: 1280,
  height: 720,
};

export const ValidationPageDni = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [facingMode, setFacingMode] = useState("user");
  const [deviceId, setDeviceId] = useState(null);
  const [devices, setDevices] = useState([]);
  const [isBlurred, setIsBlurred] = useState(null);

  const dispatch = useDispatch();
  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

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

    // Crear un elemento img a partir del src
    const img = new Image();
    img.src = imageSrc;
    const blob = base64ToBlob(img.src, "image/png");

    // Cuando la imagen se haya cargado, evaluar si está borrosa
    img.onload = () => {
      const blurred = isImageBlurred(img);
      setIsBlurred(blurred);
      console.log("Blurred" + isBlurred);
    };

    if (!isBlurred && imageSrc) {
      dispatch(startUploadingDniFrontFiles(blob));
    }
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-white w-full p-20 md:p-0 font-montserrat">
      <div>
        <h4 className="text-xl font-semibold  text-center mb-6">
          Enfoca la cara delantera de tu DNI
        </h4>
        <p className="text-center">
          Cuando enfoques tu dni correctamente has click en el boton "Tomar
          fotografía", 👀 asegurate de enfocar bien la cámara.
        </p>
      </div>
      <div className="w-full my-4"></div>
      <div>
        {/* <div className="text-white my-4">
          <select
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            className="bg-[#004851] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {devices.map((device, key) => (
              <option key={key} value={device.deviceId}>
                {device.label || `Device ${key + 1}`}
              </option>
            ))}
          </select>
        </div> */}
        {
          <Webcam
            ref={webcamRef}
            audio={false}
            height={360}
            screenshotFormat="image/jpeg"
            width={720}
            videoConstraints={{
              ...videoConstraints,
              facingMode,
            }}
            className="rounded-md"
          />
        }
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
            className="bg-[#004851] hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-full flex sm:text-lg text-mg h-full w-full  justify-center disabled:bg-[#004851]/60"
            onClick={handleCapture}
            disabled={imageSrc && !isBlurred}
          >
            Tomar fotografía
          </button>

          {/* {imageSrc && (
            <button
              className="bg-[#004851] hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-full flex w-full sm:text-lg text-xs h-full justify-center"
              onClick={() => {
                setImageSrc(null);
              }}
            >
              Clear
            </button>
          )} */}
          {imageSrc && !isBlurred && (
            <>
              <p className="text-[#004851] font-semibold mt-5">
                Captura realizada con exito!!
              </p>
              <img src={imageSrc} alt="captured" className="mt-2" />
            </>
          )}
          {imageSrc && !isBlurred && (
            <button
              className="bg-[#004851] my-5 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-full flex sm:text-lg text-mg h-full w-full  justify-center disabled:bg-[#004851]/60"
              disabled={isBlurred}
            >
              <Link to="/validation-back-dni">Siguiente</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
