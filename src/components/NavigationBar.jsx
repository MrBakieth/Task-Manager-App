import { useState } from 'react';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);  // Popup'ın açılma durumunu kontrol edecek state oluşturarak, içerisine boolean değer atıyorum. 

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen); 
    };

    return (
        <div>
        {/* Navbar */}
        <nav className="bg-pastel-background text-pastel-text p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold">Task Manager App </span>
            </div>
            {/* Popup açma butonu */}
            <button onClick={togglePopup} className="bg-pastel-accent text-pastel-text px-4 py-2 rounded-lg hover:bg-pastel-accent/50">
                Görev Ekle!
            </button>
            <button className="bg-pastel-primary text-pastel-text px-4 py-2 rounded-lg hover:bg-pastel-primary/50">
                Çıkış Yap
            </button>
            </div>
        </nav>

        {/* Popup */}
        {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[32rem]">
                <h2 className="text-xl font-semibold mb-4">Görev Başlığı</h2>
                <input type="text" className='border border-pastel-primary rounded-lg w-96 h-8 focus:outline-pastel-secondary' />
                <h2 className="text-xl font-semibold mb-4 mt-4">Görev Notu</h2>
                <input type="text" className='border border-pastel-primary rounded-lg w-96 h-32 focus:outline-pastel-secondary text-start pl-2' />
                <h2 className="text-xl font-semibold mb-4 mt-4">Görev Tarihi</h2>
                <input type="date" className='border border-pastel-primary rounded-lg w-60 h-8 p-2' />
                <h2 className="text-xl font-semibold mb-4 mt-4">Görev Saati</h2>
                <input type="time" className='border border-pastel-primary rounded-lg w-60 h-8 pt-2 pb-2 pl-4' />
                <button onClick={togglePopup} className="flex mt-4 bg-pastel-primary text-white px-4 py-2 rounded-lg hover:bg-pastel-accent">
                Ekle
                </button>
            </div>
            </div>
        )}
        </div>
    );
};

export default Navbar;
