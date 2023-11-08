import { useSelector } from "react-redux"

function CarTotal(){
    const total = useSelector(({ cars : { data}}) => {
        let totalCost = 0;
        data.map((car) => 
            totalCost = totalCost + car.cost
        )
        return totalCost
        
    })
    return <div className="car-value">
        Total Cost : ${total}
    </div>
}

export default CarTotal