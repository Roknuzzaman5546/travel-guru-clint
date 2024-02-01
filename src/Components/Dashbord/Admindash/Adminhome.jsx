import { useContext } from "react";
import { Authcontext } from "../../Authprovider/Authprovider";
import { FaMoneyBill, FaSitemap, FaTrailer, FaUser } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import UseAxiospublic from "../../Hooks/useaxiospublic";
import usePlace from "../../Hooks/Useplace";
import useHotel from "../../Hooks/useHotel";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import useUser from "../../Hooks/useUser";

const Adminhome = () => {
    const { user } = useContext(Authcontext)
    const axiospublic = UseAxiospublic();
    const [place] = usePlace();
    const [hotel] = useHotel();
    const [users] = useUser();

    const colors = ['#0088FE', '#FFBB28', '#FF8042', 'red', 'pink'];
    const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

    const placeprice = place.reduce((total, item) => total + item.cost, 0)
    const hotelprice = hotel.reduce((total, item) => total + item.bookingCost, 0)
    const totalPrice = placeprice + hotelprice;
    const price = parseInt(totalPrice)
    console.log(price)
    const items = place.length + hotel.length;


    const { data: stats } = useQuery({
        queryKey: ['admin-home'],
        queryFn: async () => {
            const res = await axiospublic.get("/admin-stats")
            return res.data
        }
    })

    const data = [
        {
            name: "Total items price",
            price: price
        },
        {
            name: "Total revenue",
            price: stats?.revenue
        },
        {
            name: "Total items",
            price: items
        },
        {
            name: 'Total users',
            price: users?.length
        }
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className=" w-11/12 mx-auto">
            <h2 className="ml-4 text-5xl font-mono font-bold mt-5 mb-8">Hi this is <span className=" text-pink-600">{user.displayName}(admin)</span> home</h2>
            <div className=" flex lg:flex-row flex-col justify-evenly items-center gap-4">
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] py-2 rounded flex justify-center items-center gap-2">
                    <FaUser className=" text-white text-5xl font-bold"></FaUser>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{stats?.users}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">All users</h2>
                    </div>
                </div>
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] py-2 rounded flex justify-center items-center gap-2">
                    <FaSitemap className=" text-white text-5xl font-bold"></FaSitemap>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{stats?.item}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Items</h2>
                    </div>
                </div>
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#FE4880] to-[#FECDE9] py-2 rounded flex justify-center items-center gap-2">
                    <FaMoneyBill className=" text-white text-5xl font-bold"></FaMoneyBill>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{stats?.revenue} $</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Revenue</h2>
                    </div>
                </div>
                <div className=" lg:w-5/12 w-[full] lg:h-[150px] h-[150px]  bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] py-2 rounded flex justify-center items-center gap-2">
                    <FaTrailer className=" text-white text-5xl font-bold"></FaTrailer>
                    <div className=" flex flex-col items-center">
                        <h2 className=" text-2xl font-bold font-sans text-white">{stats?.orders}</h2>
                        <h2 className=" text-2xl font-bold font-sans text-white">Orders</h2>
                    </div>
                </div>
            </div>
            <div className=" flex mt-10 justify-around items-center">
                <div className=" w-full">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="price" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                        <Legend></Legend>
                    </BarChart>
                </div>
                <div className=" w-full">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="price"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Adminhome;