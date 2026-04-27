'use client'
import { useEffect, useState } from "react";
import { VideoPlayer } from "../components/VideoPlayer";

export default function Player() {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(50);

    useEffect(() => {
        if (playing) {
            console.log("O player está tocando");
        } else {
            console.log("O player está parado");
        }
    }, [playing]);

    useEffect(() => {
        console.log("O volume é: " + volume);
    }, [volume]);

    if (volume > 100) {
        setVolume(volume - 1);
        console.log("O volume está no máximo:" + (volume - 1));
    }

    if (volume < 0) {
        setVolume(volume + 1);
        console.log("O volume está no mínimo:" + (volume + 1));
    }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex flex-row gap-3 mb-3 border border-zinc-200 rounded-md p-0.5 w-[50%] h-full">
            <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" playing={playing} />
        </div>
        
        <button className="bg-blue-600 text-white rounded-md p-3 mt-3" onClick={() => setPlaying(!playing)}>{playing ? "Pause" : "Play"}</button>
        <button className="bg-red-600 text-white rounded-md p-3 mt-3" onClick={() => setVolume(volume + 1)}>Aumentar volume</button>
        <button className="bg-red-600 text-white rounded-md p-3 mt-3" onClick={() => setVolume(volume - 1)}>Diminuir volume</button>
    </div>
  );
}