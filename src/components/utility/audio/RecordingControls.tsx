// RecordingControls.tsx
import React from 'react';
import styles from '@/styles/VoiceRecorder.module.css';

interface RecordingControlsProps {
  isRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

const RecordingControls: React.FC<RecordingControlsProps> = ({
  isRecording,
  onStartRecording,
  onStopRecording,
}) => {
  return (
    <div className={styles.controls}>
      {!isRecording ? (
        <button
          className={styles.recordButton}
          onClick={onStartRecording}
          aria-label="Start Recording"
        >
          <div className={styles.micIcon} />
        </button>
      ) : (
        <div className={styles.recordingIndicators}>
          <div className={styles.recordingIndicator} />
          <div className={styles.recordingIndicator} />
          <div className={styles.recordingIndicator} />
          <div className={styles.recordingIndicator} />
          <div className={styles.recordingIndicator} />
        </div>
      )}
      {isRecording && (
        <button
          className={styles.cancelButton}
          onClick={onStopRecording}
          aria-label="Stop Recording"
        >
          <div className={styles.cancelIcon} />
        </button>
      )}
    </div>
  );
};

export default RecordingControls;