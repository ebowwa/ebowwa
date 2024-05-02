// src/components/utility/QR/QRCodeGenerator.tsx
"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import QRCode, { QRCodeToDataURLOptions } from 'qrcode';

interface QRCodeGeneratorProps {
  link: string;
  size?: number;
  backgroundColor?: string;
  foregroundColor?: string;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  onError?: (error: Error) => void;
  onGenerated?: (dataUrl: string) => void;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  link,
  size = 200,
  backgroundColor = '#ffffff',
  foregroundColor = '#000000',
  errorCorrectionLevel = 'M',
  onError,
  onGenerated,
}) => {
  const [qrCodeData, setQrCodeData] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const generateQRCode = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const options: QRCodeToDataURLOptions = {
        errorCorrectionLevel,
        color: {
          dark: foregroundColor,
          light: backgroundColor,
        },
        margin: 4,
        scale: 8,
        type: 'image/png',
      };

      const data = await QRCode.toDataURL(link, options);

      setQrCodeData(data);
      if (onGenerated) {
        onGenerated(data);
      }
    } catch (err) {
      const error = new Error(err as string);
      setError(error);
      if (onError) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [
    link,
    size,
    backgroundColor,
    foregroundColor,
    errorCorrectionLevel,
    onError,
    onGenerated,
  ]);

  useEffect(() => {
    generateQRCode();
  }, [generateQRCode]);

  const cachedQRCodeData = useMemo(() => qrCodeData, [qrCodeData]);

  if (isLoading) {
    return <p>Loading QR code...</p>;
  }

  if (error) {
    return <p>Error generating QR code: {error.message}</p>;
  }

  return <img src={cachedQRCodeData} alt="QR Code" width={size} height={size} />;
};

export default QRCodeGenerator;