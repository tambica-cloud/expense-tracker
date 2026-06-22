import { FaPizzaSlice, FaCar, FaShoppingBag, FaFilm, FaBox } from "react-icons/fa";

const categoryConfig = {
    Food: {        
        icon: FaPizzaSlice,
        color: "text-orange-500"        
    },
    Transport: {
        icon: FaCar,
        color: "text-blue-500"
    },
    Shopping: {
        icon: FaShoppingBag,
        color: "text-purple-500"
    },
    Entertainment: {
        icon: FaFilm,
        color: "text-red-500"
    },
    Other: {
        icon: FaBox,
        color: "text-gray-500"
    }

}

export default categoryConfig