import { Tree, TreeNode } from "react-organizational-chart";

const Chart = () => {
  const Node = ({ name }) => (
    <div className="bg-gray-900 text-white p-2 border border-gray-400 rounded-md shadow-md">
      <h6 className="text-sm sm:text-base font-bold">{name}</h6>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-auto">
        <div
          className="w-[272px] sm:w-[530px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]"
          style={{ minWidth: "272px", overflowX: "scroll" }}
        >
          <Tree label={<Node name="AddisFinancial" />}>
            <TreeNode label={<Node name="Leadership Team" />}>
              <TreeNode label={<Node name="CEO" />} />
              <TreeNode label={<Node name="CTO" />} />
              <TreeNode label={<Node name="CFO" />} />
            </TreeNode>
            <TreeNode label={<Node name="Development" />}>
              <TreeNode label={<Node name="Frontend Team" />} />
              <TreeNode label={<Node name="Backend Team" />} />
            </TreeNode>
            <TreeNode label={<Node name="Legal & Compliance" />}>
              <TreeNode label={<Node name="Legal Team" />} />
              <TreeNode label={<Node name="Compliance Team" />} />
            </TreeNode>
            <TreeNode label={<Node name="Community Management" />}>
              <TreeNode label={<Node name="Social Media" />} />
              <TreeNode label={<Node name="Community Outreach" />} />
            </TreeNode>
          </Tree>
        </div>
      </div>
    </div>
  );
};

export default Chart;
