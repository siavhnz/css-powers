export default async function SplitNavigation() {
    return <>
        split navigation page

        <ul className="flex gap-x-4">
            <li>home</li>
            <li>products</li>
            <li>shop</li>
            <li>contact us</li>
            <li>about us</li>
            <li className="ml-auto">signup / login</li>
        </ul>
    </>
}
