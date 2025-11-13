function LoadingScreen() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mb-4"></div>
            <p className="text-gray-600">Cute cats attack...</p>
        </div>
    );
}

export default LoadingScreen;
