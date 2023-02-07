import {useEffect} from "react";
import Aos from "aos";
import TechnologyList from "./TechnologyList";

function Technology() {

    useEffect(() => {
        Aos.init({duration: 2000})
    })
    return (
        <div className="item__technology" data-aos="fade-down">
            {
                TechnologyList.map((e) => {
                    return <section className="technology__menu__container" key={e.id}>
                        <img className="technology__menu__img" src={e.img} alt={e.name}/>
                    </section>
                })

            }
        </div>
    );
}

export default Technology;