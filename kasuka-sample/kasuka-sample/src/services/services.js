import ServicesGenerator from "./servicesGenerator";
import './services.css'
export default function Services(){
    const services = [
        { id: 1, icon: 'fa fa-angellist', title: 'Iusmod', paragraph:'Lorem ipsum dolor'},
        { id: 2, icon: 'fa fa-user', title: 'Molestie', paragraph:'molestie at elementum'},
        { id: 3, icon: 'fa fa-windows', title: 'Viverra', paragraph:'feugiat in ante'},
        { id: 4, icon: 'fa fa-book', title: 'Pharetra', paragraph:'semper eget'},
        { id: 5, icon: 'fa fa-camera', title: 'Pretium', paragraph:'Tellus molestie'},
        { id: 6, icon: 'fa fa-upload', title: 'Parturient', paragraph:'interdum varius'},
        { id: 7, icon: 'fa fa-arrow-circle-up', title: 'Iusmod', paragraph:'services services'},
        { id: 8, icon: 'fa fa-car', title: 'Molestie', paragraph:'molestie varius'},
        { id: 9, icon: 'fa fa-signal', title: 'Ante', paragraph:'interdum eget'}
    ]
    return(
        <div>
            <div className="row1">
                <ServicesGenerator {...services[0]}></ServicesGenerator>
                <ServicesGenerator {...services[1]}></ServicesGenerator>
                <ServicesGenerator {...services[2]}></ServicesGenerator>
            </div>
            <div className="row2">
                <ServicesGenerator {...services[3]}></ServicesGenerator>
                <ServicesGenerator {...services[4]}></ServicesGenerator>
                <ServicesGenerator {...services[5]}></ServicesGenerator>
            </div>
            <div className="row3">
                <ServicesGenerator {...services[6]}></ServicesGenerator>
                <ServicesGenerator {...services[7]}></ServicesGenerator>
                <ServicesGenerator {...services[8]}></ServicesGenerator>
            </div>
        </div>
    )
}