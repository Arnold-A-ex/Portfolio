

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-card_bg py-6 mt-8 font-outfit">
            <div className="container mx-auto text-center space-y-2">
                <p className="text-secondary ">Let's Work Together</p>
                <span>esimnachi10@gmail.com</span>
                <hr className="text-secondary"/>
                <div className="md:flex justify-between items-center space-x-6 p-2">
                    <p className="text-sm text-secondary hidden md:block">  &copy;{ currentYear } Ukaegbu Esimnachi. All rights reserved</p>
                    <div className="flex gap-x-3 text-sm">
                        <a href="https://wa.me/2349124991793?text=Hello%20I%20saw%20your%20portfolio%20and%20want%20to%20connect" className="hover:text-accent">Whatsapp</a>
                        <a href="mailto:esimnachi10@gmail.com" className="hover:text-accent">Email</a>
                        <a href="https://github.com/Arnold-A-ex" target="_blank" className="hover:text-accent">GitHub</a>
                        <a href="https://linkedin.com/in/esimnachi-ukaegbu-aa090524b?utm_source=share&utm_campaign=share_via&utm_content=profile" target="_blank" className="hover:text-accent" >LinkedIn</a>
                    </div>
                    <p className="text-xs text-secondary md:hidden text-left mt-3">  &copy;{ currentYear } Ukaegbu Esimnachi. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer