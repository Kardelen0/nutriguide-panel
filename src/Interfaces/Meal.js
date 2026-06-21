// NutriGuide sistemindeki her bir sağlıklı yemeğin sahip olacağı standart şablon
export const MealTemplate = {
  id: "",          // Her yemeğe özel benzersiz bir kimlik (silme ve güncelleme için şart)
  name: "",        // Yemek adı (Örn: Somon Bowl)
  category: "",    // Kategori (Salata, Smoothie, Bowl vb.)
  calories: 0,     // Kalori değeri (kcal)
  price: 0,        // Fiyatı (TL)
  imageUrl: ""     // Yemek görselinin linki
};