import React, { useState, useEffect } from 'react';
import MealCard from '../Components/MealCard';

export default function Dashboard() {
  const [meals, setMeals] = useState(() => {
    const savedMeals = localStorage.getItem('nutriguide_meals');
    return savedMeals ? JSON.parse(savedMeals) : [];
  });

  const [formData, setFormData] = useState({
    name: '',
    category: 'Bowl',
    calories: '',
    price: '',
    imageUrl: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem('nutriguide_meals', JSON.stringify(meals));
  }, [meals]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.calories || !formData.price) {
      alert("Lütfen gerekli alanları doldurun!");
      return;
    }

    // Kararsız dinamik linkler yerine stabil kategori görselleri
    let defaultImage = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500';
    if (formData.category === 'Bowl') {
      defaultImage = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500';
    } else if (formData.category === 'Salata') {
      defaultImage = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500';
    } else if (formData.category === 'Smoothie') {
      defaultImage = 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500';
    }

    const finalImageUrl = formData.imageUrl.trim() !== '' ? formData.imageUrl : defaultImage;

    if (isEditing) {
      setMeals(meals.map(meal => meal.id === editingId ? {
        ...meal,
        name: formData.name,
        category: formData.category,
        calories: Number(formData.calories),
        price: Number(formData.price),
        imageUrl: finalImageUrl
      } : meal));
      setIsEditing(false);
      setEditingId(null);
    } else {
      const newMeal = {
        id: Date.now().toString(),
        name: formData.name,
        category: formData.category,
        calories: Number(formData.calories),
        price: Number(formData.price),
        imageUrl: finalImageUrl
      };
      setMeals([newMeal, ...meals]);
    }
    setFormData({ name: '', category: 'Bowl', calories: '', price: '', imageUrl: '' });
  };

  const handleDeleteMeal = (id) => {
    if (window.confirm("Bu tarifi silmek istediğinize emin misiniz?")) {
      setMeals(meals.filter(meal => meal.id !== id));
    }
  };

  const handleEditClick = (meal) => {
    setIsEditing(true);
    setEditingId(meal.id);
    setFormData({
      name: meal.name,
      category: meal.category,
      calories: meal.calories,
      price: meal.price,
      imageUrl: meal.imageUrl
    });
  };

  return (
    <div className="min-h-screen bg-[#FFD1C0] p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-8 text-center flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-[#2C2C2C] tracking-tight">NUTRIGUIDE</h1>
          <p className="text-sm font-medium text-gray-700 mt-1">Yönetim Paneli</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* FORM ALANI */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-fit">
            <h2 className="text-xl font-bold text-[#2C2C2C] mb-5 pb-2">
              {isEditing ? "Tarifi Güncelle" : "Yeni Tarif Ekle"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Yemek Adı</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#10B981]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Kategori</label>
                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full p-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#10B981]">
                  <option value="Bowl">Bowl</option>
                  <option value="Salata">Salata</option>
                  <option value="Smoothie">Smoothie & Detoks</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Kalori (kcal)</label>
                  <input type="number" name="calories" value={formData.calories} onChange={handleInputChange} className="w-full p-2.5 text-sm border border-gray-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Fiyat (TL)</label>
                  <input type="number" name="price" value={formData.price} onChange={handleInputChange} className="w-full p-2.5 text-sm border border-gray-200 rounded-xl" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Görsel URL</label>
                <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} className="w-full p-2.5 text-sm border border-gray-200 rounded-xl" />
              </div>
              <button type="submit" className="w-full bg-[#10B981] text-white p-3 rounded-xl text-sm font-bold shadow-sm hover:bg-[#0da371] transition-colors">
                {isEditing ? "Değişiklikleri Kaydet" : "Panele Ekle"}
              </button>
            </form>
          </div>

          {/* FIGMA KART LİSTESİ */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#2C2C2C] mb-6 flex justify-between items-center px-2">
              <span>Sağlıklı Tarif Listesi</span>
              <span className="text-xs font-bold bg-[#10B981] text-white px-3 py-1 rounded-full shadow-sm">{meals.length} Tarif</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {meals.map((meal) => (
                <MealCard 
                  key={meal.id} 
                  meal={meal} 
                  onEdit={handleEditClick} 
                  onDelete={handleDeleteMeal} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}