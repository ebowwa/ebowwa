import { Box, BoxProps } from '@mantine/core';
import classNames from 'classnames';

interface YoutubeEmbedProps extends BoxProps {
    videoId: string;
}

const styles = {
    container: 'overflow-hidden relative h-0 pb-[56.25%]',
    iframe: 'absolute top-0 left-0 w-full h-full',
};

export const YoutubeEmbed = ({ videoId, className, ...props }: YoutubeEmbedProps) => (
    <Box
        {...props}
        className={classNames(styles.container, className)}
    >
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className={styles.iframe}
        />
    </Box>
);