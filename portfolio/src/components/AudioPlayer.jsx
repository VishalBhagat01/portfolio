import { useEffect, useRef, useState } from 'react';
import { IconPlay, IconPause, IconMusic } from './Icons';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(38);
  const audioCtxRef = useRef(null);
  const oscillatorNodesRef = useRef([]);

  const tracks = [
    { id: '01', title: 'Ambient Synth', duration: '03:42', genre: 'Deep Focus / Synthwave' },
    { id: '02', title: 'Lo-Fi Beats', duration: '02:55', genre: 'Late Night Coding' },
    { id: '03', title: 'Hans Zimmer — OST', duration: '04:18', genre: 'Interstellar Focus' },
  ];

  // Gentle Ambient Sound Generator using Web Audio API (Zero external file dependencies)
  const startAmbientAudio = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Stop existing oscillators if any
      stopAmbientAudio();

      const ctx = audioCtxRef.current;
      const chords = [
        [220, 277.18, 329.63], // A minor pad
        [174.61, 220, 261.63], // F major pad
        [196.00, 246.94, 293.66], // G major pad
      ];
      const selectedChord = chords[currentTrackIndex % chords.length];

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      const oscs = selectedChord.map((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.connect(masterGain);
        osc.start();
        return osc;
      });

      oscillatorNodesRef.current = { oscs, masterGain };
    } catch (e) {
      console.warn('Ambient audio generator notice:', e);
    }
  };

  const stopAmbientAudio = () => {
    try {
      if (oscillatorNodesRef.current && oscillatorNodesRef.current.oscs) {
        oscillatorNodesRef.current.oscs.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (error) {
            console.warn('Unable to stop ambient oscillator:', error);
          }
        });
        oscillatorNodesRef.current = null;
      }
    } catch (error) {
      console.warn('Unable to stop ambient audio:', error);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAmbientAudio();
      setIsPlaying(false);
    } else {
      startAmbientAudio();
      setIsPlaying(true);
    }
  };

  const selectTrack = (index) => {
    setCurrentTrackIndex(index);
    setProgress(15);
    if (isPlaying) {
      stopAmbientAudio();
      setTimeout(() => {
        startAmbientAudio();
      }, 50);
    }
  };

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      stopAmbientAudio();
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (error) {
          console.warn('Unable to close audio context:', error);
        }
      }
    };
  }, []);

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div className="audio-widget-card">
      <div className="audio-widget-header">
        <div className="audio-tag-group">
          <span className="live-dot pulse-rose"></span>
          <span className="audio-tag-label">ON REPEAT</span>
        </div>
        <span className="audio-genre-pill font-mono">{currentTrack.genre}</span>
      </div>

      <p className="audio-philosophy-quote">
        "You'll find me plugged in with music 99.9% of the time."
      </p>

      {/* Main Track Display */}
      <div className="current-track-container">
        <div className="track-cover-art">
          <IconMusic size={22} className="music-note-icon" />
          <div className="track-sound-ring"></div>
        </div>

        <div className="track-meta">
          <h4 className="track-title">{currentTrack.title}</h4>
          <span className="track-id-badge font-mono">Track {currentTrack.id} // Coding Session</span>
        </div>

        <button
          onClick={togglePlay}
          className={`play-btn-circle ${isPlaying ? 'playing' : ''}`}
          aria-label={isPlaying ? 'Pause ambient track' : 'Play ambient track'}
        >
          {isPlaying ? <IconPause size={15} /> : <IconPlay size={15} />}
        </button>
      </div>

      {/* Animated Waveform Equalizer */}
      <div className="waveform-container" aria-hidden="true">
        {[28, 45, 75, 95, 60, 85, 40, 70, 90, 50, 65, 80, 45, 90, 75, 60, 40, 85, 65, 30].map(
          (height, i) => (
            <div
              key={i}
              className={`waveform-bar ${isPlaying ? 'active' : ''}`}
              style={{
                '--bar-height': `${height}%`,
                animationDelay: `${(i * 0.08).toFixed(2)}s`,
              }}
            />
          )
        )}
      </div>

      {/* Progress Bar */}
      <div className="audio-progress-bar-wrap">
        <div className="audio-progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="audio-timestamp font-mono">
        <span>01:18</span>
        <span>{currentTrack.duration}</span>
      </div>

      {/* Track Queue */}
      <div className="track-queue-section">
        <div className="queue-title font-mono">QUEUE</div>
        <div className="queue-list">
          {tracks.map((track, idx) => {
            const isSelected = idx === currentTrackIndex;
            return (
              <div
                key={track.id}
                onClick={() => selectTrack(idx)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    selectTrack(idx);
                  }
                }}
                className={`queue-item ${isSelected ? 'selected' : ''}`}
                role="button"
                tabIndex={0}
              >
                <div className="queue-left font-mono">
                  <span className="queue-id">{track.id}</span>
                  <span className="queue-name">{track.title}</span>
                </div>
                <div className="queue-right font-mono">
                  {isSelected && isPlaying ? (
                    <span className="queue-playing-status">PLAYING</span>
                  ) : (
                    <span className="queue-duration">{track.duration}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
