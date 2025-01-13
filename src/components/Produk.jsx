import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters";
import ComingSoon from "../img/comingsoon.png";
import { productCategory } from "../redux/actions";

function Produk({ title, categoryName }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.categories.list); //mengambil data produk yang sudah difilter berdasarkan kategori

  useEffect(() => {
    dispatch(productCategory(categoryName)); //set produk kategori berdasar nama kategori yang diinput
  }, categoryName); // mengubah data setiap kali nama kategori berubah

  return (
    <div className="mb-20">
      {/* title */}
      <h1 className="text-2xl font-bold text-center py-5">{title}</h1>
      {/* end title */}

      <div className="flex gap-5 mx-20">
        {/* filter */}
        <div className="flex flex-col gap-5">
          <Filters title={"Kategori"} content={categoryName}/>
          <Filters title={"Merk"} content={categoryName}/>
        </div>
        {/* end filter */}

        {/* list produk */}
        <div className="grid grid-cols-4 gap-5">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col hover:cursor-pointer gap-2 text-left"
            >
              <div className="relative">
                <img
                  src={ComingSoon}
                  alt="Gambar slogan 1"
                  className="xl:w-52 xl:h-52 rounded-xl object-cover"
                />
              </div>
              <p className="font-bold text-lg">{item.title}</p>
              <div className="flex gap-2">
                <p className="text-xs text-white px-2 py-1 rounded-full w-max bg-red-600">
                  {item.subcategory}
                </p>
                <p className="text-xs text-white px-2 py-1 rounded-full w-max bg-red-600">
                  {item.merk}
                </p>
              </div>
              <p className="xl:w-52 text-sm">{item.description}</p>
              <p className="font-bold text-lg">Rp. {item.price}</p>
              <button className="rounded-xl bg-primary-blue text-sm text-white xl:w-52 py-2">
                Lihat Produk
              </button>
            </div>
          ))}
        </div>
        {/* end list produk */}
      </div>
    </div>
  );
}

export default Produk;
