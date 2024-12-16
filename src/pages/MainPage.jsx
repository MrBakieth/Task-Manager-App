import tasks from "../components/tasks";
import NavigationBar from "../components/NavigationBar";

function MainPage() {
    
    return (
        <>
        <NavigationBar/>
        <div className="flex items-center justify-center min-h-screen">
            <section 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl p-4"
            >
            {tasks.map((task) => (
                <div 
                key={task.id}
                className="bg-white shadow-md rounded-lg p-6 border border-pastel-primary flex flex-col justify-between"
                >
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-pastel-text mb-2">
                    {task.title}
                    </h3>
                    <p className="text-pastel-text mb-2">
                    {task.description}
                    </p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                <p className="text-sm text-pastel-text">
                    {task.date}
                    </p>
                    <button 
                    className="px-4 py-2 rounded bg-pastel-secondary text-white hover:bg-pastel-secondary/80 transition-all linear focus:outline-none focus:ring focus:ring-pastel-secondary/50"
                    >
                    Tamamlandı
                    </button>
                    <button 
                    className="px-4 py-2 rounded bg-pastel-primary text-white hover:bg-pastel-primary/80 transition-all linear focus:outline-none focus:ring focus:ring-pastel-primary/50"
                    >
                    Sil
                    </button>
                    
                </div>
                </div>
            ))}
            </section>
        </div>
        </>
    );
}

export default MainPage;
