import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSubCategory, filterMerk, updateSelectedFilters } from '../redux/actions';

function Filters({ title, content, isOpen, onClose }) {
  const dispatch = useDispatch();
  
  // Ambil data dari Redux
  const reduxSubCategories = useSelector(state => state.categories.subCategories);
  const reduxMerks = useSelector(state => state.categories.merks);
  const selectedFilters = useSelector(state => state.categories.selectedFilters) || { merkFilter: [], subCategory: [] };

  // State lokal untuk menyimpan data sementara
  const [subCategories, setSubCategories] = useState([]);
  const [merks, setMerks] = useState([]);
  const [hasDispatched, setHasDispatched] = useState(false); // Agar tidak dispatch berkali-kali

  // Debugging untuk melihat perubahan data dari Redux
  // useEffect(() => {
  //   console.log(`Filter Title: ${title}`);
  //   console.log("Content:", content);
  //   console.log("Merks from Redux:", reduxMerks);
  //   console.log("SubCategories from Redux:", reduxSubCategories);
  // }, [title, content, reduxMerks, reduxSubCategories]);

  // Perbarui state lokal ketika Redux diperbarui
  useEffect(() => {
    if (reduxSubCategories.length > 0) setSubCategories(reduxSubCategories);
    if (reduxMerks.length > 0) setMerks(reduxMerks);
  }, [reduxSubCategories, reduxMerks]);

  // Pastikan hanya dispatch filter sekali saat content berubah
  useEffect(() => {
    if (!content || content.length === 0 || hasDispatched) return;

    if (title === "Kategori") {
      // console.log("Dispatching filterSubCategory...");
      dispatch(filterSubCategory(content));
    } else if (title === "Merk") {
      // console.log("Dispatching filterMerk...");
      dispatch(filterMerk(content));
    }
    
    setHasDispatched(true);
  }, [content, title, dispatch, hasDispatched]);

  // Menentukan item yang akan ditampilkan
  const itemToDisplay = title === "Kategori"
    ? [...(subCategories || [])].sort()
    : [...(merks || [])].sort();

  // Menangani perubahan filter
  const handleCheckbox = (item) => {
    const filterType = title === "Kategori" ? "subCategory" : "merkFilter";
    const normalizedItem = item.toLowerCase();
    dispatch(updateSelectedFilters(filterType, normalizedItem));
  };

  return (
    <>
      {/* Overlay untuk mobile, menutup filter saat klik di luar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={onClose}></div>
      )}

      {/* Sidebar Filter */}
      <div className={`
        fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-40 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        lg:relative lg:translate-x-0 lg:w-48 lg:h-max lg:bg-slate-100 lg:py-10 lg:rounded-xl
        overflow-y-auto max-h-screen
      `}>

        {/* Tombol close hanya di mobile */}
        <div className="flex justify-between items-center p-4 border-b lg:hidden">
          <button className="text-gray-600" onClick={onClose}>✖</button>
        </div>
        
        <p className="text-primary-blue ml-5 font-bold lg:mt-0 mt-5">{title}</p>
        {itemToDisplay.length > 0 ? (
          itemToDisplay.map((item, index) => {
            const filterKey = title === "Kategori" ? "subCategory" : "merkFilter";
            const normalizedItem = item.toLowerCase();
            const isSelected = selectedFilters[filterKey]?.includes(normalizedItem);

            return (
              <div key={index} className="flex items-center gap-3 ml-5 my-2">
                <i
                  className={`cursor-pointer ${isSelected ? "fa-solid fa-square-check" : "fa-regular fa-square"}`}
                  onClick={() => handleCheckbox(item)}
                ></i>
                <p className="text-primary-blue text-sm">{item}</p>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-sm ml-5 mt-3">Tidak ada data tersedia</p>
        )}
      </div>
    </>
  );
}

export default Filters;