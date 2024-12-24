import errorimg from '../../assets/images/errore.jpg'

const Errorepage = () => {
    return (
        <div>
            <img loading="lazy" className='w-full min-h-min mx-auto' src={errorimg} alt="" />
        </div>
    );
};

export default Errorepage;