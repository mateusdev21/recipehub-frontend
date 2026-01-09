const CardSkeleton = () => {
    return (
        <div className="rounded-xl border border-gray-200 p-4 shadow-sm">
            {/* Image */}
            <div className="h-40 w-full rounded-lg bg-gray-200 animate-pulse" />

            {/* Content */}
            <div className="mt-4 space-y-3">
                <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-5/6 rounded bg-gray-200 animate-pulse" />
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-between">
                <div className="h-3 w-20 rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-16 rounded bg-gray-200 animate-pulse" />
            </div>
        </div>
    );
};

export default CardSkeleton;
