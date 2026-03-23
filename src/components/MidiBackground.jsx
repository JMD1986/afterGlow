import "./MidiBackground.css";

export default function MusicToggle({ playing, onToggle }) {
  return (
    <button
      className="midi-toggle"
      onClick={onToggle}
      aria-label={playing ? "Mute music" : "Unmute music"}
      title={playing ? "Mute music" : "Unmute music"}
    >
      {playing ? "♫" : "♪"}
    </button>
  );
}
