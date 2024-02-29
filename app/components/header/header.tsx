export default function Header () {
    return (<div className="flex flex-row pt-6 pb-12 px-60 z-10 relative">
        <div className="w-1/2 flex flex-row justify-center">
            <span className="text-lg">Bootslander</span>
        </div>
        <ul className="w-1/2 flex flex-row justify-between items-center text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Gallery</li>
            <li>Team</li>
            <li>Pricing</li>
            <li>Drop Down</li>
            <li>Contact</li>
        </ul>
    </div>)
}