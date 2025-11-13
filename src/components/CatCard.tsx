import { useSwipeable } from "react-swipeable";
import { useState } from "react";

const CatCard = ({ cat, onSwipe }: any) => {
    const [offset, setOffset] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const handlers = useSwipeable({
        onSwiping: (eventData) => {
            if (!isExiting) {
                setIsSwiping(true);
                setOffset(eventData.deltaX);
                setRotation(eventData.deltaX * 0.1);
            }
        },
        onSwipedLeft: () => {
            setIsExiting(true);
            setOffset(-1000);
            setTimeout(() => onSwipe("Left"), 200); // Wait for animation
        },
        onSwipedRight: () => {
            setIsExiting(true);
            setOffset(1000);
            setTimeout(() => onSwipe("Right"), 200); // Wait for animation
        },
        onSwiped: () => {
            if (Math.abs(offset) < 100 && !isExiting) {
                setOffset(0);
                setRotation(0);
                setIsSwiping(false);
            }
        },
        preventScrollOnSwipe: true,
        trackMouse: true,
        delta: 10,
    });

    return (
        <div
            {...handlers}
            className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 h-96 flex items-center justify-center cursor-grab active:cursor-grabbing relative"
            style={{
                transform: `translateX(${offset}px) rotate(${rotation}deg)`,
                transition: isSwiping && !isExiting ? "none" : "",
                opacity: isExiting ? 0 : Math.max(0.5, 1 - Math.abs(offset) / 500),
            }}
        >
            <img
                src={cat}
                alt="cat"
                className="w-full h-full object-cover rounded-2xl select-none pointer-events-none"
            />

            {/* Visual feedback */}
            {offset > 50 && !isExiting && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-2xl">
                    LIKE 💚
                </div>
            )}
            {offset < -50 && !isExiting && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-2xl">
                    NOPE ❌
                </div>
            )}
        </div>
    );
}

export default CatCard;