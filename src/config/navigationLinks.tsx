import { AppHeaderProps } from "../containers/AppHeader";

export const headerProps: AppHeaderProps = {
    logo: "ALVZ",
    links: [
        {
            label: "About",
            route: "#about",
            key: 'about'
        },
        {
            label: "Experience",
            route: "#experience",
            key: 'experience'
        }
    ]
};