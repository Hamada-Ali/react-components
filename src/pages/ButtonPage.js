import Button from '../components/Buttons'
import { GoBell } from "react-icons/go";

const ButtonPage = () => {
    return (
    <div>
        <div>
            <Button primary rounded outline><GoBell/>click me</Button>
        </div>
        <div>
            <Button warning>click me 2 </Button>
        </div>
        <div>
            <Button secondary>click me 3</Button>
        </div>
        <div>
            <Button rounded outline  danger>click me 4</Button>
        </div>
        <div>
            <Button success>click me 5</Button>
        </div>
    </div>
    )
}


export default ButtonPage