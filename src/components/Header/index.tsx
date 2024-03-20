import ToggleMode from "@/components/ToggleMode";
import Menu from "@/components/Menu";

export default function Header() {
    return (
        <header className="pt-[21px] px-[21px] flex items-center justify-between">
            <Menu/>
            <ToggleMode/>
        </header>
    );
}
