import React from "react";

type MovieCardProps = {
    title: string;
    year?: string | number;
    posterUrl?: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ title, year, posterUrl }) => {
    return (
        <article className="overflow-hidden rounded-lg border bg-white shadow-sm">
            {posterUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={posterUrl} alt={`${title} poster`} className="h-64 w-full object-cover" />
            ) : (
                <div className="flex h-64 w-full items-center justify-center bg-gray-100 text-gray-400">No Image</div>
            )}
            <div className="p-4">
                <h3 className="truncate text-lg font-semibold">{title}</h3>
                {year && <p className="mt-1 text-sm text-gray-500">{year}</p>}
            </div>
        </article>
    );
};

export default MovieCard;