import { GiHornedHelm } from "react-icons/gi";

import { days, months } from "../utils";

const Header = () => {
    const date = new Date();
    return (
        <>
            <h1>
                <GiHornedHelm />
                Powerlist
            </h1>
            <div className="date">
                <p>{days[date.getDay()]}</p>
                <p>{date.getDate()},</p>
                <p>{months[date.getMonth()]}</p>
                <p>{date.getFullYear()}</p>
            </div>
        </>
    );
};

export default Header;
