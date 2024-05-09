// app/components/withDeviceDetection.tsx
import React from 'react';
import { useDeviceDetection } from '@/components/utility/ads/hooks/useDeviceDetection';

interface WithDeviceDetectionProps {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

const withDeviceDetection = <P extends object>(
    WrappedComponent: React.ComponentType<P & WithDeviceDetectionProps>
) => {
    return (props: P) => {
        const { isMobile, isTablet, isDesktop } = useDeviceDetection();

        return (
            <WrappedComponent
                {...props}
                isMobile={isMobile}
                isTablet={isTablet}
                isDesktop={isDesktop}
            />
        );
    };
};

export default withDeviceDetection;