import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL, fetchFile } from '@ffmpeg/util';
import { useState } from 'react';
import showAlert from './showAlert';
import reset from './Reset';

const FFMPEG_CORE_VERSION = '0.12.3';

export const convertFile = async (
  ffmpeg: FFmpeg,
  file: File,
  ffmpegArgs: string[]
) => {
  showAlert(`Loading @ffmpeg/core-mt v${FFMPEG_CORE_VERSION}...`, 'warning');

  const baseURL = `https://unpkg.com/@ffmpeg/core-mt@${FFMPEG_CORE_VERSION}/dist/umd`;

  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    workerURL: await toBlobURL(
      `${baseURL}/ffmpeg-core.worker.js`,
      'text/javascript'
    ),
  });

  ffmpeg.on('log', ({ message }) => {
    if (message === 'Aborted()') {
      reset();
      showAlert('Unable to convert file.', 'danger');
      return;
    }

    showAlert(message, 'info');
    console.log(message);
  });

  const [progress, setProgress] = useState(0);

  const inputFilename = file.name;
  const outputFilename = `${file.name.split('.')[0]}.mp4`;

  await ffmpeg.writeFile(inputFilename, await fetchFile(file));

  document.getElementById('converting_spinner')!.style.display = 'block';
  document.getElementById('conversion_progress')!.style.display = 'block';

  console.log(ffmpegArgs);
  const startTime = Date.now() / 1000;

  for (let i = 0; i <= 100; i += 10) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    setProgress(i);
  }

  console.log(`Conversion took ${(Date.now() / 1000 - startTime).toFixed(1)} seconds.`);
  setProgress(0);

  const fileData = await ffmpeg.readFile(outputFilename);
  const data = new Uint8Array(fileData as ArrayBuffer);
  const objectURL = URL.createObjectURL(new Blob([data.buffer]));

  const anchorTag = document.createElement('a');
  anchorTag.href = objectURL;
  anchorTag.download = outputFilename;
  anchorTag.click();

  showAlert(
    `The converted file should have downloaded to your device.<br>If it hasn't, click <a href="${objectURL}" download="${outputFilename}">here</a>`,
    'success'
  );

  reset();
};