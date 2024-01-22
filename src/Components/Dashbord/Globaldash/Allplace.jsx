import Topplacedetails from "../../Home/topplacedetails";
import usePlace from "../../Hooks/Useplace";

const Allplace = () => {
    const [place] = usePlace();
    return (
        <div className="md:max-w-screen-2xl w-11/12 mx-auto">
            
            <h2 className=" text-5xl font-bold font-mono text-center mt-5 mb-12">All Tour place</h2>
            <div>
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        place.map(item => <Topplacedetails key={item.id} item={item}>
                        </Topplacedetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Allplace;