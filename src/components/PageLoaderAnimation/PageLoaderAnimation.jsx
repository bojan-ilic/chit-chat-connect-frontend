// Import 'useSpring' hook and 'animated' component from '@react-spring/web' library that enable animation creation and manipulation
import { useSpring, animated } from '@react-spring/web';

/**
 * PageLoaderAnimation component displays a loader animation using react-spring.
 * It creates a looping animation with changing background colors and position.
 * @returns {JSX.Element} Returns a JSX element displaying the loader animation.
 */
const PageLoaderAnimation = () => {
    // Configure springs with animated properties for smooth transitions in the animation
    const springs = useSpring({
        // Define initial values and the starting animation state
        from: { background: '#ff6d6d', y: -40, x: 0 },
        // Define to-values for the animation to transition through
        to: [
            { x: 80, background: '#fff59a' },
            { y: 40, background: '#88DFAB' },
            { x: 0, background: '#569AFF' },
            { y: -40, background: '#ff6d6d' },
        ],
        // Enable looping of the animation
        loop: true,
    });

    // Render the loader animation using an animated div
    return (
        <div className="flex h-screen items-center justify-center">
            <animated.div
                className="h-10 w-10 rounded-md shadow-lg"
                style={{
                    ...springs, // Apply animated values from react-spring
                }}
            />
        </div>
    );
};

export default PageLoaderAnimation;
