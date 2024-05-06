'use client';

import * as fal from '@fal-ai/serverless-client';
import { useMemo, useState } from 'react';

fal.config({
  proxyUrl: '/api/fal/proxy',
});

type Image = {
  url: string;
  file_name: string;
  file_size: number;
  content_type: string;
};

type Result = {
  model_mesh: Image;
  texture_map: Image;
  normal_map: Image;
};

type ErrorProps = {
  error: any;
};

const Error: React.FC<ErrorProps> = ({ error }) => {
  if (!error) return null;
  return (
    <div className="p-4 mb-4 text-sm text-red-800 rounded bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">Error</span> {error.message}
    </div>
  );
};

const DEFAULT_PROMPT =
'(model_name:Modern_City_Scene), (category:architectural), (tags:city, skyscraper, streets, detailed), (description:A detailed 3D model of a modern city scene with tall skyscrapers, busy streets, and a castle-like structure in the distance)';

export default function Home() {
  const [prompt, setPrompt] = useState<string>(DEFAULT_PROMPT);
  const [doRemoveBackground, setDoRemoveBackground] = useState<string>('');
  const [numInferenceSteps, setNumInferenceSteps] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const modelMesh = useMemo(() => (result?.model_mesh ? result.model_mesh : null), [result]);
  const textureMap = useMemo(() => (result?.texture_map ? result.texture_map : null), [result]);
  const normalMap = useMemo(() => (result?.normal_map ? result.normal_map : null), [result]);

  const reset = () => {
    setLoading(false);
    setError(null);
    setResult(null);
    setLogs([]);
    setElapsedTime(0);
  };

  const generateImage = async () => {
    reset();
    setLoading(true);
    const start = Date.now();
    try {
      const result: Result = await fal.subscribe('workflows/ebowwa/3d-renderings', {
        input: {
          do_remove_background: doRemoveBackground,
          prompt,
          num_inference_steps: numInferenceSteps,
        },
        logs: true,
        onQueueUpdate(update) {
          setElapsedTime(Date.now() - start);
          if (update.status === 'IN_PROGRESS' || update.status === 'COMPLETED') {
            setLogs((update.logs || []).map((log) => log.message));
          }
        },
      });
      setResult(result);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
      setElapsedTime(Date.now() - start);
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 bg-gray-100">
      <main className="container dark:text-gray-50 text-gray-900 flex flex-col items-center justify-center w-full flex-1 py-10 space-y-8">
        <h1 className="text-4xl font-bold mb-8">
          Hello <code className="font-light text-pink-600">fal</code>
        </h1>
        <div className="text-lg w-full">
          <label htmlFor="prompt" className="block mb-2 text-current">
            Prompt
          </label>
          <input
            className="w-full text-lg p-2 rounded bg-black/10 dark:bg-white/5 border border-black/20 dark:border-white/10"
            id="prompt"
            name="prompt"
            placeholder="Imagine..."
            value={prompt}
            autoComplete="off"
            onChange={(e) => setPrompt(e.target.value)}
            onBlur={(e) => setPrompt(e.target.value.trim())}
          />
        </div>
        <div className="text-lg w-full">
          <label htmlFor="do_remove_background" className="block mb-2 text-current">
            Remove Background
          </label>
          <input
            className="w-full text-lg p-2 rounded bg-black/10 dark:bg-white/5 border border-black/20 dark:border-white/10"
            id="do_remove_background"
            name="do_remove_background"
            placeholder="Enter a value (e.g., 'true')"
            value={doRemoveBackground}
            autoComplete="off"
            onChange={(e) => setDoRemoveBackground(e.target.value)}
            onBlur={(e) => setDoRemoveBackground(e.target.value.trim())}
          />
        </div>
        <div className="text-lg w-full">
          <label htmlFor="num_inference_steps" className="block mb-2 text-current">
            Number of Inference Steps
          </label>
          <input
            className="w-full text-lg p-2 rounded bg-black/10 dark:bg-white/5 border border-black/20 dark:border-white/10"
            id="num_inference_steps"
            name="num_inference_steps"
            placeholder="Enter a value (e.g., '50')"
            value={numInferenceSteps}
            autoComplete="off"
            onChange={(e) => setNumInferenceSteps(e.target.value)}
            onBlur={(e) => setNumInferenceSteps(e.target.value.trim())}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            generateImage();
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-3 px-6 mx-auto rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </button>
        <Error error={error} />
        <div className="w-full flex flex-col space-y-4">
          <div className="mx-auto">
            {modelMesh && (
              <a href={modelMesh.url} target="_blank" rel="noopener noreferrer">
                <img src={modelMesh.url} alt={modelMesh.file_name} />
              </a>
            )}
            {textureMap && (
              <a href={textureMap.url} target="_blank" rel="noopener noreferrer">
                <img src={textureMap.url} alt={textureMap.file_name} />
              </a>
            )}
            {normalMap && (
              <a href={normalMap.url} target="_blank" rel="noopener noreferrer">
                <img src={normalMap.url} alt={normalMap.file_name} />
              </a>
            )}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-light">JSON Result</h3>
            <p className="text-sm text-current/80">{`Elapsed Time (seconds): ${(elapsedTime / 1000).toFixed(2)}`}</p>
            <pre className="text-sm bg-black/70 text-white/80 font-mono h-60 rounded whitespace-pre overflow-auto w-full">
              {result ? JSON.stringify(result, null, 2) : '// result pending...'}
            </pre>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-light">Logs</h3>
            <pre className="text-sm bg-black/70 text-white/80 font-mono h-60 rounded whitespace-pre overflow-auto w-full">
              {logs.filter(Boolean).join('\n')}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}