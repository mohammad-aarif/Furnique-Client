import ShopNow from '../../../Components/Buttons/ShopNow/ShopNow';
import './hotcategories.css'
const HotCategories = () => {
    return (
        <div className="hot-categories py-8 px-12 flex-col md:flex-row">
            <div className="relative z-10">
                <div className="overlay bg-[#03500fc4]">
                    <h2 className='text-3xl font-bold text-amber-300'>Sofa</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, voluptates.</p>
                    <ShopNow link='/'/>                   
                </div>
                <img src="/src/assets/sofa.jpg" alt="" />
            </div>
            <div className="flex-col">
                <div className="h-1/2 relative z-10">
                    <div className="overlay bg-[#8f4b21c1]">
                        <h2 className='text-3xl font-bold text-amber-300'>Sofa</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, voluptates.</p>
                        <ShopNow link='/'/>                   
                    </div>
                    <img src="/src/assets/bed.jpg" alt="" />
                </div>
                <div className="h-1/2 relative z-10">
                    <div className="overlay bg-[#ab6510b3]">
                        <h2 className='text-3xl font-bold text-amber-300'>Sofa</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, voluptates.</p>
                        <ShopNow link='/'/>                   
                    </div>
                    <img src="/src/assets/easy-chair.jpg" alt="" />
                </div>
            </div>                    
        </div>
    );
}
export default HotCategories;