import ShopNow from '../../../Components/Buttons/ShopNow/ShopNow';
import CatBanner from '../../../Components/Catagories/CatBanner';
import './hotcategories.css'
const HotCategories = () => {
    return (
        <div className="hot-categories py-8 px-12 flex-col md:flex-row">
            <CatBanner 
                    className="" 
                    bg='bg-[#ab6510b3]'
                    img = '/src/assets/easy-chair.jpg'
                    title = 'Chair'
                    desc = 'Cozy, stylish and ultra comfortable'
                    link = '/'
                    />
            <div className="flex-col">
                <CatBanner 
                    className="h-1/2" 
                    bg='bg-[#8f4b21c1]'
                    img = '/src/assets/bed.jpg'
                    title = 'Bed'
                    desc = 'Relax, recharge, and sleep in comfort'
                    link = '/'
                    />
                <CatBanner 
                    className="h-1/2" 
                    bg='bg-[#03500fc4]'
                    img = '/src/assets/sofa.jpg'
                    title = 'Sofa'
                    desc = 'Stylish, comfy and inviting.'
                    link = '/products'
                    />
            </div>                    
        </div>
    );
}
export default HotCategories;