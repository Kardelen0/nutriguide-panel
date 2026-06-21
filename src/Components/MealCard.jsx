import React from 'react';

export default function MealCard({ meal, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col relative transition-shadow hover:shadow-md">
      <div className="h-48 w-full overflow-hidden bg-gray-50 relative">
        <img src={meal.imageUrl} alt={meal.name} className="w-full h-full object-cover"/>
      </div>
      
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{meal.category}</span>
          <h3 className="text-xl font-bold text-[#2C2C2C] mt-1 leading-tight line-clamp-1">{meal.name}</h3>
        </div>
        
        <div className="flex items-center justify-between mt-6 pt-3 border-t border-gray-50 w-full">
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs font-bold text-[#FF6B35]">{meal.calories} kcal</span>
            <span className="text-xl font-extrabold text-[#FF6B35] leading-none">{meal.price} TL</span>
          </div>

          <div className="flex gap-2.5 items-center">
            <button type="button" className="bg-white text-[#FF6B35] border border-[#FF6B35] p-2 rounded-full text-sm font-bold shadow-sm hover:scale-110 hover:bg-[#FF6B35]/5 transition-all">
              ❤️
            </button>
            <button type="button" className="bg-white text-[#FF6B35] border border-[#FF6B35] p-2 rounded-full text-sm font-bold shadow-sm hover:scale-110 hover:bg-[#FF6B35]/5 transition-all">
              🛒
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-dashed border-gray-100">
          <button type="button" onClick={() => onEdit(meal)} className="text-xs font-bold border border-gray-200 text-gray-700 p-2 rounded-xl hover:bg-gray-50 transition-colors">
            Düzenle
          </button>
          <button type="button" onClick={() => onDelete(meal.id)} className="text-xs font-bold bg-red-50 text-red-700 border border-red-100 p-2 rounded-xl hover:bg-red-100 transition-colors">
            Sil
          </button>
        </div>
      </div>
    </div>
  );
}