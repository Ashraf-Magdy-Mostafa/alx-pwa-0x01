import React from "react";

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center py-10">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-transparent" aria-label="Loading" />
            <span className="ml-3 text-sm text-gray-600">Loading…</span>
        </div>
    );
};

export default Loading;