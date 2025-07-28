import { useEffect, useRef, useState } from "react";
import { IoMusicalNotes } from "react-icons/io5";
import SelectInput from "../../components/common/SelectInput";
import AudioApi from "../../apis/AudioApi";

function Music({ value, onChange, name }) {
    const [audios, setAudios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const audioRef = useRef(null);

    useEffect(() => {
        const fetchAudios = async () => {
            try {
                const response = await AudioApi.getAllAudio();
                setAudios(response.data);
            } catch (err) {
                console.error("Error fetching audios:", err);
                setError("Failed to load audio list");
            } finally {
                setLoading(false);
            }
        };
        fetchAudios();
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [value]);

    if (loading) return <div>Loading audio list...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="space-y-2 mx-auto">
            <div className="flex items-center gap-2 text-gray-700">
                <IoMusicalNotes />
                <h2 className="text-lg font-medium">Bài hát</h2>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
                <SelectInput
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder="-- Chọn bài hát --"
                    options={audios.map((audio) => ({
                        value: audio.url,
                        label: audio.name
                    }))}
                />
                <div className="w-full">
                    <audio controls ref={audioRef} className="h-12 w-full">
                        <source src={value || null} type="audio/ogg" />
                    </audio>
                </div>
            </div>
        </div>
    );
}

export default Music;
