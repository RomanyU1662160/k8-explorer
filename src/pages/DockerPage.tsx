import DropDown from "../components/DropDown"



export type DataItem = {
    "id": string,
    "categroy": string,
    "title": string,
    "code": string,
    "shortcut"?: string,
    "description": string
}

export type DockerData = {
    images: Array<DataItem>,
}



export type DockerDropDownProps = {
    data: DockerData
}



const DcokerPage = ({ data }: DockerDropDownProps) => {

    return (<>
        <h3 className="text-info text-center"> Docker Commands</h3>
        <DropDown data={data}></DropDown>
    </>);
}

export default DcokerPage;