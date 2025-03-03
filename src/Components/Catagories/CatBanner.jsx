import ShopNow from '../Buttons/ShopNow/ShopNow';

const CatBanner = ({className, bg, img, title, desc, link}) => {
    return (
        <div className={`relative z-10 ${className}`}>
            <div className={`overlay ${bg}`}>
                <h2 className='text-3xl font-bold text-amber-300'>{title}</h2>
                <p className='text-xsm'>{desc}</p>
                <ShopNow link={link}/>                   
            </div>
            <img src={img} alt={title} />
        </div>
    );
};

export default CatBanner;