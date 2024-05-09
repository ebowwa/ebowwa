// google text embedding || client side code

import { useState, useEffect } from 'react';
import { FilesetResolver, TextEmbedder } from '@mediapipe/tasks-text';

const useTextEmbedder = () => {
    const [textEmbedder, setTextEmbedder] = useState(null);
    const [embeddingResult, setEmbeddingResult] = useState(null);

    useEffect(() => {
        const createEmbedder = async () => {
            const textFiles = await FilesetResolver.forTextTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-text@latest/wasm/");
            const textEmbedder = await TextEmbedder.createFromOptions(
                textFiles,
                {
                    baseOptions: {
                        modelAssetPath: `https://storage.googleapis.com/mediapipe-tasks/text_embedder/universal_sentence_encoder.tflite`
                    },
                    quantize: true
                }
            );
            setTextEmbedder(textEmbedder);
        };
        createEmbedder();
    }, []);

    const embedText = async (inputText) => {
        if (!textEmbedder) return;
        const embeddingResult = await textEmbedder.embed(inputText);
        setEmbeddingResult(embeddingResult);
    };

    const cosineSimilarity = (embedding1, embedding2) => {
        return TextEmbedder.cosineSimilarity(embedding1, embedding2);
    };

    return { embedText, embeddingResult, cosineSimilarity };
};

export default useTextEmbedder;