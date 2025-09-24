import DropDown from '../components/DropDown';
import MarkdownRenderer from '../components/MarkdownRender';
import { clusterDiagram } from '../code/K8-code/Cluster-diagram';

export type DataItem = {
  id: string;
  category: string;
  title: string;
  code: string;
  shortcut?: string;
  description: string;
};

export type Data = {
  pods: Array<DataItem>;
  services: Array<DataItem>;
  deployments: Array<DataItem>;
};

export type DropDownProps = {
  data: Data;
};

const K8sPage = ({ data }: DropDownProps) => {
  return (
    <>
      <h3 className='text-info text-center'> K8s Commands</h3>
      <DropDown data={data}></DropDown>

      <MarkdownRenderer content={clusterDiagram} />
    </>
  );
};

export default K8sPage;
