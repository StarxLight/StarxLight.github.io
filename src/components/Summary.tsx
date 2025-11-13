const Summary = ({ likedCats }: any) => {
    return (
        <div className="flex flex-col h-screen">

            <div className="flex-1 overflow-y-auto p-4 pb-20">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    You liked {likedCats.length} cats! {likedCats.length > 0 ? '😻' : '😿'}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {likedCats.map((cat: any, index: any) => (
                        <img
                            key={index}
                            src={cat}
                            alt="liked cat"
                            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 w-full h-48 object-cover"
                        />
                    ))}
                </div>
            </div>

            <div className="sticky bottom-0 left-0 right-0 p-4">
                <button
                    onClick={() => window.location.reload()}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-200"
                >
                    Restart
                </button>
            </div>
        </div>
    );
}

export default Summary;