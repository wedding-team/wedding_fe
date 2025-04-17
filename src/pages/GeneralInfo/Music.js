import { IoPlay, IoPause, IoMusicalNote, IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";

function Music() {
    const [audios, setAudios] = useState([]);
    const [selectedAudio, setSelectedAudio] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const audioRef = useRef(null);

    console.log(selectedAudio)

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/audios")
            .then((res) => res.json())
            .then((data) => setAudios(data))
            .catch((err) => console.error("Error fetching audios:", err));
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const updateTime = () => setCurrentTime(audio.currentTime);
        const setAudioDuration = () => setDuration(audio.duration);
        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", setAudioDuration);
        audio.addEventListener("ended", () => {
            setIsPlaying(false);
            setCurrentTime(0);
        });
        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", setAudioDuration);
        };
    }, [selectedAudio]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    const handlePlay = () => {
        if (!selectedAudio) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((err) => console.error("Playback error:", err));
        }
        setIsPlaying(!isPlaying);
    };

    const handleAudioChange = (e) => {
        setSelectedAudio(e.target.value);
        setIsPlaying(false);
        setCurrentTime(0);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const handleSeek = (e) => {
        const newTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const formatTime = (seconds) => {
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className="space-y-2 mx-auto">
            <div className="flex items-center gap-2">
                <IoMusicalNote />
                <h2 className="text-lg font-semibold text-gray-800">Bài hát</h2>
            </div>
            <div className="flex flex-col gap-2 xl:gap-2 xl:flex xl:flex-row">
                <select
                    value={selectedAudio}
                    onChange={handleAudioChange}
                    className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:border-blue-500"
                >
                    <option value="">-- Chọn bài hát --</option>
                    {audios.map((audio, idx) => (
                        <option key={idx} value={audio.url}>
                            {audio.name}
                        </option>
                    ))}
                </select>
                <div className="w-full bg-gray-50 p-2 rounded-lg border border-gray-200">
                    <div className='flex items-center gap-3'>
                        <button
                            type="button"
                            onClick={handlePlay}
                            disabled={!selectedAudio}
                            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            {isPlaying ? <IoPause size={16}/> : <IoPlay size={16}/>}
                        </button>
                        <div className="flex flex-1 items-center gap-2 text-sm text-gray-600">
                            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                            <input
                                type="range"
                                value={duration ? (currentTime / duration) * 100 : 0}
                                onChange={handleSeek}
                                className="flex-1 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, #3b82f6 ${(currentTime / duration) * 100 || 0}%, #d1d5db ${
                                        (currentTime / duration) * 100 || 0
                                    }%)`,
                                }}
                                disabled={!selectedAudio}
                            />
                        </div>
                        <div
                            className="relative flex items-center"
                            onMouseEnter={() => setShowVolumeSlider(true)}
                            onMouseLeave={() => setShowVolumeSlider(false)}
                        >
                            <button
                                onClick={toggleMute}
                                className="text-gray-600 hover:text-gray-800"
                                disabled={!selectedAudio}
                            >
                                {isMuted ? <IoVolumeMute size={18}/> : <IoVolumeHigh size={18}/>}
                            </button>
                            {showVolumeSlider && (
                                <div className="absolute bottom-full transform left-1/2 -translate-x-1/2 py-10">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={isMuted ? 0 : volume}
                                        onChange={handleVolumeChange}
                                        className="w-20 h-1 appearance-none bg-gray-300 rounded-lg cursor-pointer volume-slider"
                                        style={{
                                            transform: "rotate(-90deg)",
                                            background: `linear-gradient(to right, #3b82f6 ${(isMuted ? 0 : volume) * 100}%, #d1d5db ${(isMuted ? 0 : volume) * 100}%)`,
                                        }}
                                        disabled={!selectedAudio}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <audio
                ref={audioRef}
                src={selectedAudio ? `http://localhost:3000${selectedAudio}` : undefined}
                onEnded={() => setIsPlaying(false)}
                volume={isMuted ? 0 : volume}
            />
        </div>
    );
}

export default Music;