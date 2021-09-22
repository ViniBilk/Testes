import { api } from "./api";

async function CheckIn({token}) {
    try {
        const res = await api.post("/hotel/checkin", { token });
        
       console.log(res)   
        
    } catch (err) {
        console.log(err);
        throw new Error("Ocorreu um Erro");
    }
}

async function CheckOut({token}) {
    try {
        const res = await api.post("/hotel/checkout", { token });
        
       console.log(res)   
        
    } catch (err) {
        console.log(err);
        throw new Error("Ocorreu um Erro");
    }
}

const hotelServices = {
    CheckIn,
    CheckOut
}

export default hotelServices;