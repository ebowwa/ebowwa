'use client';

import * as React from 'react';
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

        return result;
    };

    return (
        <div>
            <Error error={error} />
            {/* Add your UI components here */}
        </div>
    );
}