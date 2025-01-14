import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailImg from "../img/detail.jpg";
import { useNavigate, useParams } from "react-router-dom";

function DetailProduk() {
  const product = useSelector((state) => state.categories.selectedProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(selectedProduct(Number(id)));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id, dispatch]);

  const handleBack = () => {
    navigate(-1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <button
        className="w-max py-3 px-4 rounded-full bg-white hover:border-2 border-primary-blue fixed left-8 z-10"
        onClick={handleBack}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      {/* content detail */}
      <div>
        <div className="flex mt-32 gap-20">
          <div className="relative">
            <img
              src={DetailImg}
              alt=""
              className="size-96 object-cover ml-40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-left">{product?.title}</h2>
            <p className="w-[33rem] text-justify">{product?.description}</p>
            <h2 className="text-2xl font-bold text-left">Rp. {product?.price}</h2>
            <p className="w-[33rem] text-sm text-justify">
              *Harga yang tertera dapat berubah-ubah, namun tidak jauh dari harga yang tertera.
              Anda bisa mengetahui harga pastinya dengan datang ke toko ATK HK JAYA
            </p>
            <div className="mt-1 flex justify-between text-primary-blue hover:font-bold hover:cursor-pointer items-center">
              <span>Spesifikasi Produk</span>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="border-b-96 border border-primary-blue rounded-full"></div>
            <div className="mt-1 flex justify-between text-primary-blue hover:font-bold hover:cursor-pointer items-center">
              <span>Maps ke Toko ATK HK Jaya </span>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="border-b-96 border border-primary-blue rounded-full"></div>
          </div>
        </div>
      </div>
      {/* end content detail */}

      {/* produk spesification */}
      <div className="ml-40 my-20 mr-28 flex flex-col gap-3">
        <h1 className="text-xl text-primary-blue font-bold text-left">
          Spesifikasi Produk
        </h1>
        <div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-sm">MERK:</p>
            <p className="text-sm">{product?.merk}</p>
          </div>
          <div className="border-b-80 border border-slate-300 rounded-full mb-2"></div>
        </div>
        <div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-sm">Harga (Rp):</p>
            <p className="text-sm">{product?.price}</p>
          </div>
          <div className="border-b-80 border border-slate-300 rounded-full mb-2"></div>
        </div>
        <div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-sm">Warna:</p>
            <p className="text-sm">{product?.color}</p>
          </div>
          <div className="border-b-80 border border-slate-300 rounded-full mb-2"></div>
        </div>
        <div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-sm">Ukuran:</p>
            <p className="text-sm">{product?.size}</p>
          </div>
          <div className="border-b-80 border border-slate-300 rounded-full mb-2"></div>
        </div>
      </div>
      {/* end produk spesification */}

      <Footer />
    </div>
  );
}

export default DetailProduk