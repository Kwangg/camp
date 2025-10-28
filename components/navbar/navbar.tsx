import { Darkmode } from "./darkmode"
import DropdownListMenu from "./DropdownListMenu"

const navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between py-8">
การเรียกคืน

                <div className="flex gap-4">
                    <Darkmode/>
                    <DropdownListMenu/>
                </div>
                
            </div>
           
        </nav>

    )
}
export default navbar