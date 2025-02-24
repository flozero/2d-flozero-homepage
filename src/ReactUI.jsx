import CameraController from "./reactComponents/CameraController";
import SocialModal from "./reactComponents/SocialModal";

export default function ReactUI() {
  return (
    <>
      <p className="controls-message">Tap/Click around to move</p>
      <CameraController />
      <SocialModal />
    </>
  );
}
