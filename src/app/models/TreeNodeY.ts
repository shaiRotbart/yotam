import { TreeNode } from "primeng/api";

export  class TreeNodeY implements TreeNode
{
    label?: string;
    data?: any;
    icon?: string;
    expandedIcon?: any;
    collapsedIcon?: any;
    children?: TreeNode<any>[];
    leaf?: boolean;
    expanded?: boolean;
    type?: string;
    parent?: TreeNode<any>;
    partialSelected?: boolean;
    styleClass?: string;
    draggable?: boolean;
    droppable?: boolean;
    selectable?: boolean;
    key?: string;
}