import { createBrowserRouter } from "react-router-dom";
import App from '../layouts/App';
import Beranda from "../pages/Beranda";
import AlatSeni from "../pages/AlatSeni";
import Atk from "../pages/Atk";
import Kertas from '../pages/Kertas';
import Peralatan from '../pages/Peralatan';
import DetailProduk from "../components/DetailProduk";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Beranda/>
            },
            {
                path: '/alatSeni',
                element: <AlatSeni />
            },
            {
                path: '/produk',
                element: <DetailProduk />
            },
            {
                path: '/atk',
                element: <Atk />
            },
            {
                path: '/kertas',
                element: <Kertas />
            },
            {
                path: 'peralatan',
                element: <Peralatan />
            }
        ]
    }
])

export default router;