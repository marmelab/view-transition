import { useEffect, useRef } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { TransitionLink } from "./TransitionLink";

const context = new AudioContext();

async function getBatmanSound() {
  const response = await fetch(
    "https://cdn.glitch.global/b2a0e9e8-12a2-4158-b2d8-11ef08ab8d68/batman.aac?v=1675524264205"
  );
  const arrayBuffer = await response.arrayBuffer();
  return context.decodeAudioData(arrayBuffer);
}

function playSound(audioBuffer: AudioBuffer) {
  const source = context.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(context.destination);
  source.start();
}

const batmanSoundPromise = getBatmanSound();

export default function Root() {
  const location = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    // @ts-ignore
    if (!document.startViewTransition) {
      return;
    }
    async function makeViewTransaction() {
      const batmanSound = await batmanSoundPromise;
      playSound(batmanSound);
    }
    makeViewTransaction();
  }, [location]);

  return (
    <div className="w-screen h-screen bg-indigo-950 text-zinc-50">
      <div className="flex w-screen space-x-4 p-2 rounded-b-lg bg-indigo-900">
        <TransitionLink to="/">Home</TransitionLink>
        <TransitionLink to="/riddle/1/page/0">Riddle 1</TransitionLink>
      </div>
      <div>
        <Outlet />
      </div>
      <div
        style={{
          viewTransitionName: "batman",
          contain: "paint",
        }}
      ></div>
    </div>
  );
}
