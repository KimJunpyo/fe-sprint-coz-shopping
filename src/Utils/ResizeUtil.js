import { debounce } from "./TimerUtil";

export const handleResize = (list, setState) => {
    return debounce(() => {
        setState(() => {
            if (window.innerWidth <= 300) return list.slice(0, 1);
            return list.slice(0, Math.floor(window.innerWidth / 300));
        });
    }, 50)
};